import React, { useState } from "react";
import "./Meals.css"; // Import CSS file for additional styling
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faUser } from "@fortawesome/free-solid-svg-icons";

const Meals = () => {
  const navigate = useNavigate();


  const [mealInput, setMealInput] = useState("");
  const [caloriesInput, setCaloriesInput] = useState("");
  const [mealsList, setMealsList] = useState([]);

  const handleAddMeal = () => {
    if (mealInput.trim() !== "" && caloriesInput.trim() !== "") {
      setMealsList([...mealsList, { meal: mealInput, calories: caloriesInput }]);
      setMealInput("");
      setCaloriesInput("");
    }
  };

  return (
    <div className="container">
      <h1 className="title">Meals</h1>
      <div className="input-container">
        <input
          className="input"
          type="text"
          value={mealInput}
          onChange={(e) => setMealInput(e.target.value)}
          placeholder="Enter meal name"
        />
        <input
          className="input"
          type="number"
          value={caloriesInput}
          onChange={(e) => setCaloriesInput(e.target.value)}
          placeholder="Enter calories"
        />
        <button className="add-button" onClick={handleAddMeal}>
          Add Meal
        </button>
      </div>
      <ul className="meals-list">
        {mealsList.map((meal, index) => (
          <li key={index} className={`meal-item ${mealInput && "black-font"}`}>
            <span className="meal-text">{meal.meal}</span>
            <span className="calories-text">{meal.calories} calories</span>
          </li>
        ))}
        
      </ul>
      <div style={styles.header}>
      <FontAwesomeIcon
        icon={faArrowLeft}
        style={styles.backArrow}
        onClick={() => navigate("/Home")}
      />
      <FontAwesomeIcon
        icon={faUser}
        style={styles.profileIcon}
        onClick={() => navigate("/Account")}
      />
    </div>
    </div>
    
    
  );
};

const styles = {
  header: {
    position: "fixed",
    top: 0,
    left: 0,
    right: 0,
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: "10px",
    backgroundColor: "#333",
    color: "#fff",
  },
  leftIcon: {
    marginLeft: "10px", // Adjust as necessary
  },
  rightIcon: {
    marginRight: "10px", // Adjust as necessary
  },
  icon: {
    fontSize: "24px",
    cursor: "pointer",
  },
};




export default Meals;
