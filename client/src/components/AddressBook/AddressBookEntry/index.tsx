import React, { useState } from "react";

import StoreContext from '../../../context/storeContext';

import styles from "./addressBookEntry.scss";

const AddressBookEntry = () => {
    const [contact, setContact] = useState({name: "", street: "", post: "", city: "", country: "", mobile: ""});

    const inputChanged = (event) => {
        const propName = event.target.name;
        setContact({...contact, [propName]: event.target.value});
    }

    const addContact = (action) => {
        action("ADD_CONTACT_INITIATE", contact)
    };

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
                <StoreContext.Consumer>
                    {({action, store}) => {
                        console.log("store:", store.getState());
                        return <a onClick={() => addContact(action)}>Add Contact</a>;
                    }}
                </StoreContext.Consumer>
            </div>
        </div>
    )
}

export default AddressBookEntry;
