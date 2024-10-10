import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';
import {
  gallery,
  imageContainer,
  image,
} from './ImageGallery.module.css';

const ImageGallery = () => {
  return (
    <div className={gallery}>
      <div className={imageContainer}>
        <StaticImage
          className={image}
          alt="Image 1"
          src="../images/1.avif"
          placeholder="blurred"
        />
      </div>
      <div className={imageContainer}>
        <StaticImage
          className={image}
          alt="Image 2"
          src="../images/2.avif"
          placeholder="blurred"
        />
      </div>
      <div className={imageContainer}>
        <StaticImage
          className={image}
          alt="Image 3"
          src="../images/3.jpg"
          placeholder="blurred"
        />
      </div>
      <div className={imageContainer}>
        <StaticImage
          className={image}
          alt="Image 4"
          src="../images/4.avif"
          placeholder="blurred"
        />
      </div>
      {/* Add more images as needed */}
    </div>
  );
};

export default ImageGallery;
