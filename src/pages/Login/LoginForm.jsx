import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/UI/Input";
import SubmitButton from "../../components/UI/SubmitButton";
import classes from "./LoginForm.module.css";
import { useContext} from "react";
import AuthContext from "../../stores/auth-context.jsx";

const LoginForm = () => {
  const ctx = useContext(AuthContext);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validate: values => {
      const errors = {}
      if (!values.email) {
        errors.email = 'Required'
      } else if (
        !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
      ) {
        errors.email = 'Invalid email address'
      }

      if (!values.password) {
        errors.password = "Required";
      }

      return errors
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      ctx.onLogin();
      navigate("/");
    },
  });

  const isEmailHasError = formik.touched.email && formik.errors.email
  const isPasswordHasError = formik.touched.password && formik.errors.password

  return (
    <form className={classes.form} onSubmit={formik.handleSubmit}>
      <Input
        className={classes.input}
        id="email"
        type="email"
        labelName="Email Address"
        value={formik.values.email}
        onBlur={formik.onBlur}
        onChange={formik.handleChange}
        errorMessage={formik.errors.email}
        isError={isEmailHasError}
      ></Input>

      <Input
        id="password"
        type="password"
        labelName="Password"
        value={formik.values.password}
        onBlur={formik.onBlur}
        onChange={formik.handleChange}
        errorMessage={formik.errors.password}
        isError={isPasswordHasError}
      ></Input>

      <div className={classes["submit-control"]}>
        <SubmitButton name="Login" />
        <Link className={classes.link} to="/signup">
          Create Account
        </Link>
      </div>
    </form>
  );
};

export default LoginForm;
