import "./index.css";
import logo from "../../logo.png";

const Header = () => {
  return (
    <div className="Header">
      <div className="Header__logo">
        <img src={logo} alt="logo" />
      </div>
      <div className="Header__menu">
        <ul>
          <li>
            <a href="https://www.pinterest.it/pin/651966483532706394/"></a>
          </li>
          <li>
            <a href="https://www.pinterest.it/pin/651966483532706499/"></a>
          </li>
          <li>
            <a href="https://www.pinterest.it/pin/651966483532018420/"></a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Header;
