import React from "react";

import styles from "./addressBookEntry.scss";

const AddressBookEntry = () => {
    return (
        <div className={styles.container}>
            <div>
                <p>Contact Name</p>
                <input type="text" />
            </div>
            <div>
                <p>Houe Number</p>
                <input type="text" />
            </div>
            <div>
                <p>Postal Code</p>
                <input type="text" />
            </div>
            <div>
                <p>City</p>
                <input type="text" />
            </div>
            <div>
                <p>Country</p>
                <input type="text" />
            </div>
            <div>
                <p>Mobile Number</p>
                <input type="text" />
            </div>
            <div>
                <a>Add Contact</a>
            </div>
        </div>
    )
}

export default AddressBookEntry;
