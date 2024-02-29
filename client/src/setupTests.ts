// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom";

import { MsalReactTesterPlugin } from "msal-react-tester";
import { expect, vi } from "vitest";

// @ts-expect-error Unclear why this wants an additional member, docs say this is fine.
MsalReactTesterPlugin.init({
  spyOn: vi.spyOn,
  expect,
  // eslint-disable-next-line @typescript-eslint/unbound-method
  resetAllMocks: vi.resetAllMocks,
});
