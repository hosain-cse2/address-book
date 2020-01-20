import React from "react";

import AddressBookEntry from "./components/AddressBook/AddressBookEntry";

import styles from "./app.scss";

const App = () => {
    return (
        <main className={styles.main}>
            <AddressBookEntry />
        </main>
    );
};

export default App;