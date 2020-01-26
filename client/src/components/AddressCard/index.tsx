import React, { useState } from "react";
import styles from "./addressCard.scss";
import PopUp from "../PopUp";

const AddressCard = ({ address, index}) => {
    let [popUp, setPopUp] = useState(null);
    const openAddressBookEntry = (event) => {
        console.log(event.clientX, event.clientY);
        setPopUp(<PopUp x={event.clientX} y={event.clientY} />);
    };

    return (
        <div key={index} className={styles.container} onClick={openAddressBookEntry}>
            <div>{address.name}</div>
            <div>{address.street}</div>
            <div>{address.post}</div>
            <div>{address.city}</div>
            <div>{address.country}</div>
            <div>{address.mobile}</div>
            {popUp}
        </div>
    );
};

export default AddressCard;