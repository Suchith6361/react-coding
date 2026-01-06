import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease } from "../redux/counterSlice";
import { toggleTheme } from "../redux/themeSlice";
import { fetchUsers } from "../redux/userSlice";


const Counter = () => {
  const count = useSelector((state) => state.counter.value);
  const theme = useSelector((state) => state.themes.mode);
   const { data, loading, error } = useSelector(
    (state) => state.users
  );
  const dispatch = useDispatch();

  return (
    <div
      style={{
        padding: "20px",
        backgroundColor: theme === "dark" ? "#333" : "#eee",
        color: theme === "dark" ? "white" : "black",
      }}
    >
      <h2 className="ml-8 text-3xl">Count: {count}</h2>

      <button
        className="bg-green-500 text-3xl ml-4 p-2 rounded-full"
        onClick={() => dispatch(increase())}
      >
        +
      </button>
      <button
        className="bg-red-600 text-3xl ml-4 p-2 rounded-full"
        onClick={() => dispatch(decrease())}
      >
        -
      </button>
      <button
      className="text-2xl bg-yellow-400 p-2 rounded-lg ml-6" onClick={() => dispatch(toggleTheme())}>toggleTheme</button>

   
      <h2 className="text-red-600">User List</h2>

      <button className="bg-blue-600  p-2 rounded-md text-white"  onClick={() => dispatch(fetchUsers())}>
        Load Users
      </button>

      {loading && <p>Loading...</p>}
      {error && <p>{error}</p>}

      {data.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
  
    </div>
  );
};

export default Counter;
