import { useFormik } from "formik";
import { Link, useNavigate } from "react-router-dom";
import Input from "../../components/UI/Input";
import SubmitButton from "../../components/UI/SubmitButton";
import classes from "./LoginForm.module.css";
import { useContext } from "react";
import AuthContext from "../../stores/auth-context.jsx";

const LoginForm = () => {
  const ctx = useContext(AuthContext);
  const navigate = useNavigate();

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      alert(JSON.stringify(values, null, 2));
      ctx.onLogin();
      navigate("/");
    },
  });
  return (
    <form className={classes.form} onSubmit={formik.handleSubmit}>
      <Input
        className={classes.input}
        id="email"
        type="email"
        labelName="Email Address"
        value={formik.values.email}
        onChange={formik.handleChange}
      ></Input>

      <Input
        id="password"
        type="password"
        labelName="Password"
        value={formik.values.password}
        onChange={formik.handleChange}
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
