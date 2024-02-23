import { useCallback, useState } from "react";
import { useDropzone } from "react-dropzone";

const ImageUpload = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const onDrop = useCallback((acceptedFiles) => {
    const image = acceptedFiles[0];
    const reader = new FileReader();
    reader.onload = () => {
      setSelectedImage(reader.result);
    };
    reader.readAsDataURL(image);
  }, []);

  const { acceptedFiles, getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: {
      "image/*": [],
    },
    multiple: false,
  });

  console.log("Accepted Files:", acceptedFiles);

  return (
    <div className="flex items-center w-full justify-center mt-10  mb-10 h-2/3">
      <div className="bg-white p-8 rounded-lg shadow-md">
        <div
          {...getRootProps()}
          className="dropzone text-center border-dashed border-2 border-gray-300 p-6 rounded-md"
        >
          <input {...getInputProps()} />
          <p className="text-gray-600">
            Drag 'n' drop an image here, or click to select one
          </p>
        </div>
        {selectedImage && (
          <div className="mt-1">
            <h2 className="text-xl font-semibold mb-2">Selected Image</h2>
            <img
              src={selectedImage}
              alt="Selected"
              className="w-32 sm:w-48 md:w-64 lg:w-80 rounded-md "
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;
