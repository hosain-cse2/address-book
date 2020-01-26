import React from "react";

/* React Store Import Starts */
import { createStore, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import { logger } from 'redux-logger';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './redux/saga';
import reducer from './redux/reducers';


/* Redux Store Creation Starts */
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    reducer,
    applyMiddleware(sagaMiddleware, logger)
);
sagaMiddleware.run(rootSaga);


// import StoreContext from './context/storeContext';
import AddressBookEntry from "./components/AddressBook/AddressBookEntry";
import AddressList from "./components/AddressList";
import Header from "./components/Header";

import styles from "./app.scss";

/* Redux Action Call Starts */
// export const action = (type, payload) => store.dispatch({type, payload})

const App = () => {
    return (
        // <StoreContext.Provider value={{store, action}}>
        <Provider store={store}>
            <Header />
            <main className={styles.main}>
                <AddressBookEntry />
                <AddressList />
            </main>
        </Provider>
        // </StoreContext.Provider>
    );
};

export default App;