import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCog, faUserPlus, faUser, faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from 'react-router-dom';


const AccountPage = () => {
  const navigate = useNavigate();

  return (
    <div style={styles.container}>
      <div style={styles.header}>
        <FontAwesomeIcon icon={faUser} style={styles.icon} />
        <p style={styles.username}>Username</p>
      </div>
      <div style={styles.buttons}>
        <CustomButton text="Settings" icon={faCog} onClick={() => console.log("Settings clicked")} />
        <CustomButton text="Refer a Friend" icon={faUserPlus} onClick={() => console.log("Refer a Friend clicked")} />
      </div>
      <FontAwesomeIcon
        icon={faArrowLeft}
        style={styles.backArrow}
        onClick={() => navigate("/Login")}
      />
    </div>
  );
};

const CustomButton = ({ text, icon, onClick }) => {
  return (
    <button style={styles.button} onClick={onClick}>
      <FontAwesomeIcon icon={icon} style={styles.buttonIcon} />
      {text}
    </button>
  );
};

const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginTop: "100px", // Adjust as necessary
  },
  header: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    marginBottom: "20px",
  },
  icon: {
    fontSize: "64px",
  },
  username: {
    fontSize: "24px",
    fontWeight: "bold",
    marginTop: "10px",
  },
  buttons: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  button: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "10px 20px",
    margin: "10px",
    fontSize: "20px",
    backgroundColor: "#4CAF50", /* Green background */
    color: "black", /* Black lettering */
    borderRadius: "12px", /* Smooth corners */
    cursor: "pointer",
    transition: "background-color 0.3s ease", /* Smooth color transition */
    border: "none",
  },
  buttonIcon: {
    marginRight: "10px",
  },
};

export default AccountPage;
