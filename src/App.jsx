import "./App.css";
import { data } from "./lib/data";
import { cookieUpgrades } from "./lib/cookieUpgrades";
import Header from "./Components/Header.jsx";
import Section from "./Components/Section.jsx";
import ShopSection from "./Components/ShopSection.jsx";
import Footer from "./Components/Footer.jsx";
import ResetButton from "./Components/ResetButton.jsx";
import { useState, useEffect } from "react";
import Counter from "./Components/BuyCookieButton.jsx";
import ViewShopButton from "./Components/ViewShopButton.jsx";
import LargeOvenButton from "./Components/Shop Items/LargeOvenButton.jsx";
import TeamButton from "./Components/Shop Items/TeamButton.jsx";

export default function App() {
  const [count, setCount] = useState(0);
  // const [cps, setCPS] = useState(0);

  function resetCookieCount() {
    console.log("Reset button was clicked - count was reset to 0.");
    setCount(0);
  }

  function buyATeam() {
    console.log("Button to Buy A Team was clicked.");
    setCount(count + 5);
  }

  function buyALargeOven() {
    console.log("Button to Buy A Large Oven was clicked.");
    setCount(count + 10);
  }

  return (
    <>
      <Header />
      {data.map((dataItem) => {
        return (
          <div key={dataItem.id}>
            <Section title={dataItem.title} content={dataItem.content}>
              <Counter count={count} setCount={setCount} />
              <ResetButton resetCookieCount={resetCookieCount} />
            </Section>

            {console.log("Checking if count >= 10:", count >= 10)}

            {count >= 10 && (
              <div key={cookieUpgrades.id}>
                <ViewShopButton />
                <ResetButton resetCookieCount={resetCookieCount} />
                <ShopSection
                  key={cookieUpgrades.id + "-shop"}
                  title={cookieUpgrades.Title}
                  content={cookieUpgrades.Content}
                >
                  <LargeOvenButton buyALargeOven={buyALargeOven} />
                  <TeamButton buyATeam={buyATeam} />
                </ShopSection>
              </div>
            )}
          </div>
        );
      })}
      <Footer />
    </>
  );
}
