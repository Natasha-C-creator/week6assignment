import "./TeamButton.css";

export default function ResetButton({ buyATeam }) {
    return (
      <button onClick={buyATeam} className="BuyATeam">Buy A Team</button>
    );
  }

  // export default function TeamButton() {
//   return (
//     <button>
//       Buy A Team
//     </button>
//   );
// }