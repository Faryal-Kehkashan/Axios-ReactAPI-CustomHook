import "./App.css";
import { useAxios } from "./useAxios";
import React from "react";

function App() {
  const { data, error, loaded } = useAxios(
    "http://localhost:5000/data/",
    "get"
  );

  return (
    <div className="App">
      <div>
        {" "}
        {loaded ? (
          error ? (
            <span>Error: {error}</span>
          ) : (
            <p>{JSON.stringify(data || {})}</p>
          )
        ) : (
          <span>Loading...</span>
        )}
      </div>
    </div>
  );
}

export default App;
