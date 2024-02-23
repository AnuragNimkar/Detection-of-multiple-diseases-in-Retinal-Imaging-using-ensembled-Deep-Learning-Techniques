import React from "react";
import ImageUpload from "../components/ImageUpload";
export default function Predict() {
  return (
    <div className="font-inter">
      <div>
        <p className=" text-xl  m-20 text-center ">
          Upoad or drop Your Retinal Image
        </p>
      </div>

      <div>
        <ImageUpload />
      </div>

      <div className="flex justify-center mb-20">
        <button
          type="submit"
          className=" bg-indigo-700 hover:bg-indigo-500 text-white py-2 px-4 rounded"
        >
          Predict
        </button>
      </div>
    </div>
  );
}
