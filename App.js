import ButtonList from "./components/ButtonList";
import MainMessage from "./components/MainMessage";
import Card from "./components/Card";
import classes from "./components/Style.module.css";
import Portfolio from "./components/Portfolio";
import { useRef, useState } from "react";
import Jobs from "./components/Jobs";

function App() {
  const [currentMsg, setCurrentMsg] = useState("1");

  const handleAboutMe = (e) => {
    setCurrentMsg("1");
  };

  const handleForkifyClick = (e) => {
    setCurrentMsg("2");
  };

  const handleJobs = (e) => {
    setCurrentMsg("3");
  };
  return (
    <div className={classes.container}>
      <Card className={classes.relative}>
        {currentMsg === "1" && <MainMessage />}
        {currentMsg === "2" && <Portfolio />}
        {currentMsg === "3" && <Jobs />}
      </Card>
      <ButtonList
        onHandleForkify={handleForkifyClick}
        onHandleMe={handleAboutMe}
        onHandleJobs={handleJobs}
      />
    </div>
  );
}

export default App;
