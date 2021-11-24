import { useFormik } from "formik";
import { Link } from "react-router-dom";
import classes from "./LoginForm.module.css";

const LoginForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
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
        name="passwod"
        type="password"
        onChange={formik.handleChange}
        value={formik.values.password}
      />

      <button type="submit" className={classes.submit}>
        Submit
      </button>
      <Link to="/signup">Sign up</Link>
    </form>
  );
};

export default LoginForm;
