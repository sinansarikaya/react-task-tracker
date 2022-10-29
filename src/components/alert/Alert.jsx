import AlertStyle from "../../scss/alert.module.scss";

const Alert = ({ alert }) => {
  const { type, title, status } = alert;
  return (
    <div className={AlertStyle.alertContainer}>
      <div
        className={`${AlertStyle.alert} ${AlertStyle[type]} ${
          status ? AlertStyle.active : AlertStyle.passive
        }`}
      >
        {title}
      </div>
    </div>
  );
};

export default Alert;
