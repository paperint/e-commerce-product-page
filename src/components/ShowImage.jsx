import React from "react";
import next from "../assets/images/icon-next.svg";
import prev from "../assets/images/icon-previous.svg";
import close from "../assets/images/icon-close2.svg";

function ShowImage({
  image,
  imageIndex,
  setImageIndex,
  handlerNextImage,
  handlerPrevImage,
  data,
  setShowImage,
  showImage,
}) {
  return (
    <article className="absolute top-0 left-0 z-50 flex flex-col items-center justify-center w-full h-screen gap-10 bg-black bg-opacity-50">
      <div className="relative flex items-center justify-center w-full max-w-sm">
        <div
          onClick={() => setShowImage(!showImage)}
          className="absolute right-0 cursor-pointer -top-7 "
        >
          <img src={close} alt="close" />
        </div>
        <img src={image} alt={image} className="w-full rounded-lg" />
        <div className="absolute flex justify-between w-[410px] translate-y-1/2 bottom-1/2">
          <button
            onClick={() => handlerPrevImage()}
            className="flex items-center justify-center px-3 py-2 bg-white rounded-full"
          >
            <img src={prev} alt="prev" />
          </button>
          <button
            onClick={() => handlerNextImage()}
            className="flex items-center justify-center px-3 py-2 bg-white rounded-full"
          >
            <img src={next} alt="next" />
          </button>
        </div>
      </div>
      <div className="hidden lg:flex lg:items-center lg:justify-center lg:gap-5">
        {data.map((item, index) => (
          <div
            key={index}
            className={`${imageIndex === index && `opacity-50`}`}
          >
            <img
              onClick={() => setImageIndex(index)}
              src={item.thumbnail}
              alt="thumbnail"
              className="w-24 rounded-lg cursor-pointer"
            />
          </div>
        ))}
      </div>
    </article>
  );
}

export default ShowImage;
