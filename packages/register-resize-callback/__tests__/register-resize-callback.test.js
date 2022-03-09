import { init, registerCallback } from "../src";

jest.spyOn(console, "error").mockImplementation(() => void 0);

let createNode = jest.fn((node) => ({
  target: node,
  contentRect: { width: 300 },
}));

let onChange;
let unobserve;
let reset = () => void 0;
ResizeObserver.mockImplementation(
  jest.fn((impl) => {
    const map = new Map();

    onChange = () => {
      impl([...map.values()]);
    };

    reset = () => map.clear();
    unobserve = jest.fn((node) => map.delete(node));

    return {
      observe: jest.fn((node) => {
        const result = createNode(node);
        map.set(node, result);
        impl([result]);
      }),
      disconnect: jest.fn(map.clear),
      unobserve,
    };
  })
);

describe("register-resize-callback", () => {
  test("It will throw if init is not called", () => {
    const node = document.createElement("div");
    expect(() => registerCallback(node, () => void 0)).toThrow();
  });

  test("ResizeObserver is called", async () => {
    init();
    const node = document.createElement("div");
    const callback = jest.fn();
    registerCallback(node, callback);

    expect(callback).toHaveBeenCalledTimes(1);
  });

  test("register and cleanup using callback", async () => {
    init();
    const node = document.createElement("div");
    const callback = jest.fn();

    const cleanup = registerCallback(node, callback);
    expect(callback).toHaveBeenCalledTimes(1);

    const cleanup2 = registerCallback(node, jest.fn());
    onChange();
    expect(callback).toHaveBeenCalledTimes(3);

    cleanup();
    onChange();
    expect(callback).toHaveBeenCalledTimes(3);
    expect(unobserve).toHaveBeenCalledTimes(0);

    cleanup2();

    expect(unobserve).toHaveBeenCalledTimes(1);
  });

  test("register and cleanup using object", async () => {
    init();
    const node = document.createElement("div");
    const callback = jest.fn();
    const callback2 = jest.fn();

    const callbackObj = {
      current: callback,
    };

    const cleanup = registerCallback(node, callbackObj);

    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback2).toHaveBeenCalledTimes(0);

    callbackObj.current = callback2;
    onChange();

    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback2).toHaveBeenCalledTimes(1);
    cleanup();
    onChange();
    expect(callback).toHaveBeenCalledTimes(1);
    expect(callback2).toHaveBeenCalledTimes(1);
  });
});