import classes from "./Input.module.css";

const Input = (props) => {
  return (
    <div className={props.className}>
      <label className={classes.label} htmlFor={props.id}>
        {props.labelName}
      </label>
      <input
        className={classes.input}
        id={props.id}
        value={props.value}
        type={props.type}
        onBlur={props.onBlur}
        onChange={props.onChange}
      ></input>
      {props.isError ? (
        <div className={classes.error}>{props.errorMessage}</div>
      ) : null}
    </div>
  );
};

export default Input;
