import React from "react";
import { useSelector } from 'react-redux';
import styles from "./addressList.scss";

import AddressCard from "../AddressCard";

const AddressList = () => {
    const addressList = useSelector(store => {
        return store;
    });
    return (
        <div className={styles.container}>
            {
                addressList.map((address, index) => (
                    <AddressCard address={address} index={index} />
                ))
            }
        </div>
    );
};

export default AddressList;