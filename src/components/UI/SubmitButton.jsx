import classes from "./SubmitButton.module.css";

const SubmitButton = (props) => {
  return (
    <div className={props.className}>
      <button type="submit" className={classes.submit} onClick={props.onClick}>
        {props.name}
      </button>
    </div>
  );
};

export default SubmitButton;
