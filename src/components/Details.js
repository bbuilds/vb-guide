import React, { useState, useEffect } from "react";
import allActivities from "../resources/activities.json";
import Modal from "./Modal";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimes } from "@fortawesome/free-solid-svg-icons";

const Details = (props) => {
  const [place, setActivePlace] = useState("");

  //replaces component life cycle methods
  useEffect(() => {
    setActivePlace("");
    const place = allActivities.filter(
      (activity) => activity.slug === props.slug
    );
    setActivePlace(place[0]);
  }, []);

  //Modal Hook
  const [showModal, setshowModal] = useState(false); //default state set not to open

  const handleEsc = (evt) => {
    evt = evt || window.event;
    const isEscape = evt.keyCode === 27;
    if (isEscape && document.body.classList.contains("modal-active")) {
      toggleModal();
    }
  };

  const toggleModal = () => {
    const body = document.querySelector("body");
    const modalRoot = document.getElementById("modal");
    if (showModal == true) {
      setshowModal(false);
    } else {
      setshowModal(true);
    }
    window.addEventListener("keyup", handleEsc);
    body.classList.toggle("modal-active");
    modalRoot.classList.toggle("opacity-0");
    modalRoot.classList.toggle("pointer-events-none");
  };

  return (
    <section className="details container lg:max-w-3xl mx-auto rounded shadow-lg bg-gray-100 p-4">
      <h2 className="text-4xl mb-4">{place.name}</h2>
      <div className="w-full md:flex">
        <div className="w-1/3">
          <img src="http://placecorgi.com/400/255" />
        </div>
        <div className="w-2/3 p-4">
          <p>{place.address}</p>
          <p>{place.phone}</p>
          <p>{place.description}</p>
          <button
            className="text-center text-orange my-2"
            onClick={toggleModal}
          >
            Get Directions
          </button>
        </div>
      </div>
      {showModal ? (
        <Modal>
          <div className="map-embed">
            <iframe
              src={place.mapEmbed}
              width="100%"
              height="450"
              frameBorder="0"
              allowFullScreen=""
              aria-hidden="false"
            ></iframe>
          </div>
          <button
            className="flex items-center my-2 mx-auto text-xl"
            type="button"
            onClick={toggleModal}
          >
            Close Modal
            <FontAwesomeIcon icon={faTimes} size="2x" className="ml-4" />
          </button>
        </Modal>
      ) : null}
    </section>
  );
};

export default Details;
