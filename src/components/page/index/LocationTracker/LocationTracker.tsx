import React, { useRef, useState } from "react";
import { LocationButton } from "../LocationButton/LocationButton";
import { hasMouse } from "../../../../shared/hasMouse";
import { Circle, useMap, useMapEvent } from "react-leaflet";
import { type LatLng } from "leaflet";

const LocationTracker: React.FC = () => {
  const map = useMap();

  const [location, setLocation] = useState<LatLng>();
  const [clickInProgress, setClickInProgres] = useState(false);
  const userInitiated = useRef(false);

  useMapEvent("locationerror", () => {
    map.stopLocate();
    setClickInProgres(false);
    const isMobile = !hasMouse();
    if (isMobile) {
      window.alert(
        "Nismo uspjeli da vas locairamo. Uključite usluge lokacije u podešavanjima telefona i omugućite pretraživaču dozvolu za pristup lokaciji pa pokušajte ponovo."
      );
    } else {
      window.alert(
        "Nismo uspjeli da vas locairamo. Omugućite pretraživaču dozvolu za pristup lokaciji pa pokušajte ponovo."
      );
    }
  });

  useMapEvent("locationfound", e => {
    setLocation(e.latlng);
    if (userInitiated.current) {
      map.setView(e.latlng, 18);
      userInitiated.current = false;
    }
    setClickInProgres(false);
  });

  const handleClick = () => {
    setClickInProgres(true);
    userInitiated.current = true;
    map.locate({
      watch: true,
      enableHighAccuracy: true
    });
  };

  return (
    <>
      <LocationButton
        disabled={clickInProgress}
        onClick={handleClick}
        loading={clickInProgress}
      />
      {location && (
        <Circle
          key={location.toString()}
          center={location}
          radius={4}
          color="white"
          fill={true}
          fillColor="black"
          fillOpacity={1}
        />
      )}
    </>
  );
};

export { LocationTracker };
