import React from "react";
import "./headerCSS.css";

const Header = () => {
  return (
    <div>
      <section
        id="picture"
        style={{
          backgroundImage:
            "url(" +
            "https://www.teahub.io/photos/full/22-220999_web-developer-wallpaper-web-development.jpg" +
            ")",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundAttachment: "fixed"
        }}
      >
        <div className="texts ">
          <p className="px-5 py-5">
            I want to
            <span className="makeThings px-2">make things</span>
            <br />
            that
            <span className="makeADifference">&nbsp;make a difference.</span>
          </p>
        </div>
      </section>
    </div>
  );
};

export default Header;
