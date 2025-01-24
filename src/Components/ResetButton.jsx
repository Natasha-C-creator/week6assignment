import "./ResetButton.css";

export default function ResetButton({ resetCookieCount }) {
    return (
      <button onClick={resetCookieCount} className="ResetButton">Reset</button>
    );
  }