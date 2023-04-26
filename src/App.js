import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./Actions/CounterAction";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const UserList = useSelector((state) => state.userData.value);
  const dispatch = useDispatch();
  console.log(UserList);
  console.log(isLogged);
  return (
    <div className="App" style={{ padding: "5rem" }}>
      <h1>counter {counter}</h1>
      <button onClick={() => dispatch(decrement(5))}>-</button>
      <button onClick={() => dispatch(increment(5))}>+</button>
      <button onClick={() => dispatch(increment(5))}>Login</button>
      <h6>
        {isLogged ? (
          <div>
            <div>UserData</div>
            <ul>
              <li>{UserList.name}</li>
              <li>{UserList.age}</li>
              <li>{UserList.email}</li>
            </ul>
          </div>
        ) : (
          "New User ! Need to Login"
        )}
      </h6>
    </div>
  );
}

export default App;
