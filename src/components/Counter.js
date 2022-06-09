import styles from "./Counter.module.scss";
import { useSelector, useDispatch } from "react-redux";
import { React } from "react";
import { counterActions } from "../store/IndexRedux";

export const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counterIn.counterStart);
  const show = useSelector((state) => state.counterIn.showCounter);
  const amountToChange = 5;

  const incrementHandler = () => {
    dispatch(counterActions.increment());
  };

  const increaseBy5Handler = () => {
    dispatch(counterActions.changeAmount(amountToChange));
  };

  const decrementHandler = () => {
    dispatch(counterActions.decrement());
  };

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggle());
  };

  // const incrementHandler = () => {
  //   dispatch({ type: "increment" });
  // };

  // const increaseBy5Handler = () => {
  //   dispatch({ type: "changeAmount", amount: amountToChange });
  // };

  // const decrementHandler = () => {
  //   dispatch({ type: "decrement" });
  // };

  // const toggleCounterHandler = () => {
  //   dispatch({ type: "toggle" });
  // };

  return (
    <main className={styles.counter}>
      <h1>Redux Counter</h1>
      {show && (
        <div>
          <div className={styles.value}>{counter}</div>
          <div>
            <button onClick={incrementHandler}>Increment</button>
            <button onClick={increaseBy5Handler}>
              Increase By {amountToChange}
            </button>
            <button onClick={decrementHandler}>Decrement</button>
          </div>
        </div>
      )}
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

// class Counter extends Component {
//   incrementHandler() {
//     this.props.increment();
//   }
//   decrementHandler() {
//     this.props.decrement();
//   }
//   toggleCounterHandler() {

//   }
//   render() {
//     return (
//       <main className={styles.counter}>
//         <h1>Redux Counter</h1>
//         <div className={styles.value}>{this.props.counter}</div>
//         <div>
//           <button onClick={this.incrementHandler.bind(this)}>Increment</button>
//           <button onClick={this.decrementHandler.bind(this)}>Decrement</button>
//         </div>
//         <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//       </main>
//     );
//   }
// }

// const mapStateToProps = (state) => {
//   return {
//     counter: state.counter,
//   };
// };

// const mapDispatchToProps = (dispatch) => {
//   return {
//     increment: () => dispatch({ type: "increment" }),
//     decrement: () => dispatch({ type: "decrement" }),
//   };
// };

// export default connect(mapStateToProps, mapDispatchToProps)(Counter);
