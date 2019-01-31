import { reducer } from "./reducer";

test("reducer works fine", () => {
  let state = 1;
  let action = { type: "INCREMENT" };

  let result = reducer(state, action);

  let expected = 2;

  expect(result).toEqual(expected);
});
