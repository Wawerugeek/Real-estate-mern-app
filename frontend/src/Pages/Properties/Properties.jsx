import React from "react";
import "./Properties.css";
import SearchBar from "../../components/Search/SearchBar";
import useProperties from "../../components/hooks/useProperties";
import { PuffLoader} from "react-spinners";
import PropertyCard from "../../components/PropertyCard.css/PropertyCard";

const Properties = () => {
  const { data, isError, isLoading } =  useProperties();

  if(isError) {
    return (
      <div className="wrapper">
        <span> Error while fetching data from the server</span>

      </div>
    )
  }

  if (isLoading) {
    return(
      <div className="wrapper flexCenter" style={{height: "60vh"}}>
        <PuffLoader />

      </div>
    )
  }



  return (
    <div className="wrapper">
      <div className="flexColCenter paddings innerWidth properties-container">
        <SearchBar />

        <div className="paddings flexCenter properties">
          {
            data.map((card, i) => (<PropertyCard card={card} key={i}/>))
          }
        </div>
      </div>
    </div>
  );
};

export default Properties;
