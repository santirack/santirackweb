import classes from "./Style.module.css";

function Jobs(props) {
  return (
    <p className={classes.fontMainMessage} hidden={props.hidden}>
      I am currently looking for my first job experience! , Im currently
      learning React.js and CSS , I've "finished" learning JavaScript this year
      , wich went very well because when I started learning it I had a good
      knowleadge of Unity C# wich mostly of the concept are syntax changes and
      new methods. I am currently unemployed looking to work! You can contact me
      at:
      <br></br>
      <li>
        <a href="https://www.linkedin.com/in/santiago-rack/">LinkedIn</a>
      </li>
      <li>
        <a href="mailto:santirack21@gmail.com">Gmail (santirack21@gmail.com)</a>
      </li>
    </p>
  );
}

export default Jobs;
