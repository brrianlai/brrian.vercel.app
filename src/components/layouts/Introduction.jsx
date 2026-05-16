import { motion } from 'framer-motion'
import { fadeUpItem, staggerContainer } from '../motion'
import Social from '../Social'
import profilePhoto from '../../profile.png'

const container = staggerContainer(0.1, 0.1)

const Introduction = () => {
	return (
		<section className='introduction background-waves'>
			<motion.div
				className='column'
				initial='hidden'
				animate='show'
				variants={container}
			>
				<h3>BSc Biology from UBC</h3>

				<motion.div variants={fadeUpItem}>
					<Social />
				</motion.div>
			</motion.div>

			<div className='column'>
				<div className='profile'>
					<img src={profilePhoto} alt='Profile photo' />
				</div>
			</div>
		</section>
	)
}

export default Introduction
