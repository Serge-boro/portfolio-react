import { SectionWrapper } from "../hoc";
import { useContextProvider } from "../useContext/UseContext";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";
import { styles } from "../styles";
import { technologies } from "../constants";

const Tech = () => {
  const { isMobile, checkMobile } = useContextProvider();
  return (
    <>
      <motion.nav variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText} flex`}>
          Technical Skills<p className="ml-3 text-[#5A189A]">.</p>
        </h2>
      </motion.nav>
      <div className="w-full flex">
        <div
          variants={fadeIn("", "", 0.1, 1)}
          className="text-secondary text-[17px] max-w-5xl leading-[30px]"
        >
          {technologies.map(({ title, description }) => {
            return (
              <>
                <p>
                  <b>{title}</b>: {description}
                </p>
              </>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "skills");
