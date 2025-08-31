'use client'

import { motion, cubicBezier } from 'framer-motion'

const volunteerList = [
	{
		name: 'Vancouver Coastal Health',
		tags: ['Aug 2019 to Mar 2020', 'Social Recreation Volunteer'],
		description: 'Led group activities with dementia residents, strengthening communication skills and building meaninful connections.'
	},
	{
		name: 'UBC Faculty of Education',
		tags: ['May 2019 to Aug 2019', 'Cultural Ambassador'],
		description: 'Led social and recreational activities for 250+ international undergraduate students and supported program coordinators in planning future activities.'
	}
]

const VolunteerExperience = () => {
	return (
		<section>

			<h4>Volunteer Experience</h4>

			<div className='grid columns-3'>

				{volunteerList.map((volunteer, index) => (
					<motion.div
						className='column gap-smaller'
						initial='hidden'
						key={index}
						variants={item}
						viewport={{ once: true }}
						whileInView='show'
					>
						<h5>{volunteer.name}</h5>
						<div className='row gap-small'>
							{volunteer.tags.map((tag, index) => (
								<h6 key={index}>{tag}</h6>
							))}
						</div>
						<p>{volunteer.description}</p>
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

export default VolunteerExperience