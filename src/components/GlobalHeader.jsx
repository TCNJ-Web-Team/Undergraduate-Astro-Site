// import { useState, useEffect, useRef } from "react";
import { useState, useEffect } from "react";
// import "../styles/accordion-styles.scss";
import "../styles/global-nav.scss";
export default function GlobalHeader({ indexCheck }) {
  const [open, setOpen] = useState(false);

  const openSideNav = (e) => {
    e.stopPropagation(); // Prevent event from bubbling up
    setOpen(!open);
  };

  const handleClickOutside = (e) => {
    // Only close if clicking the overlay area (slider-container) but not the navigation content
    if (e.target.id === "slider-container") {
      setOpen(false);
    }
  };

  useEffect(() => {
    const handleKeyPress = (event) => {
      if (event.key === "Escape") {
        setOpen(false);
        // console.log("test key");
      }
    };

    if (open) {
      // Attach the event listener
      document.addEventListener("keydown", handleKeyPress);
    } else {
      // Detach the event listener
      document.removeEventListener("keydown", handleKeyPress);
    }

    // Clean up the event listener when the component unmounts
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [open]); // Dependency on 'open' ensures the effect is re-run when 'open' changes

  return (
    <>
      {/* {indexCheck && <p>THIS IS THE ROOT</p>} */}
      <div className={`global-nav${indexCheck ? " index-nav" : ""}`}>
        <div
          id="slider-container"
          onClick={handleClickOutside}
          className={open ? "open" : ""}
        >
          <img
            alt="Close"
            id="close-button"
            src="/close-button.svg"
            onClick={openSideNav}
          />
          <div id="nav-container">
            <div id="slider-nav">
              <div
                className="tcnj-global-search-panel"
                style={{ textAlign: "center" }}
              >
                <form id="cse-search-box" action="//tcnj.edu/search/">
                  <label className="visually-hidden" htmlFor="g-search">
                    Search
                  </label>
                  <input
                    type="hidden"
                    name="cx"
                    value="016215932862171572185:xlzcmqlxfr0"
                  />
                  <input type="hidden" name="cof" value="FORID:10" />
                  <input type="hidden" name="ie" value="UTF-8" />
                  <input type="hidden" name="hq" value="-inurl:https" />
                  <input
                    id="g-search"
                    type="text"
                    name="q"
                    className="search-icon"
                    placeholder=""
                  />
                  <input
                    id="SearchButton"
                    value="submit"
                    type="submit"
                    name="sa"
                  />
                </form>
              </div>

              <div className="global-nav-panel">
                <a href="https://www.tcnj.edu">TCNJ Home</a>
                <a href="https://tcnj.edu/about/">About</a>
                <a href="https://academics.tcnj.edu">Academics</a>
                <a href="https://admissions.tcnj.edu/">Admissions</a>
                <a href="https://www.tcnjathletics.com/">Athletics</a>
                <a href="https://campuslife.tcnj.edu/">Campus Life</a>
                <a href="https://library.tcnj.edu/">Library</a>
              </div>

              <div className="flex-menu">
                <a href="https://tcnj.edu/a-z/">A-Z</a>
                <a href="https://www.tcnj.edu/directories">Directory</a>
                <a href="https://tcnj.edu/about/campus-info/campus-map/">Map</a>
                <a href="https://tcnj.edu/administration/">Offices</a>
              </div>

              <div id="social-icons" className="flex-menu">
                <a href="http://www.facebook.com/tcnjlions">
                  <img
                    width="24"
                    height="24"
                    alt="facebook icon"
                    src="https://programs.tcnj.edu/facebook-4-32.png"
                  />
                </a>
                <a href="http://twitter.com/tcnj">
                  <img
                    width="24"
                    height="24"
                    alt="twitter icon"
                    src="https://programs.tcnj.edu/twitter-4-32.png"
                  />
                </a>
                <a href="https://www.linkedin.com/school/the-college-of-new-jersey/">
                  <img
                    width="24"
                    height="24"
                    alt="linkedin icon"
                    src="https://programs.tcnj.edu/linkedin-4-32.png"
                  />
                </a>
                <a href="http://instagram.com/tcnj_official">
                  <img
                    width="24"
                    height="24"
                    alt="instagram icon"
                    src="https://programs.tcnj.edu/instagram-4-32.png"
                  />
                </a>
                <a href="http://www.youtube.com/tcnjvideo">
                  <img
                    width="24"
                    height="24"
                    alt="youtube icon"
                    src="https://programs.tcnj.edu/youtube-32-rev.png"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>

        <div className={`inner${indexCheck ? " homepage-nav" : ""}`}>
          <a style={{ display: "flex" }} href="https://tcnj.edu/">
            <img
              id="tcnj-logo"
              src="/tcnj-logo.svg"
              alt="TCNJ"
              className="w-[203px] h-[43.922px]"
            />
          </a>
          <div className="nav-menu">
            <a href="https://admissions.tcnj.edu/apply/">Apply</a>
            <a href="https://admissions.tcnj.edu/visit/">Visit</a>
            <a href="https://give.tcnj.edu/">Give</a>
            <span className="desktop-global-nav-item">|</span>
            <a
              className="desktop-global-nav-item"
              href="https://alumni.tcnj.edu/"
            >
              Alumni
            </a>
            <a
              className="desktop-global-nav-item"
              href="https://parents.tcnj.edu/"
            >
              Parents
            </a>
            <a
              className="desktop-global-nav-item"
              href="https://tcnj.edu/administration/"
            >
              Offices
            </a>
            <a
              className="desktop-global-nav-item"
              href="https://today.tcnj.edu/"
            >
              TCNJ Today
            </a>
            <img
              id="open-sidebar-button"
              src="/menu-icon-white.svg"
              alt="Global Nav Menu"
              onClick={openSideNav}
              className="w-[17px] h-[14px]"
            />
          </div>
        </div>
      </div>

      <div id="site-header">
        <div id="site-title" className="inner">
          <a id="parent-site"></a>
        </div>
        <div id="site-nav">
          <div className="inner"></div>
        </div>
      </div>
    </>
  );
}
