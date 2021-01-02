import React, { useState } from "react";
import Cropper from "react-easy-crop";

const ImgCropper = ({ image, rotation, onCropComplete, setRotation }) => {
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [zoom, setZoom] = useState(1);

  return (
    <>
      <Cropper
        image={image.url}
        crop={crop}
        rotation={rotation}
        zoom={zoom}
        aspect={3 / 3}
        onCropChange={setCrop}
        onRotationChange={setRotation}
        onCropComplete={onCropComplete}
        onZoomChange={setZoom}
      />
    </>
  );
};

export default ImgCropper;
