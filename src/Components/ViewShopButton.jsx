import "./ViewShopButton.css";
import "./ShopSection.jsx";

export default function ViewShopButton({ onClick }) {
  return (
    <button className="viewshopbutton" onClick={onClick}>
      View Shop 🛒
    </button>
  );
}
