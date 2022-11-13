import SocialStyle from "../../scss/social.module.scss";
import { GrInstagram, GrLinkedinOption, GrGithub } from "react-icons/gr";

const Social = () => {
  return (
    <div className={SocialStyle.social}>
      <a href="https://www.instagram.com/sinan.sarykaya/" target="_blank">
        <GrInstagram className={SocialStyle.icon} />
      </a>
      <a href="https://www.linkedin.com/in/sinansarykaya/" target="_blank">
        <GrLinkedinOption className={SocialStyle.icon} />
      </a>
      <a
        href="https://github.com/sinansarikaya/react-task-tracker"
        target="_blank"
      >
        <GrGithub className={SocialStyle.icon} />
      </a>
    </div>
  );
};

export default Social;
