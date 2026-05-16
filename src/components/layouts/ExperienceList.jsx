import { motion } from 'framer-motion'
import { fadeUpItem } from '../motion'

const ExperienceList = ({ title, items }) => {
	return (
		<section>

			<h4>{title}</h4>

			<div className='grid columns-3'>

				{items.map((entry, index) => (
					<motion.div
						className='column gap-smaller'
						initial='hidden'
						key={index}
						variants={fadeUpItem}
						viewport={{ once: true }}
						whileInView='show'
					>
						{entry.name && <h5>{entry.name}</h5>}
						<div className='row gap-small'>
							{entry.tags.map((tag, i) => (
								<h6 key={i}>{tag}</h6>
							))}
						</div>
						<p>{entry.description}</p>
					</motion.div>
				))}

			</div>

		</section>
	)
}

export default ExperienceList
