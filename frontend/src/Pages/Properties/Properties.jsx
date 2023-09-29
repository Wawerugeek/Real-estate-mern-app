import React from "react";
import "./Properties.css";
import SearchBar from "../../components/Search/SearchBar";

const Properties = () => {
  return (
    <div className="wrapper">
      <div className="flexColCenter paddings innerWidth properties-container">
        <SearchBar />
      </div>
    </div>
  );
};

export default Properties;
