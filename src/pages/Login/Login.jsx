import LoginForm from "./LoginForm";
import Card from "../../components/UI/Card";
import classes from "./Login.module.css"
import Center from "../../components/UI/Center";
const Login = () => {
  return (
    <Center>
      <Card className={classes.login}>
        <LoginForm></LoginForm>
      </Card>
    </Center>
  );
};

export default Login;
