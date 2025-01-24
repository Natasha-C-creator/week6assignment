import "./App.css";
import { data } from "./lib/data";
import Header from "./Components/Header.jsx";
import Section from "./Components/Section.jsx";
import ShopSection from "./Components/ShopSection.jsx";
import Footer from "./Components/Footer.jsx";
import ResetButton from "./Components/ResetButton.jsx";
import { useState } from "react";
import { useEffect } from "react";
import Counter from "./Components/BuyCookieButton.jsx";
import ViewShopButton from "./Components/ViewShopButton.jsx";
import LargeOvenButton from "./Components/Shop Items/LargeOvenButton.jsx";
import TeamButton from "./Components/Shop Items/TeamButton.jsx";

export default function App() {
  const [count, setCount] = useState(0);
  // const [cps, setCPS] = useState(0);

  function resetCookieCount() {
    console.log("Reset button was clicked - count was reset to 0.");
    //******NEED TO DO THIS TO RESET TO 0 setCount(0);
  }

  function buyATeam() {
    console.log("Button to Buy A Team was clicked.");
    //********** NEED TO DO THIS TO CHANGE THE ADD COOKIES TO PLUS WHATEVER setCount(0);
  }

  function buyALargeOven() {
    console.log("Button to Buy A Large Oven was clicked.");
    //********** NEED TO DO THIS TO CHANGE THE ADD COOKIES TO PLUS WHATEVER setCount(0);
  }

  return (
    <>
      <Header />
      {data.map((dataItem) => {
        return (
          <div key={dataItem.id}>
            <Section title={dataItem.title} content={dataItem.content}>
              <Counter count={count} />
              <ViewShopButton />
              <ResetButton resetCookieCount={resetCookieCount} />
            </Section>
            <Section title={dataItem.shopTitle} content={dataItem.shopContent}>
              <LargeOvenButton buyALargeOven={buyALargeOven} />
              <TeamButton buyATeam={buyATeam} />
            </Section>
          </div>
        );
      })}
      {/* {cookieUpgrade.map((cookieUpgradeItem) => {
        return (
          <ShopSection
            key={cookieUpgradeItem.id}
            title={cookieUpgradeItem.title}
            content={cookieUpgradeItem.content}
          >
            {/* <LargeOvenButton /> */}
      {/* <TeamButton buyATeam={buyATeam} /> */}
      {/* </ShopSection> */}
      <Footer />
    </>
  );
}
