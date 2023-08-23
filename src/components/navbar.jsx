import React, { useEffect, useState } from "react";
import "../css/navbar.css";
import axios from "axios";
const Navbar = ({ onPress }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    axios.get("https://api.zylonews.com/api/v1/categories").then((res) => {
      if (res.status === 200) {
        setCategories(res.data.data?.categories);
      }
      // console.log(res);
    });
  }, []);

  return (
    <div className="navbar-container">
      {categories.map((item) => {
        // console.log("item", item);
        return (
          <div key={item._id} className="nav-item">
            <h3 onClick={() => onPress(item._id)}>{item.category}</h3>
          </div>
        );
      })}
    </div>
  );
};

export default Navbar;
