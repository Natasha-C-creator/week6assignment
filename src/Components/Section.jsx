import "./Section.css";

export default function Section(props) {
  return (
    <div className="Section">
      <h1 className="title">{props.title}</h1>
      <h3 className="content">{props.content}</h3>
      <div className="button-container">
        {props.children}
      </div>
    </div>
  );
}
