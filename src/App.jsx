import "./App.css";
import { data } from "./lib/data";
import { cookieUpgrades } from "./lib/cookieUpgrades";
import Header from "./Components/Header.jsx";
import Section from "./Components/Section.jsx";
import ShopSection from "./Components/ShopSection.jsx";
import Footer from "./Components/Footer.jsx";
import ResetButton from "./Components/ResetButton.jsx";
import { useState, useEffect, useRef } from "react";
import Counter from "./Components/BuyCookieButton.jsx";
import ViewShopButton from "./Components/ViewShopButton.jsx";
import LargeOvenButton from "./Components/Shop Items/LargeOvenButton.jsx";
import TeamButton from "./Components/Shop Items/TeamButton.jsx";

export default function App() {
  const [count, setCount] = useState(0);
  const [cps, setCPS] = useState(0);
  const [showShop, setShowShop] = useState(false);

  function resetCookieCount() {
    console.log("Reset button was clicked - count was reset to 0.");
    setCount(0);
    setShowShop(false);
  }

  function buyATeam() {
    console.log("Button to Buy A Team was clicked.");
    setCount(count + 10);
  }

  function buyALargeOven() {
    console.log("Button to Buy A Large Oven was clicked.");
    setCount(count + 5);
  }

  const shopSectionRef = useRef(null);
  const handleViewShopClick = () => {
    setShowShop(true);
    if (shopSectionRef.current) {
      shopSectionRef.current.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    const myInterval = setInterval(() => {
      setCount((currentCookies) => currentCookies + 1);
    }, 1000);
    return () => {
      clearInterval(myInterval);
    };
  }, []);

  return (
    <>
      <Header />
      <div key={data[0].id}>
        <Section title={data[0].title} content={data[0].content}>
          <Counter count={count} setCount={setCount} />
          <div className="button-container">
            <ResetButton resetCookieCount={resetCookieCount} />
            {count >= 10 && !showShop && (
              <ViewShopButton onClick={handleViewShopClick} />
            )}
          </div>
        </Section>

        {showShop && (
          <ShopSection
            ref={shopSectionRef}
            title={cookieUpgrades.title}
            content={cookieUpgrades.content}
          >
            <LargeOvenButton buyALargeOven={buyALargeOven} />
            <TeamButton buyATeam={buyATeam} />
          </ShopSection>
        )}
      </div>
      <Footer />
    </>
  );
}
