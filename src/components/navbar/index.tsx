import "./navbar.scss";
import { useState } from "react";
import ActionButton from "@/shared/actionButton/ActionButton";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid";
import Link from "./Link";
import { SelectedPage } from "@/shared/types";
import useMediaQuery from "@/hooks/useMediaQuery";

type Props = {
  isTopOfPage: boolean;
  notTopOfPage: boolean;
  selectedPage: SelectedPage;
  setSelectedPage: (value: SelectedPage) => void;
};

const Navbar = ({
  isTopOfPage,
  notTopOfPage,
  selectedPage,
  setSelectedPage,
}: Props) => {
  const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
  // console.log(isMenuToggled);
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px");

  return (
    <nav>
      <div
        className={`navbarContainer ${
          isTopOfPage ? "isTopOfPage" : notTopOfPage ? "isNotTopOfPage" : ""
        }`}
      >
        <div className="navbarWrapper">
          <div className="innerContainer">
            {/* left side */}
            <img src="/assets/Logo.png" alt="" />

            {/* right side */}
            {!isAboveMediumScreens ? (
              <button
                className="mobile-btn"
                onClick={() => setIsMenuToggled(!isMenuToggled)}
              >
                <Bars3Icon className="hamBurgerMenuIcon" />
              </button>
            ) : (
              <div className="rightSide">
                <div className="innerLeftSide">
                  <Link
                    page="Home"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  {/* <Link
                    page="About"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  /> */}
                  <Link
                    page="Benefits"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Our Classes"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                  <Link
                    page="Contact Us"
                    selectedPage={selectedPage}
                    setSelectedPage={setSelectedPage}
                  />
                </div>
                <div className="innerRightSide">
                  <span>Sign In</span>
                  <ActionButton setSelectedPage={setSelectedPage}>
                    Become a Member
                  </ActionButton>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* mobile menu */}
      {!isAboveMediumScreens && isMenuToggled && (
        <div className="mobileMenu">
          {/* CLOSE ICON */}
          <div className="mobileMenu__closeIconWrapper">
            <button
              className="closeButton"
              onClick={() => setIsMenuToggled(!isMenuToggled)}
            >
              <XMarkIcon className="closeButton__Icon" />
            </button>
          </div>

          {/* MENU ITEMS */}
          <div className="innerLeftSide">
            <Link
              page="Home"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            {/* <Link
              page="About"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            /> */}
            <Link
              page="Benefits"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Our Classes"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
            <Link
              page="Contact Us"
              selectedPage={selectedPage}
              setSelectedPage={setSelectedPage}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
