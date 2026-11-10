import "@testing-library/jest-dom/vitest";
import { beforeEach, vi } from "vitest";

// Pin "today" to 10 Nov 2026 so schedule-dependent tests (W1 open, later waves closed)
// do not change with the real calendar. Only Date is faked; timers stay real.
beforeEach(() => {
  vi.useFakeTimers({ toFake: ["Date"] });
  vi.setSystemTime(new Date(2026, 10, 10, 12));
});

Object.defineProperty(window, "scrollTo", {
  writable: true,
  value: () => {},
});

Object.defineProperty(window, "matchMedia", {
  writable: true,
  value: (query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: () => {},
    removeListener: () => {},
    addEventListener: () => {},
    removeEventListener: () => {},
    dispatchEvent: () => {},
  }),
});
