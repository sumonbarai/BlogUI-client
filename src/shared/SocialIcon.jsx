import React from "react";

const SocialIcon = () => {
  // handle social link redirect
  const handleFb = () => {
    window.open("https://www.facebook.com/", "_blank");
  };

  const handleTwitter = () => {
    window.open("https://twitter.com/", "_blank");
  };

  const handleYoutube = () => {
    window.open("https://www.youtube.com/", "_blank");
  };

  return (
    <>
      <div
        className="m-1 w-7 h-7 rounded-full flex text-white bg-[#3b5999] cursor-pointer"
        onClick={handleFb}
      >
        <i className="fa-brands fa-facebook-f m-auto"></i>
      </div>
      <div
        className="m-1 w-7 h-7 rounded-full flex text-white bg-[#55acee] cursor-pointer"
        onClick={handleTwitter}
      >
        <i className="fa-brands fa-twitter m-auto"></i>
      </div>
      <div
        className="m-1 w-7 h-7 rounded-full flex text-white bg-[#bd081c] cursor-pointer"
        onClick={handleYoutube}
      >
        <i className="fa-brands fa-youtube m-auto"></i>
      </div>
    </>
  );
};

export default SocialIcon;
