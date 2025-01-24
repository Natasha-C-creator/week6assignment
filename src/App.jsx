import "./App.css";
import { data } from "./lib/data";
import Header from "./Components/Header.jsx";
import Section from "./Components/Section.jsx";
import Footer from "./Components/Footer.jsx";
import ResetButton from "./Components/ResetButton.jsx";
import { useState } from "react";
// import { useEffect } from "react";
import Counter from "./Components/BuyCookieButton.jsx";
import ViewShopButton from "./Components/ViewShopButton.jsx";
// import LargeOvenButton from "./Components/Shop Items/LargeOvenButton.jsx"
// import TeamButton from "./Components/Shop Items/TeamButton.jsx";

export default function App(props) {
  const [count, setCount] = useState(0);

  // Not being used:
  // import Button from "./Components/Button.jsx";
  // import ButtonInline from "./Components/ButtonInline.jsx";
  // import ReusableButton from "./Components/ReusableButton.jsx";
  // import CountButton from "./Components/CountButton.jsx";
  // import ListOfItems from "./Components/ListOfItems.jsx";
  // import TimerClean from "./Components/TimerClean.jsx";

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
