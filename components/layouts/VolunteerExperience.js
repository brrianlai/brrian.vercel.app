import React from 'react'

const volunteerList = [
	{
		name: 'Vancouver Coastal Health',
		date: 'Aug 2019 – Mar 2020',
		subheading: 'Social Recreation Volunteer, Dementia Care Unit',
		description: 'Engaged in social activities and interactions with residents to reinforce their cognitive abilities. Developed interpersonal and communicational skills through connections with residents.'
	},
	{
		name: 'UBC Faculty of Education',
		date: 'May – Aug 2019',
		subheading: 'Cultural Ambassador, Vancouver Summer Program',
		description: 'Led social and recreational activities for 250+ international undergraduate students. Assisted in organizing plans for upcoming activities with program coordinators. Immersed students with sociocultural experiences in Canadian culture.'
	},
	{
		name: 'Thunderbird Elementary',
		date: 'Sep 2017 – Jun 2018',
		subheading: 'Mentor, Community Schools Team',
		description: 'Guided elementary students in academic and physical activities after school, including Math and English.'
	}
]

const VolunteerExperience = () => {
	return (
		<section>

			<div className='grid' data-columns='1-2'>

				<div className='column'>
					<h4>Volunteer Experience</h4>
				</div>

				<div className='column'>
					{volunteerList.map((volunteer, index) => (
						<div className='column' data-gap='smaller' data-layout='justified' key={index}>
							<h5>{volunteer.name}</h5>
							<div className='row' data-gap='smaller' data-layout='justified'>
								<h6>{volunteer.subheading}</h6>
								<h6>{volunteer.date}</h6>
							</div>
							<p>{volunteer.description}</p>
						</div>
					))}
				</div>

			</div>

		</section>
	)
}

export default VolunteerExperience