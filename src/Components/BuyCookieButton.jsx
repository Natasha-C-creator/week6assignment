// 1. Importing `useState` from React to manage state
import "./BuyCookieButton.css";

export default function Counter({ count, setCount }) {
  console.log(count);

  return (
    <>
      <h3>Count: {count}</h3>
      <button
        className="counter"
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Buy 1 Cookie
      </button>
    </>
  );
}
