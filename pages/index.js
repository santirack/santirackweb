import Head from "next/head";
import App from "../App";
import classes from "../styles/Home.module.scss";
import "typeface-roboto";

export default function Home() {
  return (
    <div className={classes.container}>
      <Head>
        <title>Santiago Rack Website</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={classes.main}>
        <div className={classes.fullContent}>
          <h1 className={classes.welcome}>Welcome!</h1>
          <App />
        </div>
      </main>

      <footer className={classes.foot}>
        <a>©2022 Santiago Rack</a>
      </footer>
    </div>
  );
}
