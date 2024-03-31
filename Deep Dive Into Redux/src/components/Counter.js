import React from "react";
import { useSelector, useDispatch } from "react-redux";
import classes from "./Counter.module.css";
import { counterActions } from "../store";

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter.counter);
  const showCounter = useSelector((state) => state.counter.showCounter);

  const toggleCounterHandler = () => {
    console.log("hit");
    dispatch(counterActions.toggle());
  };

  const incrementCounterHandler = () => {
    dispatch(counterActions.increment());
  };

  const decrementCounterHandler = () => {
    if (counter > 0) {
      dispatch(counterActions.decrement());
    }
  };

  const incrementCounterByFiveHandler = () => {
    dispatch(counterActions.increase(5));
  };

  return (
    <main className={classes.counter}>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      {showCounter && (
        <div>
          <h1>Redux Counter</h1>
          <div className={classes.value}>{counter}</div>
          <div>
            <button onClick={incrementCounterHandler}>Increment</button>
            <button onClick={incrementCounterByFiveHandler}>
              Increment by 5
            </button>
            <button onClick={decrementCounterHandler}>Decrement</button>
          </div>
        </div>
      )}
    </main>
  );
};

export default Counter;
