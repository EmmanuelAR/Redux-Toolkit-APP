import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment, incrementBy } from "./store/slices/counter";

function App() {
  const { counter } = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  const incrementNumber = 5;

  return (
    <div className="App">
      <h1>Redux Toolkit</h1>
      <div className="card">
        <h2>count is {counter}</h2>
        <button
          onClick={() => {
            dispatch(increment());
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            dispatch(decrement());
          }}
        >
          Decrement
        </button>
        <button
          onClick={() => {
            dispatch(incrementBy(incrementNumber));
          }}
        >
          Increment by {incrementNumber}
        </button>
      </div>
    </div>
  );
}

export default App;
