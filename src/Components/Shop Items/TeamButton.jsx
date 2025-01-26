import "./TeamButton.css";

export default function ResetButton({ buyATeam }) {
  return (
    <button onClick={buyATeam} className="BuyATeam">
      Hire a Baker (+10 🍪)
    </button>
  );
}
