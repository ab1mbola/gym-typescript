import { motion } from "framer-motion";
import "./ourClasses.scss";
import { ClassType, SelectedPage } from "@/shared/types";
import HText from "@/shared/hText/HText";
import Class from "./Class";

const classes:Array<ClassType> = [
  {
    name: "Weight Training Classes",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque sequi autem laudantium eum hic assumenda eius nisi suscipit obcaecati dolorem?",
    image: '/assets/image1.png',
  },
  {
    name: "Yoga Classes",
    // description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque sequi autem laudantium eum hic assumenda eius nisi suscipit obcaecati dolorem?",
    image: '/assets/image2.png',
  },
  {
    name: "Core Ab Training Classes",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque sequi autem laudantium eum hic assumenda eius nisi suscipit obcaecati dolorem?",
    image: '/assets/image3.png',
  },
  {
    name: "Adventure Classes",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque sequi autem laudantium eum hic assumenda eius nisi suscipit obcaecati dolorem?",
    image: '/assets/image4.png',
  },
  {
    name: "Fitness Classes",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque sequi autem laudantium eum hic assumenda eius nisi suscipit obcaecati dolorem?",
    image: '/assets/image5.png',
  },
  {
    name: "Training Classes",
    description: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eaque sequi autem laudantium eum hic assumenda eius nisi suscipit obcaecati dolorem?",
    image: '/assets/image6.png',
  },
]

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const OurClasses = ({ setSelectedPage }: Props) => {
  return (
    <section id="ourclasses" className="ourclasses">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.OurClasses)}
      >
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
          className="ourclasses__container"
        >
          <div className="ourclasses__container__content">
            <HText>OUR CLASSES</HText>
            <p className="description">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
              laudantium et quis quidem obcaecati corporis nostrum quaerat
              exercitationem, recusandae nulla ullam placeat nobis ex iusto hic.
              Saepe veritatis, est, sequi a minima tempora eum accusamus illo
              molestiae laudantium voluptate commodi!
            </p>
          </div>
        </motion.div>
        <div className="carousel">
          <ul className="carouselContent">
            {classes.map((item: ClassType, index) => (
              <Class 
              key={`${item.name}-${index}`}
              name={item.name}
              description={item.description}
              image={item.image}
              />
            ))}
            {classes.map((item: ClassType, index) => (
              <Class 
              key={`${item.name}-${index}`}
              name={item.name}
              description={item.description}
              image={item.image}
              />
            ))}
            {classes.map((item: ClassType, index) => (
              <Class 
              key={`${item.name}-${index}`}
              name={item.name}
              description={item.description}
              image={item.image}
              />
            ))}
            {classes.map((item: ClassType, index) => (
              <Class 
              key={`${item.name}-${index}`}
              name={item.name}
              description={item.description}
              image={item.image}
              />
            ))}
          </ul>
        </div>
      </motion.div>
    </section>
  );
};

export default OurClasses;
