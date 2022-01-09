import classes from "./Footer.module.css";
const Footer = (props) => {
  return (
    <div className={`${classes.footer} ${props.className}`}>
      &copy; {new Date().getFullYear()}
    </div>
  );
};

export default Footer;
