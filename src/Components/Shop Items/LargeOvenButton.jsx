import "./LargeOvenButton.css";

export default function LargeOvenButton({ buyALargeOven }) {
    return (
      <button onClick={buyALargeOven} className="largeovenbutton">Buy A Large Oven</button>
    );
  }