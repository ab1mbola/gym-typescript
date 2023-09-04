import { SelectedPage } from "@/shared/types";
import AnchorLink from "react-anchor-link-smooth-scroll";
import "./benefitCard.scss";
import { motion } from "framer-motion";

const childVariant = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1 },
};

type Props = {
  icon: JSX.Element;
  title: string;
  description: string;
  setSelectedPage: (value: SelectedPage) => void;
};

const BenefitCard = ({ icon, title, description, setSelectedPage }: Props) => {
  return (
    <motion.div variants={childVariant} className="benefit__card">
      <div className="benefit__card__wrapper">
        <div className="benefit__card__icon">{icon}</div>
      </div>

      <h4 className="benefit__card__title">{title}</h4>
      <p className="benefit__card__description">{description}</p>
      <AnchorLink
        className="link"
        onClick={() => setSelectedPage(SelectedPage.ContactUs)}
        href={`#${SelectedPage.ContactUs}`}
      >
        <p>Learn More</p>
      </AnchorLink>
    </motion.div>
  );
};

export default BenefitCard;
