import { IMsalContext, useMsal } from '@azure/msal-react';
import { useQuery, UseQueryResult } from '@tanstack/react-query';
import axios, { type AxiosRequestConfig, AxiosResponse } from 'axios';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';

const AUTH_TOKEN_KEY = 'Auth_token';
export type Response<T> = { success: true; data: T } | { success: false; err?: AxiosResponse | undefined };

type AuthResponse = { token_type: string; access_token: string };
type NavigateFunction = ReturnType<typeof useNavigate>;

const getAuthToken = async (msalDetails: IMsalContext, navigate: NavigateFunction) => {
  if (!sessionStorage.getItem(AUTH_TOKEN_KEY)) {
    const account = msalDetails.accounts[0];
    let authResponse;
    try {
      authResponse = await axios<AuthResponse>({
        url: 'http://localhost:3001/api/users/sso-login',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        data: { email: account?.username },
      });
    } catch (err) {
      console.debug(err);
      return null;
    }
    if (authResponse.status === 200) {
      sessionStorage.setItem(AUTH_TOKEN_KEY, authResponse.data.access_token);
    } else if (authResponse.status === 404) {
      navigate('/Gamecontests');
      return null;
    } else {
      console.error(authResponse);
      return null;
    }
  }
  const token = sessionStorage.getItem(AUTH_TOKEN_KEY);
  if (token) {
    return `Bearer ${token}`;
  } else {
    return null;
  }
};

export const useIsAuthorized = () => {
  const msalDetails = useMsal();
  const navigate = useNavigate();
  useEffect(() => {
    (async () => {
      try {
        await getAuthToken(msalDetails, navigate);
      } catch (err) {
        console.debug(err);
      }
    })();
  }, [msalDetails, navigate]);
};

const httpCall = async <T>(
  config: AxiosRequestConfig,
  msalDetails: IMsalContext,
  navigate: NavigateFunction,
): Promise<Response<T>> => {
  const token = await getAuthToken(msalDetails, navigate);
  if (!token) return { success: false };

  const headerConfig: AxiosRequestConfig = {
    ...config,
    headers: {
      ...(config.headers ?? {}),
      Authorization: token,
      'Cache-Control': 'no-store,no-cache,',
      Pragma: 'no-cache',
    },
  };
  try {
    const response = await axios<T>(headerConfig);
    return {
      success: true,
      data: response.data,
    };
  } catch (err) {
    console.error(err);
    if (axios.isAxiosError(err)) {
      if (err.response?.status === 401) {
        sessionStorage.removeItem(AUTH_TOKEN_KEY);
        return { success: false, err: err.response };
      } else {
        return { success: false, err: err.response };
      }
    }
    return { success: false };
  }
};

export const useAuthenticatedQuery = <T>(
  queryKey: unknown[],
  queryConfig: AxiosRequestConfig,
  refetchOnWindowFocus?: boolean,
): UseQueryResult<Response<T>> => {
  const msalDetails = useMsal();
  const navigate = useNavigate();
  const result = useQuery({
    queryKey,
    queryFn: () => httpCall<T>(queryConfig, msalDetails, navigate),
    refetchOnWindowFocus: refetchOnWindowFocus ?? false,
    retry: false,
  });
  const { isPending, error, data } = result;
  useEffect(() => {
    if (error) {
      console.error(error);
    } else if (import.meta.env.DEV) {
      if (isPending) {
        console.debug(queryKey, 'Pending');
      } else {
        console.debug(queryKey, data);
      }
    }
  }, [error, isPending, data, queryKey]);
  return result;
};

const fetchQuery = async (endpoint: string, data?: unknown, method: string = 'POST') => {
  const options: RequestInit = {
    method,
    headers: {
      'Content-Type': 'application/json',
    },
  };

  if (method !== 'GET' && method !== 'HEAD') {
    options.body = JSON.stringify(data);
  }

  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}${endpoint}`, options);
    console.log('response', response);
    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const responseData = await response.json();

    toast.success('Request successful');
    return responseData;
  } catch (error) {
    const errorMessage = (error as Error).message;
    toast.error(`Request failed: ${errorMessage}`);
    throw error;
  }
};

export default fetchQuery;
