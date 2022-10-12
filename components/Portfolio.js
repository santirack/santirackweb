import classes from "./Style.module.css";
function Portfolio(props) {
  return (
    <p className={classes.fontMainMessage} hidden={props.hidden}>
      <h3>Udemy Course Certificate</h3>
      JavaScript course certificate
      <ul>
        <li>
          <a href="https://www.udemy.com/certificate/UC-03d65d31-ce00-4e87-bc9f-2c19e8a2caf6/">
            JavaScript Certificate
          </a>
        </li>
      </ul>
      <h3>Forkify</h3>
      Forkify is an app that lets you search for cooking recipes, you can also
      make your own cooking recipe and even better , favourite the ones you like
      the most! This app was made with JavaScript (No React.js)
      <br />
      <br /> Try it out! Type 'pizza' on the search box!
      <ul>
        <li>
          <a href="https://santiagorack.netlify.app/">Forkify APP </a>
        </li>
        <li>
          <a href="https://github.com/santirack/forkifyJScourse">Github</a>
        </li>
      </ul>
      <h3>Slidey Puzzle</h3>
      Its a mobile game made with Unity C# where you have to assemble the image,
      it comes with 30 levels to play, 3x3 , 4x4 , 5x5 to challenge yourself!
      <br />
      <ul>
        <li>
          <a href="https://play.google.com/store/apps/details?id=com.SarApps.SlideyPuzzle">
            Slidey Puzzle
          </a>
        </li>
      </ul>
      <h3>My website!</h3>
      This website was made with React.js
      <ul>
        <li>
          <a href="https://github.com/santirack/santirackweb">Website github</a>
        </li>
      </ul>
    </p>
  );
}

export default Portfolio;
