import { FaUser } from "react-icons/fa6";

const ImageUploader = () => {
  return (
    <div className="mb-8 flex items-center gap-4">
      <button className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-400">
        <FaUser  className="text-lg text-gray-600" />
      </button>
      <span className="text-gray-700">upload user image</span>
    </div>
  );
};

export default ImageUploader;
