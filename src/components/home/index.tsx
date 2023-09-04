import { SelectedPage } from "@/shared/types";
import "./home.scss";
import useMediaQuery from "@/hooks/useMediaQuery";
import ActionButton from "@/shared/actionButton/ActionButton";
import AnchorLink from "react-anchor-link-smooth-scroll";
import { motion } from "framer-motion";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Home = ({ setSelectedPage }: Props) => {
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px");

  return (
    <section id="home" className="homepage">
      {/* image and header */}
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Home)}
        className="homepage__container"
      >
        {/* main header */}
        <div className=" homepage__container__header">
          {/* headings */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="headings"
          >
            <div className="headings__image">
              <div className="headings__image__container">
                <img src="/assets/HomePageText.png" alt="home page text" />
              </div>
            </div>

            <p className="description">
              Unrivaled Gym. Unparalleled Training Fitness Classes. World Class
              Studios to get the Body Shapes That you Dream of.. Get Your Dream
              Body Now.
            </p>
          </motion.div>

          {/* actions */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, x: -50 },
              visible: { opacity: 1, x: 0 },
            }}
            className="actions"
          >
            <ActionButton setSelectedPage={setSelectedPage}>
              Join Now
            </ActionButton>
            <AnchorLink
              className="link"
              onClick={() => setSelectedPage(SelectedPage.ContactUs)}
              href={`#${SelectedPage.ContactUs}`}
            >
              <p>Learn More</p>
            </AnchorLink>
          </motion.div>
        </div>

        {/* hero image */}
        <div className="heroImage">
          <img src="/assets/HomePageGraphic.png" alt="home-pageGraphic" />
        </div>
      </motion.div>

      {/* sponsors */}
      {isAboveMediumScreens && (
        <div className="homepage__sponsors">
          <div className="sponsorsContainer">
            <div className="sponsorsWrapper">
              <img src="/assets/SponsorRedBull.png" alt="redbull-sponsor" />
              <img src="/assets/SponsorForbes.png" alt="forbes-sponsor" />
              <img src="/assets/SponsorFortune.png" alt="fortune-sponsor" />
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Home;
