'use client'

import { motion, cubicBezier } from 'framer-motion'

const workList = [
	{
		name: 'Canada Border Services Agency (CBSA)',
		tags: ['May 2023 to present', 'Executive Assistant'],
		description: 'Executive Assistant to the Director.'
	},
	{
		tags: ['Jun 2025 to Oct 2025', 'A/Resource Management Supervisor'],
		description: 'Acted as the Resource Management Supervisor for the division.'
	},
	{
		tags: ['April 2023 to May 2023', 'A/ATIP Officer'],
		description: 'Acted as the ATIP Liaison Officer for the Pacific Region to coordinate the retrieval, review, and submission of information to the requestor.'
	},
	{
		tags: ['Oct 2022 to May 2023', 'Administrative Assistant'],
		description: 'Processed accounts payables such as journal vouchers and invoices with purchase orders/funds reservations. Prepared staffing paperwork for HR. Provided onboarding and training for new employees.'
	}
]

const WorkExperience = () => {
	return (
		<section>

			<h4>Work Experience</h4>

			<div className='grid columns-3'>

				{workList.map((work, index) => (

					<motion.div
						className='column gap-smaller'
						initial='hidden'
						key={index}
						variants={item}
						viewport={{ once: true }}
						whileInView='show'
					>
						<h5>{work.name}</h5>
						<div className='row gap-small'>
							{work.tags.map((tag, index) => (
								<h6 key={index}>{tag}</h6>
							))}
						</div>
						<p>{work.description}</p>
					</motion.div>

				))}

			</div>

		</section>
	)
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

export default WorkExperience