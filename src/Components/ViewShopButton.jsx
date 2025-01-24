import "./ViewShopButton.css";

export default function ViewShopButton() {
  return (
    <button
      className="viewshopbutton"
      onClick={() => {
        window.scroll({
          top: 0,
          behaviour: "smooth",
        });
      }}
    >
      View Shop
    </button>
  );
}
