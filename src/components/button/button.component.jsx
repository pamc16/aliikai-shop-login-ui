import "./button.component.css";

const Button = ({ textButton, colorButton }) => {
  return (
    <div style={{ backgroundColor: colorButton }} className="button--content">
      <div className="button--content--text">{textButton}</div>
    </div>
  );
};

export default Button;
