import "./LargeOvenButton.css";

export default function LargeOvenButton({ buyALargeOven }) {
    return (
      <button onClick={buyALargeOven} className="largeovenbutton">Buy a Large Oven</button>
    );
  }