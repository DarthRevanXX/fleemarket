import SignUpForm from "./SignUpForm";
import Card from "../../components/UI/Card";
import Center from "../../components/UI/Center";
import classes from "./SignUp.module.css";
import { Link } from "react-router-dom";

const SignUp = () => {
  return (
    <Center>
      <Card className={classes.card}>
        <div className={classes}>
          <h2>
            <i>Create a New Account</i>
          </h2>
          <p>
            Come join our community! Let's set up your account. Already have
            one?{" "}
            <Link to="/signin" className={classes.link}>
              Sign in here
            </Link>
          </p>
        </div>
        <SignUpForm></SignUpForm>
      </Card>
    </Center>
  );
};

export default SignUp;
