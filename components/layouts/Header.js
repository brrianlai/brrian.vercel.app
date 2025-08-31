'use client'

import { useState } from 'react'
import { motion, cubicBezier } from 'framer-motion'

import { RiMenuLine, RiCloseLine } from 'react-icons/ri'

import Social from '../Social'

import useScrollDirection from '../../src/useScrollDirection'

const navItems = [
	{
		name: 'Hello',
		link: '#'
	},
	{
		name: 'From',
		link: '#'
	},
	{
		name: 'The',
		link: '#'
	},
	{
		name: 'Other',
		link: '#'
	},
	{
		name: 'Side',
		link: '#'
	}
]

const variants = {
	visible: {
		opacity: 1,
		transition: {
			delayChildren: 0.3,
			duration: 0.6,
			ease: cubicBezier(0.465, 0.183, 0.153, 0.946),
			staggerChildren: 0.08
		},
		y: 0
	},
	hidden: {
		opacity: 0,
		transition: {
			duration: 0.4,
			ease: cubicBezier(0.465, 0.183, 0.153, 0.946)
		},
		y: '120%'
	}
}

const item = {
	visible: {
		opacity: 1,
		y: 0
	},
	hidden: {
		opacity: 0,
		y: 10
	}
}

const Header = () => {
	const [isActive, setActive] = useState(false)
	const toggleActive = () => setActive(!isActive)

	const scrollDirection = useScrollDirection()

	return (
		<>
			<header className={scrollDirection === 'down' ? 'hidden' : null}>
				<h4>Brian Lai</h4>
				<div className='icon icon-menu' onClick={toggleActive}>
					<RiMenuLine />
				</div>
			</header>

			<motion.nav
				animate={isActive ? 'visible' : 'hidden'}
				initial='hidden'
				variants={variants}
			>
				<div className='row nav-heading'>
					<div className='icon icon-menu' onClick={toggleActive}>
						<RiCloseLine />
					</div>
				</div>

				<div className='column'>
					{navItems.map((navItem, index) => (
						<motion.h4
							key={index}
							variants={item}>
							<a href={navItem.link}>
								{navItem.name}
							</a>
						</motion.h4>
					))}
				</div>
				
				<motion.div
					className='row nav-footer'
					variants={item}
				>
					<Social />
				</motion.div>
			</motion.nav>
		</>
	)
}

export default Header
