import React from "react";

import styles from "./app.scss";

const App = () => {
    console.log("Styles: ", styles);
    return <main className={styles.main}>This is the app</main>;
};

export default App;