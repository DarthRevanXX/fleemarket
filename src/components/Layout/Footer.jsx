import classes from "./Footer.module.css";
const Footer = (props) => {
  return <div className={`${classes.footer} ${props.className}`}>Footer</div>;
};

export default Footer;
