import React from "react";
import styles from "./popUp.scss";

const PopUp = ({x, y}) => {
    return (
        <div style={{top: y + 38, left: x, height: 200, width: 300, backgroundColor: "red", position: "absolute"}}>
            
        </div>
    );
};

export default PopUp;