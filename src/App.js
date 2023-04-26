import { useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./Actions/CounterAction";
import { useState } from "react";
import { getData } from "./Actions/UserAction";

function App() {
  const counter = useSelector((state) => state.counter);
  const isLogged = useSelector((state) => state.isLogged);
  const UserList = useSelector((state) => state.userData.value);
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [email, setEmail] = useState("");
  const dispatch = useDispatch();
  const submit = () => {
    const data = dispatch(getData({ name, age, email }));
    console.log(data.payload);
  };
  return (
    <div className="App" style={{ padding: "5rem" }}>
      <h1>counter {counter}</h1>
      <button onClick={() => dispatch(decrement(2))}>-</button>
      <button onClick={() => dispatch(increment(2))}>+</button>
      <input
        type="text"
        name="name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <input
        type="text"
        name="name"
        value={age}
        onChange={(e) => setAge(e.target.value)}
      />
      <input
        type="text"
        name="name"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <button type="submit" onClick={submit}>
        Login
      </button>
      <h6>
        {isLogged ? (
          <div>
            <div>UserData</div>
            <ul>
              <li>{UserList.name}</li>
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
