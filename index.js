const Notification = (props) => {
  const { iconUrl, className, msg } = props;
  const classNameCon = `card ${className}`;

  return (
    <div className={classNameCon}>
      <img src={iconUrl} className="each" />
      <p>{msg}</p>
    </div>
  );
};

const element = (
  <div className="bg">
    <div className="con">
      <h1 className="head">Notifications</h1>
      <div className="mid">
        <Notification
          iconUrl="https://assets.ccbp.in/frontend/react-js/primary-icon-img.png"
          className="blue-Con"
          msg="Information Message"
        />
        <Notification
          iconUrl="https://assets.ccbp.in/frontend/react-js/success-icon-img.png"
          className="green-Con"
          msg="Success Message"
        />
        <Notification
          iconUrl="https://assets.ccbp.in/frontend/react-js/warning-icon-img.png"
          className="yellow-Con"
          msg="Warning Message"
        />
      </div>
    </div>
  </div>
);

ReactDOM.render(element, document.getElementById("root"));
