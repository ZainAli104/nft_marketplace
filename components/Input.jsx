import React from 'react';

const Input = ({ inputType, title, placeholder, handleClick }) => (
  <div className="mt-10 w-full">
    <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-xl">{title}</p>

    {inputType === 'number' ? (
      <div>
        <div
          className="dark:bg-nft-black-1 bg-white border dark:border-nft-black-1 border-nft-gray-2 rounded-lg w-full outline-none font-poppins dark:text-white text-nft-gray-2 text-base mt-4 px-4 py-3 flexBetween flex-row"
        >
          <input
            type="number"
            step={0.01}
            min={0}
            placeholder={placeholder}
            onChange={handleClick}
            className="flex w-full dark:bg-nft-black-1 bg-white outline-none"
          />
          <p className="font-poppins dark:text-white text-nft-black-1 font-semibold text-xl">ETH</p>
        </div>
        <p className="dark:text-nft-gray-1 text-nft-gray-3 mt-2 ml-1 text-sm">0.01-50 ETH</p>
      </div>
    ) : inputType === 'textarea' ? (
      <div>
        <textarea
          rows={6}
          placeholder={placeholder}
          onChange={handleClick}
          className="dark:bg-nft-black-1 bg-white border dark:border-nft-black-1 border-nft-gray-2 rounded-lg w-full outline-none font-poppins dark:text-white text-nft-gray-2 text-base mt-4 px-4 py-3 transition-all duration-200 ease-linear"
        />
        <p className="dark:text-nft-gray-1 text-nft-gray-3 mt-2 ml-1 text-sm">Maximum 200 symbols</p>
      </div>
    ) : (
      <div>
        <input
          type="text"
          placeholder={placeholder}
          onChange={handleClick}
          className="dark:bg-nft-black-1 bg-white border dark:border-nft-black-1 border-nft-gray-2 rounded-lg w-full outline-none font-poppins dark:text-white text-nft-gray-2 text-base mt-4 px-4 py-3"
        />
        <p className="dark:text-nft-gray-1 text-nft-gray-3 mt-2 ml-1 text-sm">2-20 symbols</p>
      </div>
    )}

  </div>
);

export default Input;
