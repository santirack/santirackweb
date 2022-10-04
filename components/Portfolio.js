import classes from "./Style.module.css";
function Portfolio(props) {
  return (
    <p className={classes.fontMainMessage} hidden={props.hidden}>
      Forkify is an app that lets you search for cooking recipes, you can also
      make your own cooking recipe and even better , favourite the ones you like
      the most! This app was made with JavaScript (No React.js)<br></br>
      <br></br> Try it out! Type 'pizza' on the search box!
      <li>
        <a href="https://santiagorack.netlify.app/">Forkify APP </a>
      </li>
      <li>
        <a href="https://github.com/santirack/forkifyJScourse">Github</a>
      </li>
      <br></br>
      I've also made a Unity C# Mobile game called Slidey Puzzle you can
      currently check it out here!
      <br></br>
      <li>
        <a href="https://play.google.com/store/apps/details?id=com.SarApps.SlideyPuzzle">
          Slidey Puzzle
        </a>
      </li>
      And of course this website was made using React.js!
    </p>
  );
}

export default Portfolio;
