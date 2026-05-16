import ExperienceList from './ExperienceList'

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

const VolunteerExperience = () => (
	<ExperienceList title='Volunteer Experience' items={volunteerList} />
)

export default VolunteerExperience
