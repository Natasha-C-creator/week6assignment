import "./ShopSection.css";

export default function ShopSection(props) {
  return (
    <div className="ShopSection">
      <h1 className="title">{props.title}</h1>
      <h3 className="content">{props.content}</h3>
      {/* <div className="button-container">
        {props.children}
      </div> */}
    </div>
  );
}
