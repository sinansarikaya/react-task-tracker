import LogoImg from "../../assets/logo.png";
import LogoStyle from "../../scss/logo.module.scss";

const Logo = () => {
  return (
    <div className={LogoStyle.logo}>
      <img src={LogoImg} alt="Logo" className={LogoStyle.logoImg} />
    </div>
  );
};

export default Logo;
