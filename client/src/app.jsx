import React from "react";

import AddressBookEntry from "./components/AddressBook/AddressBookEntry";

/** React Store Import Starts */

import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';

import createSagaMiddleware from 'redux-saga';
import rootSaga from './redux/saga';

import reducer from './redux/reducers';

/** React Store Import Ends */


/** Redux Store Creation Starts */

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware, logger)
);
sagaMiddleware.run(rootSaga);

/** Redux Store Creation Ends */

/** Redux Action Call Starts */

export const action = type => store.dispatch({type})

/** Redux Action Call Ends */


import styles from "./app.scss";

const App = () => {
    return (
        <main className={styles.main}>
            <AddressBookEntry />
        </main>
    );
};

export default App;