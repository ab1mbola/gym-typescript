import { motion } from "framer-motion";
import "./contactUs.scss";
import { SelectedPage } from "@/shared/types";
import { useForm } from "react-hook-form";
import HText from "@/shared/hText/HText";

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
};

const ContactUs = ({ setSelectedPage }: Props) => {
  const {
    register,
    trigger,
    formState: { errors },
  } = useForm();

  const onSubmit = async (e: any) => {
    const isValid = await trigger();
    if (!isValid) {
      e.preventDefault();
    }
  };

  return (
    <section id="contactus" className="contactUs">
      <motion.div
        onViewportEnter={() => setSelectedPage(SelectedPage.ContactUs)}
      >
        {/* HEADER */}
        <motion.div
          className="contactUs__header"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.5 }}
          variants={{
            hidden: { opacity: 0, x: -50 },
            visible: { opacity: 1, x: 0 },
          }}
        >
          <HText>
            <span>JOIN NOW</span> TO GET IN SHAPE
          </HText>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores
            facere reprehenderit expedita vel modi fugit laudantium. Minima,
            tempora cum ut vitae nesciunt at adipisci vel odit? Quos ipsum
            ducimus aut!
          </p>
        </motion.div>

        {/* FORM AND IMAGE */}
        <div className="fiContainer">
          <motion.div
            className="formContainer"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <form
              className="form"
              target="_blank"
              action="https://formsubmit.co/61556d579b6809f62863732cd0b10665"
              onSubmit={onSubmit}
              method="POST"
            >
              {errors.name && (
                <p className={`errorText ${errors.name ? "show" : ""}`}>
                  {errors.name.type === "required" && "Name is required!"}
                  {errors.name.type === "maxLength" &&
                    "Max Length is a 100 characters"}
                </p>
              )}
              <input
                className="formInput"
                type="text"
                placeholder="NAME"
                {...register("name", {
                  required: true,
                  maxLength: 100,
                })}
              />

              {errors.email && (
                <p className={`errorText ${errors.email ? "show" : ""}`}>
                  {errors.email.type === "required" && "Email is required!"}
                  {errors.email.type === "pattern" && "Invalid Email address"}
                </p>
              )}
              <input
                className="formInput"
                type="text"
                placeholder="EMAIL"
                {...register("email", {
                  required: true,
                  pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                })}
              />

              {errors.message && (
                <p className={`errorText ${errors.email ? "show" : ""}`}>
                  {errors.message.type === "required" &&
                    "This Field is required!"}
                  {errors.message.type === "maxLength" &&
                    "Max Length is a 2000 characters"}
                </p>
              )}
              <textarea
                className="formInput"
                rows={4}
                cols={50}
                placeholder="MESSAGE"
                {...register("message", {
                  required: true,
                  maxLength: 2000,
                })}
              />

              <button className="formButton" type="submit">
                SUBMIT
              </button>
            </form>
          </motion.div>

          <motion.div
            className="imageContainer"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.5 }}
            variants={{
              hidden: { opacity: 0, y: 50 },
              visible: { opacity: 1, y: 0 },
            }}
          >
            <div className="evolveImage">
              <img
                className=""
                src="./assets/ContactUsPageGraphic.png"
                alt="contact-us-page-image"
              />
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
};

export default ContactUs;
