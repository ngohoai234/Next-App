'use client';

import { useRef, useState } from 'react';
import classes from './image-picker.module.css';
import Image from 'next/image';

const ImagePicker = ({ label, name }) => {
  const [pickedImage, setPickedImage] = useState(null);

  const imageInputRef = useRef();

  const onClickPick = () => {
    imageInputRef.current.click();
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];

    if (!file) {
      setPickedImage(null);
      return;
    }

    const fileReader = new FileReader();

    fileReader.onload = () => {
      setPickedImage(fileReader.result);
    };
    fileReader.readAsDataURL(file);
  };

  const contentPickedImage = pickedImage ? (
    <Image src={pickedImage} alt="Selected Image" fill />
  ) : (
    <p>No image picked yet.</p>
  );

  return (
    <div className={classes.picker}>
      <label htmlFor="image">{label}</label>
      <div className={classes.controls}>
        <div className={classes.preview}>{contentPickedImage}</div>
        <input
          type="file"
          id="image"
          accept="image/png, image/jpeg"
          name={name}
          className={classes.input}
          ref={imageInputRef}
          onChange={handleImageChange}
          required
        />
        <button className={classes.button} type="button" onClick={onClickPick}>
          Pick an Image
        </button>
      </div>
    </div>
  );
};

export default ImagePicker;
