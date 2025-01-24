// 1. Importing `useState` from React to manage state
import { useState } from "react";
import "./BuyCookieButton.css";

// 2. Defining the `Counter` component as a function that will be mounted in the user interface. (refers to the process of creating and describing how the Counter component will behave and render its UI in React. It defines WHAT the component will render and HOW the component should behave.) Here is where you are giving your component a name.
export default function Counter() {
  //The logic for the function follows underneath

  // 3. Declaring the `counter` state variable and `setCounter` function. Initialises the counter to 0.
  // state variable = counter (which will hold the current count)
  // function = 'setCounter' (function that allows us to update the value of counter)
  const [counter, setCounter] = useState(0);

  // 4. Logging the current value of `counter` to the console (helps with debugging)
  console.log(counter); // Every time the component renders, the current `counter` value will be logged in the console

  // 5. Rendering the component (UI). This part is the mounting phase, when it is added to the DOM.
  return (
    <>
      {/* 6. Rendering the heading (Displaying the title of the counter) */}
      <h3>Count: {counter}</h3>
      {/* 7. Count: {counter} shows the current value of `counter` */}
      {/* This will show the current value of `counter` (starts at 0) */}
      {/* 8. Rendering the button. A button that will increase `counter` by 1 when clicked */}
      <button
        className="counter"
        onClick={() => {
          // 9. EVENT = onClick. When the button is clicked, the onClick handler triggers the setCounter function to update the state. When the button is clicked, the following happens:
          setCounter(counter + 1); // 10. This updates the `counter` by adding. Every time setCounter is called, React re-renders the component to show the updated value of counter (re-rendering).
        }}
      >
        Buy 1 Cookie {/* This is the text displayed on the button */}
      </button>
    </>
  );
}
