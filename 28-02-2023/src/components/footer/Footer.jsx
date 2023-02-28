import "./index.css";
import logo from "../../logo.png";

const Footer = () => {
  return (
    <footer className="Footer">
      <img className="foot__logo" src={logo} alt="logo" />
      <p>Copyright &copy; 2023</p>
    </footer>
  );
};

export default Footer;
