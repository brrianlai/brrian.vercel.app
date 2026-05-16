import Button from "../Button";
import { motion, cubicBezier } from "framer-motion";
import Social from "../Social";
import profilePhoto from "../../profile.png";

import { RiMailLine } from "react-icons/ri";

const Introduction = () => {
  return (
    <section className="introduction background-waves">
      <motion.div
        className="column"
        initial="hidden"
        animate="show"
        variants={container}
      >
        <h3>BSc Biology from UBC</h3>

        <motion.div variants={item}>
          <Social />
        </motion.div>
      </motion.div>

      <div className="column">
        <div className="profile">
          <img src={profilePhoto} alt="Profile photo" />
        </div>
      </div>
    </section>
  );
};

const container = {
  hidden: {},
  show: {
    transition: {
      delayChildren: 0.1,
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: {
    opacity: 0,
    y: 10,
  },
  show: {
    opacity: 1,
    transition: {
      duration: 0.4,
      ease: cubicBezier(0.465, 0.183, 0.153, 0.946),
    },
    y: 0,
  },
};

export default Introduction;
