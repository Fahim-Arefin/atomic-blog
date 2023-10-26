import { useState } from "react";

function SlowComponent() {
  // If this is too slow on your maching, reduce the `length`
  const words = Array.from({ length: 100_000 }, () => "WORD");
  return (
    <ul>
      {words.map((word, i) => (
        <li key={i}>
          {i}: {word}
        </li>
      ))}
    </ul>
  );
}

function Counter({ children }) {
  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Slow counter?!?</h1>
      <button onClick={() => setCount((c) => c + 1)}>Increase: {count}</button>

      {children}
    </div>
  );
}

export default function Test() {
  // const [count, setCount] = useState(0);
  // return (
  //   <div>
  //     <h1>Slow counter?!?</h1>
  //     <button onClick={() => setCount((c) => c + 1)}>Increase: {count}</button>

  //     <SlowComponent />  //SlowComponent will re-render each time counter state update
  //   </div>
  // );

  return (
    <div>
      <Counter>
        {/*SlowComponent will not re-render each time counter state update as it is passed as a children. it can also be true
        if it is passed as a prop. 
        This is already created, then it passed as a children thats why it will not re-render.
        Thats why when a state is updated inside context then only its consumer will re-render not all the child bcz context takes 
        then as a children prop  */}
        <SlowComponent />
      </Counter>
    </div>
  );
}
