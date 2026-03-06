import { useEffect, useState } from "react";
import Places from "./Places.jsx";

export default function AvailablePlaces({ onSelectPlace }) {
  const [availablesPlaces, setAvailablesPlaces] = useState([]);

  useEffect(() => {
    fetch('http://localhost:3000/places')
      .then((response) => {
         console.log(response)
        return response.json();
      })
      .then((resData) => {
        setAvailablesPlaces(resData.places);
      });
  }, []);

  return (
    <Places
      title="Available Places"
      places={availablesPlaces}
      fallbackText="No places available."
      onSelectPlace={onSelectPlace}
    />
  );
}
