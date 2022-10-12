import classes from "./Style.module.css";

function ButtonList(props) {
  return (
    <div className={classes.buttonDivBorder}>
      <ul className={classes.noList}>
        <li>
          <button className={classes.button} onClick={props.onHandleMe}>
            About me
          </button>
        </li>
        <li>
          <button className={classes.button} onClick={props.onHandleForkify}>
            Portfolio
          </button>
        </li>
        <li>
          <button className={classes.button} onClick={props.onHandleJobs}>
            Experience
          </button>
        </li>
      </ul>
    </div>
  );
}

export default ButtonList;
