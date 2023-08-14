import React, { useState } from 'react';

function ImageUpload() {
  const [imageInfo, setImageInfo] = useState('');

  function handleImageUpload(event) {
    const file = event.target.files[0];

    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();

      reader.onload = function(e) {
        const image = new Image();

        image.onload = function() {
          const width = image.width;
          const height = image.height;

          setImageInfo(`Selected Image: ${width}px (width) x ${height}px (height)`);
        };

        image.src = e.target.result;
      };

      reader.readAsDataURL(file);
    }
  }

  return (
    <div>
      <input type="file" accept="image/*" onChange={handleImageUpload} />
      <div>{imageInfo}</div>
    </div>
  );
}

export default ImageUpload;