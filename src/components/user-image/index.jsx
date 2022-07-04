import React from "react";
import { ImageContainer } from "./style";

const UserImage = ({ imageURL, size }) => {
  return (
    <ImageContainer size={size}>
      <img
        className="user-image"
        src={
          imageURL
            ? imageURL
            : "https://cdn-icons-png.flaticon.com/512/892/892781.png?w=360"
        }
      />
    </ImageContainer>
  );
};

export default UserImage;
