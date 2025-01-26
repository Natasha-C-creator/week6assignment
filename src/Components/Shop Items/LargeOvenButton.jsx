import "./LargeOvenButton.css";

export default function LargeOvenButton({ buyALargeOven }) {
    return (
      <button onClick={buyALargeOven} className="largeovenbutton">Buy Large Oven (+5 🍪)</button>
    );
  }