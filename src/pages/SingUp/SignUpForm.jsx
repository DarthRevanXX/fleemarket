import { useFormik } from "formik";
import classes from "./SignUpForm.module.css";

const SignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <form onSubmit={formik.handleSubmit}>
      <label className={classes.label} htmlFor="email">
        Email Address
      </label>
      <input
        className={classes.input}
        id="email"
        name="email"
        type="email"
        onChange={formik.handleChange}
        value={formik.values.email}
      />

      <label className={classes.label} htmlFor="password">
        Password
      </label>
      <input
        className={classes.input}
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />

      <label className={classes.label} htmlFor="confirm-password">
        Confirm Password
      </label>
      <input
        className={classes.input}
        id="confirm-password"
        name="confirm-password"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.confirmPassword}
      />

      <button type="submit" className={classes.submit}>
        Sign Up
      </button>
    </form>
  );
};

export default SignUpForm;
