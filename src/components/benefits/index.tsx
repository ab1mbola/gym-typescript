import {
  HomeModernIcon,
  UserGroupIcon,
  AcademicCapIcon,
} from "@heroicons/react/24/solid";
import "./benefits.scss";
import { motion } from "framer-motion";
import HText from "@/shared/hText/HText";
import { BenefitType, SelectedPage } from "@/shared/types";
import BenefitCard from "./BenefitCard";
import ActionButton from "@/shared/actionButton/ActionButton";

const benefits: Array<BenefitType> = [
  {
    icon: <HomeModernIcon className="icons" />,
    title: "State of the Art Facilities",
    description:
      "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Cupiditate, incidunt amet? Quae sit omnis dolores!",
  },
  {
    icon: <UserGroupIcon className="icons" />,
    title: "100's of Diverse Classes",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorem minima rerum ipsam consequatur eligendi hic!",
  },
  {
    icon: <AcademicCapIcon className="icons" />,
    title: "Expert and Pro Trainers",
    description:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit culpa corrupti qui, praesentium nisi libero!",
  },
];

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 },
  },
};

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section id="benefits" className="benefits__container">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
      >
        {/* HEADER */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="benefits__container__header"
        >
          <HText>MORE THAN JUST A GYM</HText>
          <p>
            We provide world class fitness equipment, trainers and classes to
            get you to your ultimate fitness goals with ease. We provide true
            care into each and every member.
          </p>
        </motion.div>

        {/* BENEFIT CARDS */}
        <motion.div
          initial="hidden"
          whileInView={"visible"}
          viewport={{ once: true, amount: 0.5 }}
          variants={container}
          className="benefits__container__benefits"
        >
          {benefits.map((benefit: BenefitType) => (
            <BenefitCard
              title={benefit.title}
              icon={benefit.icon}
              description={benefit.description}
              setSelectedPage={setSelectedPage}
            />
          ))}
        </motion.div>

        {/* GRAPHIC AND DESCRIPTION */}
        <div className="graphic__description">
          {/* GRAPHIC */}
          <img
            className="graphic"
            src="/assets/BenefitsPageGraphic.png"
            alt=""
          />

          {/* DESCRIPTION */}
          <div className="graphic__description__body">
            {/* TITLE */}
            <div className="graphic__description__body__title">
              <div className="descriptionTitleContainer">
                <motion.div
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.5 }}
                  transition={{ duration: 0.5 }}
                  variants={{
                    hidden: { opacity: 0, x: 50 },
                    visible: { opacity: 1, x: 0 },
                  }}
                  className="descriptionTitle"
                >
                  <HText>
                    MILLIONS OF HAPPY MEMBERS GETTING <span>FIT</span>
                  </HText>
                </motion.div>
              </div>
            </div>

            {/* DESCRIPTION */}
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.5 }}
              transition={{ delay: 0.2, duration: 0.5 }}
              variants={{
                hidden: { opacity: 0, x: 50 },
                visible: { opacity: 1, x: 0 },
              }}
              className="graphic__description__body__content"
            >
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim,
                soluta non eius et nihil delectus. Excepturi enim deserunt quam
                beatae. Esse, aliquid quaerat hic voluptas delectus accusamus
                sequi aperiam repellat consequatur eligendi alias est, doloribus
                adipisci repellendus? Officiis blanditiis animi aliquid
                dignissimos delectus itaque molestias numquam sequi laboriosam,
                cupiditate facilis?
              </p>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                Asperiores quisquam ducimus, possimus totam vero molestias magni
                ea. Cumque a, quasi veniam harum obcaecati sunt ea enim saepe at
                corrupti unde temporibus sed quod laborum eveniet ex accusamus
                non reprehenderit nihil!
              </p>
            </motion.div>

            {/* BUTTON */}
            <div className="descriptionButtonContainer">
              <div className="descriptionButton">
                <ActionButton setSelectedPage={setSelectedPage}>
                  Join Now
                </ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
};

export default Benefits;
