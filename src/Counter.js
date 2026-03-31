import { useState } from "react";
import { Link } from "react-router-dom";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <div style={styles.container}>
      <div style={styles.box}>
        <h2>Counter App</h2>

        <h1>{count}</h1>

        <div style={{ marginBottom: "10px" }}>
          <button onClick={() => setCount(count + 1)}>➕</button>
          <button onClick={() => setCount(count - 1)}>➖</button>
          <button onClick={() => setCount(0)}>Reset</button>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    marginTop: "50px"
  },
  box: {
    padding: "20px",
    borderRadius: "10px",
    background: "#282c34",
    color: "white",
    textAlign: "center"
  },
  link: {
    color: "#0d6efd",
    textDecoration: "none",
    fontWeight: "bold"
  }
};

export default Counter;