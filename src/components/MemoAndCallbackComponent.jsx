import { useCallback, useEffect, useMemo, useState } from "react";

export function MemoAndCallbackComponent() {
  const [count, setCount] = useState(0);
  const [todos, setTodos] = useState([]);
  useEffect(() => console.log('Re-rendering Memo and Callback...'));
  const calculation = useMemo(() => expensiveCalculation(count), [count]);

  const increment = () => {
    setCount((c) => c + 1);
  };
  const addTodo = useCallback(() => {
    setTodos((t) => [...t, "New Todo"]);
  }, [todos]);

  return (
    <div>
      <h1>Memo and Callback</h1>
      <Todos todos={todos} addTodo={addTodo} />
      <div>
        <p>Count: {count}</p>
        <button className="btn btn-primary" onClick={increment}>+</button>
        <h2>Expensive Calculation</h2>
        {calculation}
      </div>
      <hr/>
    </div>
  );
}

function Todos({ todos, addTodo }) {
  useEffect(() => console.log('Re-rendering Todos...'));
  return <div>
    <h2>My Todos</h2>
    {todos.map((todo, index) => {
      return <p key={index}>{todo}</p>;
    })}
    <button className="btn btn-primary" onClick={addTodo}>Add Todo</button>
  </div>
}

const expensiveCalculation = (num) => {
  console.log("Calculating...");
  for (let i = 0; i < 1000000000; i++) {
    num += 1;
  }
  return num;
}
