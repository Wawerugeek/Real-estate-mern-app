import React from "react";
import "./Property.css";
import { useQuery } from "react-query";
import { useLocation } from "react-router-dom";
import { getProperty } from "../../utils/api";
import { PuffLoader } from "react-spinners";
import { AiFillHeart, AiTwotoneCar } from "react-icons/ai";
import { MdMeetingRoom, MdLocationPin } from "react-icons/md";
import { FaShower } from "react-icons/fa";
import Map from "../../components/Map/Map";

const Property = () => {
  // get the property id
  const { pathname } = useLocation();
  const id = pathname.split("/").slice(-1)[0];
  // fetch data of each card
  const { data, isLoading, isError } = useQuery(["resd", id], () =>
    getProperty(id)
  );

  if (isLoading) {
    return (
      <div className="wrapper">
        <div className="flexCenter paddings">
          <PuffLoader />
        </div>
      </div>
    );
  }

  if (isError) {
    return (
      <div className="wrapper">
        <div className="flexCenter paddings">
          <span> Error while getting property detail from backend </span>
        </div>
      </div>
    );
  }
  return (
    <div className="wrapper">
      <div className="flexColStart paddings innerWidth property-container">
        {/* add like button to the property */}
        <div className="like">
          <AiFillHeart size={24} color="white" />
        </div>
        <img src={data?.image} alt="home image" />
        <div className="flexCenter property-details">
          {/* left of the image */}
          <div className="flexColStart left">
            {/* head of details */}
            <div className="flexStart head">
              <span className="primaryText">{data?.title}</span>
              <span className="orangeText" style={{ fontSize: "2.0rem" }}>
                {data?.price}/=
              </span>
            </div>
            {/* facilities available */}
            <div className="flexStart facilities">
              {/* bathrooms */}
              <div className="flexStart facility">
                <FaShower size={20} color="#1F3E72" />
                <span> {data?.facilities?.bathrooms} BathRooms </span>
              </div>
              {/* parkings */}
              <div className="flexStart facility">
                <AiTwotoneCar size={20} color="#1F3E72" />
                <span> {data?.facilities?.parkings} Parking</span>
              </div>
              {/* rooms */}
              <div className="flexStart facility">
                <MdMeetingRoom size={20} color="#1F3E72" />
                <span> {data?.facilities?.bedrooms} Room/s</span>
              </div>
            </div>
            {/* description */}
            <span className="secondaryText" style={{ textAlign: "justify" }}>
              {data?.description}
            </span>
            {/* address */}
            <div className="flexStart" style={{gap: "1rem"}}>
              <MdLocationPin size={25} />
              <span className="secondaryText" >
                {data?.address}
                {data?.city}
                {data?.country}
              </span>
            </div>
            {/* booking button */}
            <button className="button">
                Book your visit
            </button>
          </div>

          {/* the right side */}
          <div className="map">
            <Map address={data?.address} city={data?.city} country={data?.country}/>



          </div>
        </div>
      </div>
    </div>
  );
};

export default Property;
