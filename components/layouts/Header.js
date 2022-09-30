import React from 'react'
import Social from '../Social'
import Icon from '../Icon'
import List, { ListItem } from '../List'
import Divider from '../Divider'

const navItems = [
	{
		name: 'GitHub',
		link: 'https://github.com/brrianlai',
		icon: 'ri-github-fill'
	},
	{
		name: 'LinkedIn',
		link: 'https://www.linkedin.com/in/brian-lai-8989b91aa/',
		icon: 'ri-linkedin-fill'
	},
	{
		name: 'Instagram',
		link: 'https://instagram.com/brrianlai',
		icon: 'ri-instagram-line'
	}
]

const Header = () => {
	const [active, setActive] = React.useState(false)
	const toggleActive = () => setActive(value => !value)

	return (
		<div className='background-blur'>
			<header>
				<h4>brrian</h4>
				<Social />
				<div className='icon icon-menu' onClick={toggleActive} aria-label='Menu button'>
					<Icon name='ri-menu-line' />
				</div>
			</header>

			<nav className={active ? 'active' : ''}>
				<List>
					
					{navItems.map((navItem, index) => (
						<ListItem name={navItem.name} iconRight={navItem.icon} link={navItem.link} />
					))}
					<a href='https://vsco.co/brrian' alt='VSCO'>
						<div className='list-item'>
							<div className='row list-row'>
								<h5>VSCO</h5>
							</div>
							<div className='row list-row'>
								<div className='icon icon-vsco'>
									<svg
										width='22'
										height='22'
										viewBox='0 0 24 24'
										xmlns='http://www.w3.org/2000/svg'
									>
										<path
											fillRule='evenodd'
											d='M12,1 C5.92525,1 1,5.92525 1,12 C1,18.07475 5.92525,23 12,23 C18.07475,23 23,18.07475 23,12 C23,5.92525 18.07475,1 12,1 M8,20.0613233 L8,3.93867665 C8.92186432,3.47938997 9.93309986,3.17365831 11,3.0551883 L11,20.9448117 C9.93309986,20.8263417 8.92186432,20.52061 8,20.0613233 Z M6,18.7027112 C4.15970331,17.0536354 3,14.659695 3,12 C3,9.34030504 4.15970331,6.94636465 6,5.29728876 L6,18.7027112 Z M16,3.93867665 L16,20.0613233 C15.0781357,20.52061 14.0669001,20.8263417 13,20.9448117 L13,3.0551883 C14.0669001,3.17365831 15.0781357,3.47938997 16,3.93867665 Z M18,5.29728876 C19.8402967,6.94636465 21,9.34030504 21,12 C21,14.659695 19.8402967,17.0536354 18,18.7027112 L18,5.29728876 Z'
										></path>
									</svg>
								</div>
							</div>
						</div>
					</a>
				</List>
			</nav>
		</div>
	)
}

export default Header
