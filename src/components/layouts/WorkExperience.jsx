import ExperienceList from './ExperienceList'

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

const WorkExperience = () => (
	<ExperienceList title='Work Experience' items={workList} />
)

export default WorkExperience
