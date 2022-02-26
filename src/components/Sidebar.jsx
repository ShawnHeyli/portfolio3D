import './styles/Sidebar.scss';

export default function Sidebar(props) {
	return (
		<div
			style={{
				background: props.sidebarImageUrl
					? `url(${props.sidebarImageUrl}) center/cover`
					: '',
				borderRight: `solid 4px ${props.pageColor}`
			}}
			className='sidebar'
		>
			{props.floatSidebarUrl ? (
				<img className='float' src={props.floatSidebarUrl} alt='float' />
			) : null}
			{props.children}
		</div>
	);
}
