import { toast } from 'react-toastify';

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
