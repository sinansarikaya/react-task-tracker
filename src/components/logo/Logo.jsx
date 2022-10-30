import LogoImg from "../../assets/logo.png";
import LogoStyle from "../../scss/logo.module.scss";

const Logo = () => {
  return (
    <div className={LogoStyle.logo}>
      <a href="https://github.com/sinansarikaya" target="_blank">
        <img src={LogoImg} alt="Logo" className={LogoStyle.logoImg} />
      </a>
    </div>
  );
};

export default Logo;
