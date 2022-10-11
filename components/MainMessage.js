import classes from "./Style.module.css";

function MainMessage(props) {
  return (
    <p className={classes.fontMainMessage} hidden={props.hidden}>
      Hello , welcome to my website , my name is Santiago Rack , I started
      programming by learning Unity C# , I am really passionate about video
      games so why not start to learn how to make them, after that I realized I
      liked programming so I got introduced to web programming by JavaScript , I
      took a course in Udemy called "From zero to expert" and I really liked the
      language so I'm currently challenging myself to learn React.js. I'm
      currently studying again but this time React.js wich I find much more fun
      to program with than just pure JavaScript! I'm also constantly learning
      CSS because I like to add some style to the apps I make!
    </p>
  );
}

export default MainMessage;
