import "./App.css";
import { data } from "./lib/data";
import Header from "./Components/Header.jsx";
import Section from "./Components/Section.jsx";
import Footer from "./Components/Footer.jsx";
import ResetButton from "./Components/ResetButton.jsx";
import { useState } from "react";
import { useEffect } from "react";
import Counter from "./Components/BuyCookieButton.jsx";
import ViewShopButton from "./Components/ViewShopButton.jsx";

export default function App() {
  const [count, setCount] = useState(0);
  // const [cps, setCPS] = useState(0);
 
  function resetCookieCount() {
    console.log("Reset button was clicked - count was reset to 0.");
    setCount(0);
  }

  return (
    <>
      <Header />
      {data.map((dataItem) => {
        return (
          <Section
            key={dataItem.id}
            title={dataItem.title}
            content={dataItem.content}
          >
            <Counter count={count} />
            <ViewShopButton />
            <ResetButton resetCookieCount={resetCookieCount} />
          </Section>
        );
      })}
      <Footer />
    </>
  );
}



//MANNY'S WALKING SKELETON:
// export default function App() {
  //I need TWO state variables to store two values --> one state to track the number of cookies, and one state to tracK the cookies per second (cps)


  //this block of code is very useful. What does it do?
  // useEffect(() => {
  //   const myInterval = setInterval(() => {
  //     setCookies((count) => {
  //       count + cps;
  //     });
  //   }, 1000);
  //   return () => {
  //     return currentCookies + {cps};
  //     clearInterval(myInterval);
  //   };
  // }, [cps]);

  //we need some logic for the shop upgrades (cookies go down, cps goes up)
  //write your logic here!

//   return (
//     <>
//       <h1>Cookie Clicker</h1>
//       {/* we need an element to interact with the user */}
//       {/* we need elements to render our cookies and cps for the user to see the values displayed */}
//       {/* we need the shop upgrades rendered here! */}
//     </>
//   );
// }

// function handleFirstClick() {
  //   console.log("You clicked on the first button");
  // }
  // function handleSecondClick() {
  //   console.log("You clicked on the second button");
  // }
  // function handleThirdClick() {
  //   console.log("You clicked on the third button");
  // }
  // function CountButton() {}
  //   console.log("You added one");
  // }