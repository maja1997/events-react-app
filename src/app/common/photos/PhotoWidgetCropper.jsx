import React, { useRef} from 'react';
import Cropper from 'react-cropper';
import 'cropperjs/dist/cropper.css'; 

export default function PhotoWidgetCropper({setImage, imagePreview}) {
  const cropper = useRef();

  function cropImage() {
    const cropperInstance = cropper?.current?.cropper;
    cropperInstance.getCroppedCanvas().toBlob(blob => {
      console.log(blob)
      setImage(blob);
    }, 'image/jpeg')
  }


        return (
            <Cropper
                src={imagePreview}
                ref={cropper}
                style={{height: 200, width: '100%'}}
                // Cropper.js options
                aspectRatio={1}
                preview='.img-preview'
                guides={false}
                view={1}
                dragMode='move'
                scalable={true}
                cropBoxMovable={true}
                cropBoxResizable={true}
                crop={cropImage}
            />
        );
    }
