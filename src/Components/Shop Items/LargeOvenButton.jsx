import "./LargeOvenButton.css";

export default function LargeOvenButton({ buyALargeOven }) {
    return (
      <button onClick={buyALargeOven} className="BuyATeam">Buy A Large Oven</button>
    );
  }