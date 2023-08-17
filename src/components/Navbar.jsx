import React, { useState } from "react";
import logo from "../assets/images/logo.svg";
import cart from "../assets/images/icon-cart.svg";
import profile from "../assets/images/image-avatar.png";
import hamburger from "../assets/images/icon-menu.svg";
import thumbnail from "../assets/images/image-product-1-thumbnail.jpg";
import deleted from "../assets/images/icon-delete.svg";
import close from "../assets/images/icon-close.svg";

function Navbar({ cartVolume, setCartVolume }) {
  const [navOpen, setNavOpen] = useState(false);
  const [cartOpen, setCartOpen] = useState(false);
  const totalPrice = 125 * cartVolume;
  return (
    <>
      <nav className="w-full mx-auto border-b-2 max-w-7xl">
        <section className="relative flex items-center justify-between p-6 sm:p-10">
          <article>
            <div className="flex items-center justify-center gap-4 md:gap-10">
              <img
                src={hamburger}
                alt="hamburger"
                className="w-full cursor-pointer md:hidden"
                onClick={() => setNavOpen(!navOpen)}
              />
              <img src={logo} alt="logo" className="w-full pb-1" />
              <ul className="hidden cursor-pointer md:flex md:items-center md:justify-center gap-7 text-neutral-darkgrayishblue">
                <li className="hover:scale-105">Collections</li>
                <li className="hover:scale-105">Men</li>
                <li className="hover:scale-105">Women</li>
                <li className="hover:scale-105">About</li>
                <li className="hover:scale-105">Contact</li>
              </ul>
            </div>
          </article>
          <article>
            <div className="flex items-center justify-center gap-3 sm:gap-10">
              <button
                onClick={() => setCartOpen(!cartOpen)}
                className="relative"
              >
                <img src={cart} alt="cart" />
                {cartVolume > 0 && (
                  <p className="absolute px-2 text-xs text-white rounded-full -right-2 -top-2 bg-primary-orange">
                    {cartVolume}
                  </p>
                )}
              </button>
              <img
                src={profile}
                alt="profile"
                className="w-8 h-8 sm:w-12 sm:h-12"
              />
            </div>
          </article>
          {cartOpen && (
            <article className="absolute right-0 z-50 w-full max-w-sm px-2 top-24">
              <div className="bg-white shadow-xl drop-shadow-2xl rounded-xl">
                <div className="p-6 border-b-2">
                  <p className="font-bold">Cart</p>
                </div>
                <div className="p-6 min-h-[200px]">
                  {cartVolume === 0 && (
                    <div className="flex items-center justify-center w-full my-12">
                      <p className="font-bold text-neutral-darkgrayishblue">
                        Your cart is empty
                      </p>
                    </div>
                  )}
                  {cartVolume > 0 && (
                    <>
                      <div className="flex items-center justify-between gap-2">
                        <div className="w-16">
                          <img
                            src={thumbnail}
                            alt="thumbnail"
                            className="object-contain w-full rounded-lg"
                          />
                        </div>
                        <div className=" text-neutral-darkgrayishblue">
                          <p>Fall limited Edition Sneakers</p>
                          <p>
                            $125.00 x {cartVolume}
                            <span className="ml-2 font-bold text-black">
                              ${totalPrice.toFixed(2)}
                            </span>
                          </p>
                        </div>
                        <img
                          onClick={() =>
                            setCartVolume(
                              cartVolume > 0 ? cartVolume - 1 : cartVolume
                            )
                          }
                          src={deleted}
                          alt="deleted"
                          className="cursor-pointer hover:scale-125"
                        />
                      </div>
                      <button className="w-full py-4 mt-8 rounded-lg bg-primary-orange">
                        Checkout
                      </button>
                    </>
                  )}
                </div>
              </div>
            </article>
          )}
        </section>
      </nav>
      {navOpen && (
        <article className="absolute top-0 left-0 z-50 w-full h-screen bg-black bg-opacity-75">
          <div className="h-full p-6 bg-white w-52">
            <button className="mb-14" onClick={() => setNavOpen(!navOpen)}>
              <img src={close} alt="close" />
            </button>
            <ul className="flex flex-col gap-6 text-xl font-bold cursor-pointer text-neutral-verydarkblue">
              <li className="hover:scale-105">Collections</li>
              <li className="hover:scale-105">Men</li>
              <li className="hover:scale-105">Women</li>
              <li className="hover:scale-105">About</li>
              <li className="hover:scale-105">Contact</li>
            </ul>
          </div>
        </article>
      )}
    </>
  );
}

export default Navbar;
