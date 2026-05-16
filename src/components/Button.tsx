const backgrounds = ['dark', 'light', 'clear']
const shapes = ['square', 'rounded', 'round']
const sizes = ['small', 'medium', 'large']

const checkValue = (value, allowed, defaultValue) =>
	allowed.includes(value) ? value : defaultValue

const Button = ({
	children,
	link = '#',
	background = 'dark',
	shape = 'square',
	size = 'small',
	outline = false,
}) => {
	const checkBackground = checkValue(background, backgrounds, 'dark')
	const checkShape = checkValue(shape, shapes, 'square')
	const checkSize = checkValue(size, sizes, 'small')
	const checkOutline = outline ? 'outline' : ''

	const classNames = ['button', checkBackground, checkShape, checkSize, checkOutline]
			.filter(Boolean)
			.join(' ')

	return (
		<a
			href={link}
			className={classNames}
		>
			{children}
		</a>
	)
}

export default Button