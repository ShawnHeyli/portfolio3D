import './styles/Work.scss';

export default function Work(props) {
	return (
		<a
			href={props.href}
			style={{ backgroundImage: `url(${props.backgroundImageURL})` }}
			className='work'
		>
			<div>
				<p>{props.title}</p>
			</div>
		</a>
	);
}
