import { useFormik } from "formik";
import classes from "./SignUpForm.module.css";

const validate = (values) => {
  const errors = {};

  if (!values.email) {
    errors.email = "Required";
  } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i.test(values.email)) {
    errors.email = "Invalid email address";
  }

  if (!values.password) {
    errors.password = "Required";
  } else if (values.password.length > 20 || values.password.length < 8) {
    errors.password = "Must be 8 characters and less than 20 characters";
  }

  if (!values.confirmPassword) {
    errors.confirmPassword = "Required";
  } else if (
    values.confirmPassword.length > 20 ||
    values.confirmPassword.length < 8
  ) {
    errors.confirmPassword = "Must be 8 characters and less than 20 characters";
  }

  return errors;
};

const SignUpForm = () => {
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
    },
    validate,
    onSubmit: async (values) => {
      await fetch(
        "https://meals-98008-default-rtdb.asia-southeast1.firebasedatabase.app/users.json",
        {
          method: "POST",
          body: JSON.stringify({
            user: values,
          }),
        }
      );

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
        onBlur={formik.handleBlur}
        value={formik.values.email}
      />
      {formik.touched.email && formik.errors.email ? (
        <div className={classes.error}>{formik.errors.email}</div>
      ) : null}

      <label className={classes.label} htmlFor="password">
        Password
      </label>
      <input
        className={classes.input}
        id="password"
        name="password"
        type="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
      />

      {formik.touched.password && formik.errors.password ? (
        <div className={classes.error}>{formik.errors.password}</div>
      ) : null}

      <label className={classes.label} htmlFor="confirmPassword">
        Confirm Password
      </label>
      <input
        className={classes.input}
        id="confirmPassword"
        name="confirmPassword"
        type="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.confirmPassword}
      />

      {formik.touched.confirmPassword && formik.errors.confirmPassword ? (
        <div className={classes.error}>{formik.errors.confirmPassword}</div>
      ) : null}

      <button type="submit" className={classes.submit}>
        Create
      </button>
    </form>
  );
};

export default SignUpForm;
