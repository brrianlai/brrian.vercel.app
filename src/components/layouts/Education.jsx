
import { motion, cubicBezier } from 'framer-motion'

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
				<motion.h5 variants={item}>BSc in Biology</motion.h5>
				<motion.p variants={item}>Apr 2022</motion.p>
				<motion.p variants={item}>Canada</motion.p>
				<motion.p variants={item}>Awarded the B.C. Achievement Scholarship in 2018</motion.p>
			</motion.div>
		</section>
	)
}

const container = {
	hidden: {},
	show: {
		transition: {
			staggerChildren: 0.12,
		}
	}
}

const item = {
	hidden: {
		opacity: 0,
		y: 10
	},
	show: {
		opacity: 1,
		transition: {
			duration: 0.5,
			ease: cubicBezier(0.465, 0.183, 0.153, 0.946)
		},
		y: 0
	}
}

export default Education