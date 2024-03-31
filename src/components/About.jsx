import Tilt from 'react-tilt'
import { motion } from 'framer-motion'

import { styles } from '../styles'
import { services } from '../constants'
import { fadeIn, textVariant } from '../utils/motion'

import { SectionWrapper } from '../hoc'
import { useContextProvider } from '../useContext/UseContext'

const ServiceCard = ({ title, icon, idx, isMobile }) => {
  return (
    <Tilt className='xs:w-[280px] w-full'>
      <motion.nav
        variants={fadeIn('right', 'spring', 0.5 * idx, 0.75)}
        className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
      >
        <div
          className={`bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col ${
            isMobile && 'min-h-[200px]'
          }`}
          options={{ max: 45, scale: 1, speed: 450 }}
        >
          <img
            src={icon}
            alt='title'
            className={`w-16 h-16 object-contain ${isMobile && 'w-12'}`}
          />
          <h3
            className={`text-white text-[16px] text-center ${
              isMobile && 'text-[12px]'
            }`}
          >
            {title}
          </h3>
        </div>
      </motion.nav>
    </Tilt>
  )
}

const About = () => {
  const { isMobile } = useContextProvider()
  return (
    <>
      <motion.nav variants={textVariant()}>
        <p className={`${styles.sectionSubText} ${isMobile && 'text-[14px]'}`}>
          Intraduction
        </p>

        <h2 className={`${styles.sectionHeadText} flex `}>
          Overview<p className='ml-3 text-[#915eff]'>.</p>
        </h2>
      </motion.nav>
      <motion.p
        variants={fadeIn('', '', 0.1, 1)}
        className={`mt-4 text-secondary text-[17px] max-w-3xl leading-[30px] ${
          isMobile && 'text-[14px]'
        }`}
      >
        &nbsp; Experienced in all phases of SDLS and SQA with a record of
        delivering on time and on budget. Results-oriented and customer
        success-driven. I have a strong work ethic and take a pragmatic approach
        to getting the job done while improving the process. <br />
        &nbsp; Over 5 years of hands-on experience in Quality Assurance, mainly
        focused on the development of both, the front and back-end of the
        multi-tier distributed web-centric and client/server-based applications.{' '}
        <br />
        &nbsp; More than 7 years of experience in application development,
        product life cycle experience from the concept and design to the
        shipment, involvement in triage and disposition of all bugs reported
        against their environments, and developing and implementing various
        QA-related documentation.
      </motion.p>
      <div
        className={`mt-20 flex flex-wrap gap-10 justify-evenly items-center ${
          isMobile && 'mt-10 gap-8 m-10'
        }`}
      >
        {services.map((item, idx) => {
          return (
            <ServiceCard
              key={item.title}
              idx={idx}
              {...item}
              isMobile={isMobile}
            />
          )
        })}
      </div>
    </>
  )
}

export default SectionWrapper(About, 'about')
