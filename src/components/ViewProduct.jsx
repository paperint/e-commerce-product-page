import React, { useState } from "react";
import minus from "../assets/images/icon-minus.svg";
import plus from "../assets/images/icon-plus.svg";
import cartImg from "../assets/images/icon-cart2.svg";
import next from "../assets/images/icon-next.svg";
import prev from "../assets/images/icon-previous.svg";
import data from "../data/productData.js";
import ShowImage from "./ShowImage";

function ViewProduct({ setCartVolume, cartVolume }) {
  const [imageIndex, setImageIndex] = useState(0);
  const [amount, setAmount] = useState(0);
  const [showImage, setShowImage] = useState(false);
  const { image } = data[imageIndex];

  const handlerNextImage = () => {
    if (imageIndex < data.length - 1) {
      setImageIndex(imageIndex + 1);
    } else {
      setImageIndex(0);
    }
  };

  const handlerPrevImage = () => {
    if (imageIndex > 1) {
      setImageIndex(imageIndex - 1);
    } else {
      setImageIndex(data.length - 1);
    }
  };

  const handlerAddCart = () => {
    if (amount > 0) {
      setCartVolume(cartVolume + amount);
      setAmount(0);
    } else {
      setCartVolume(0);
    }
  };

  return (
    <main className="w-full mx-auto max-w-7xl">
      <section>
        {showImage && (
          <ShowImage
            image={image}
            imageIndex={imageIndex}
            setImageIndex={setImageIndex}
            handlerNextImage={handlerNextImage}
            handlerPrevImage={handlerPrevImage}
            data={data}
            setShowImage={setShowImage}
            showImage={showImage}
          />
        )}

        <div className="grid max-w-6xl grid-cols-1 mx-auto lg:grid-cols-2 place-items-center">
          <article className="flex flex-col items-center justify-center w-full max-w-xl gap-6 lg:px-20 lg:py-12">
            <div className="max-lg:relative">
              <img
                src={image}
                alt={image}
                className="rounded-lg cursor-pointer max-lg:hidden"
                onClick={() => {
                  setShowImage(!showImage);
                }}
              />
              <img src={image} alt={image} className="rounded-lg lg:hidden" />
              <div className="absolute flex justify-between w-full px-3 translate-y-1/2 lg:hidden bottom-1/2">
                <button
                  onClick={() => handlerPrevImage()}
                  className="flex items-center justify-center px-4 py-3 bg-white rounded-full"
                >
                  <img src={prev} alt="prev" />
                </button>
                <button
                  onClick={() => handlerNextImage()}
                  className="flex items-center justify-center px-4 py-3 bg-white rounded-full"
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
                    className="rounded-lg cursor-pointer"
                  />
                </div>
              ))}
            </div>
          </article>
          <article className="flex flex-col gap-4 p-6 sm:px-20 sm:py-12">
            <p className="text-xs font-bold tracking-widest text-primary-orange">
              SNEAKER COMPANY
            </p>
            <h1 className="text-2xl font-bold md:text-4xl">
              Fall Limited Edition Sneakers
            </h1>
            <p className="text-sm leading-6 md:my-4 text-neutral-darkgrayishblue">
              These low-profile sneakers are your perfect casual wear companion.
              Featuring a durable rubber outer sole, they’ll withstand
              everything the weather can offer.
            </p>
            <div className="flex items-center gap-4">
              <h2 className="text-xl font-bold">$125.00</h2>
              <p className="p-1 text-xs font-bold tracking-wider rounded-md bg-primary-pale-orange text-primary-orange">
                50%
              </p>
            </div>
            <p className="text-xs font-bold line-through text-neutral-grayishblue">
              $250.00
            </p>
            <div className="flex flex-col items-center w-full gap-5 md:flex-row">
              <div className="flex justify-between w-full gap-10 p-2 px-5 rounded-lg bg-neutral-lightgrayishblue">
                <button
                  onClick={() => setAmount(amount > 0 ? amount - 1 : amount)}
                >
                  <img src={minus} alt="minus" className="w-full" />
                </button>
                <p className="font-bold"> {amount} </p>
                <button onClick={() => setAmount(amount + 1)}>
                  <img src={plus} alt="plus" className="w-full" />
                </button>
              </div>
              <div className="flex items-center justify-center w-full rounded-xl bg-primary-orange">
                <button className="p-3" onClick={() => handlerAddCart()}>
                  <div className="flex items-center justify-center gap-3 font-bold text-white text-opacity-75">
                    <img src={cartImg} alt="cart" className="opacity-75" />
                    <p>Add to cart</p>
                  </div>
                </button>
              </div>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

export default ViewProduct;
