import FooterStyle from "../../scss/footer.module.scss";
import { AiFillHeart } from "react-icons/ai";

const Footer = () => {
  return (
    <footer>
      Made with <AiFillHeart className={FooterStyle.heart} /> By&nbsp;
      <a href="https://github.com/sinansarikaya" target="_blank">
        Sinan Sarıkaya
      </a>
    </footer>
  );
};

export default Footer;
