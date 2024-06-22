import { RootState } from "../state/store";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "../state/counter/counterSlice";
export default function Counter() {
  const count = useSelector((state: RootState) => state.counter.value);
  const dispatch = useDispatch();

  return (
    <div>
      <h2>{count}</h2>
      <div>
        <button onClick={() => dispatch(increment())}>increment</button>
        <button onClick={() => dispatch(decrement())}>decrement</button>
      </div>
    </div>
  );
}
