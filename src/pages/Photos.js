import React, { useContext } from "react";
import { Context } from "../Context";
import "../App.css";
import Image from "../Components/Image";

function getClass(i) {
  if (i % 5 === 0) {
    return "big";
  } else if (i % 6 === 0) {
    return "wide";
  }
}

function Photos() {
  const { photos } = useContext(Context);

  const displayPhotos = photos.map((photo, i) => {
    return <Image key={photo.id} img={photo} className={getClass(i)} />;
  });
  return (
    <div>
      <h2>Home Page</h2>
      <main className="photos">{displayPhotos}</main>
    </div>
  );
}
export default Photos;
