import React from "react";

const ImageList = (props) => {
  const images = props.images.map((image, idx) => {
    return <img src={image.urls.regular} key={idx} alt="search" />;
  });

  return <div>{images}</div>;
};

export default ImageList;
