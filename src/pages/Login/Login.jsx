import LoginForm from "./LoginForm";
import Card from "../../components/UI/Card";
import classes from "./Login.module.css";

const Login = () => {
  return (
    <Card className={classes["login-wrapper"]}>
      <LoginForm></LoginForm>
    </Card>
  );
};

export default Login;
