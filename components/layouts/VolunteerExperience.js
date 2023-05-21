import { motion } from 'framer-motion'

const volunteerList = [
	{
		name: 'Vancouver Coastal Health',
		tags: ['Aug 2019 to Mar 2020', 'Social Recreation Volunteer'],
		description: 'Engaged in social activities with residents that have dementia to improve cognitive abilities. Developed interpersonal skills and formed insightful connections with residents.'
	},
	{
		name: 'UBC Faculty of Education',
		tags: ['May 2019 to Aug 2019', 'Cultural Ambassador'],
		description: 'Led social and recreational activities for 250+ international undergraduate students. Assisted in organizing plans for upcoming activities with program coordinators.'
	},
	{
		name: 'Thunderbird Elementary',
		tags: ['Sep 2017 to Jun 2018', 'Tutor'],
		description: 'Guided elementary students in academic activities and physical activities after school, including Math and English.'
	}
]

const VolunteerExperience = () => {
	return (
		<section>

			<h4>Volunteer Experience</h4>

			<div className='grid' data-columns='3'>

				{volunteerList.map((volunteer, index) => (
					<motion.div
						className='column'
						data-gap='smaller'
						initial='hidden'
						key={index}
						variants={item}
						viewport={{ once: true }}
						whileInView='show'
					>
						<h5>{volunteer.name}</h5>
						<div className='row' data-gap='small'>
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
			ease: [0.465, 0.183, 0.153, 0.946]
		},
		y: 0
	}
}

export default VolunteerExperience