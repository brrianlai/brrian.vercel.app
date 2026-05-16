import { motion } from 'framer-motion'
import { fadeUpItem, staggerContainer } from '../motion'

const container = staggerContainer(0.12)

const Education = () => {
	return (
		<section>
			<h4>Education</h4>
			<h1>University of British Columbia</h1>
			<motion.div
				className='row'
				initial='hidden'
				variants={container}
				viewport={{ once: true }}
				whileInView='show'
			>
				<motion.h5 variants={fadeUpItem}>BSc in Biology</motion.h5>
				<motion.p variants={fadeUpItem}>Apr 2022</motion.p>
				<motion.p variants={fadeUpItem}>Canada</motion.p>
				<motion.p variants={fadeUpItem}>Awarded the B.C. Achievement Scholarship in 2018</motion.p>
			</motion.div>
		</section>
	)
}

export default Education
