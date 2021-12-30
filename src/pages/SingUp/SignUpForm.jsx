import { useFormik } from "formik";
import Input from "../../components/UI/Input";
import SubmitButton from "../../components/UI/SubmitButton";
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

  const isPassHasError = formik.touched.password && formik.errors.password;
  const isConfPassHasError =
    formik.touched.confirmPassword && formik.errors.confirmPassword;
  const isEmailHasError = formik.touched.email && formik.errors.email;

  return (
    <form className={classes.form} onSubmit={formik.handleSubmit}>
      <Input
        id="email"
        labelName="Email Address"
        type="email"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.email}
        errorMessage={formik.errors.email}
        isError={isEmailHasError}
      />

      <Input
        id="password"
        labelName="Password"
        type="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.password}
        errorMessage={formik.errors.password}
        isError={isPassHasError}
      />

      <Input
        id="confirmPassword"
        labelName="Confirm Password"
        type="password"
        onChange={formik.handleChange}
        onBlur={formik.handleBlur}
        value={formik.values.confirmPassword}
        errorMessage={formik.errors.confirmPassword}
        isError={isConfPassHasError}
      />

      <SubmitButton className={classes.submit} name="Create" />
    </form>
  );
};

export default SignUpForm;
