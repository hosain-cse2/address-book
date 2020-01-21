import React, { useState } from "react";

import styles from "./addressBookEntry.scss";

const AddressBookEntry = () => {
    const [contact, setContact] = useState({});

    const inputChanged = (event) => {
        const propName = event.target.name;
        setContact({...contact, [propName]: event.target.value});
    }

    return (
        <div className={styles.container}>
            <div>
                <p>Contact Name</p>
                <input type="text" name="name" onChange={inputChanged} value={contact.name} />
            </div>
            <div>
                <p>Houe Number</p>
                <input type="text" name="street" onChange={inputChanged} value={contact.street} />
            </div>
            <div>
                <p>Postal Code</p>
                <input type="text" name="post" onChange={inputChanged} value={contact.post} />
            </div>
            <div>
                <p>City</p>
                <input type="text" name="city" onChange={inputChanged} value={contact.city} />
            </div>
            <div>
                <p>Country</p>
                <input type="text" name="country" onChange={inputChanged} value={contact.country} />
            </div>
            <div>
                <p>Mobile Number</p>
                <input type="text" name="mobile" onChange={inputChanged} value={contact.mobile} />
            </div>
            <div>
                <a>Add Contact</a>
            </div>
        </div>
    )
}

export default AddressBookEntry;
