import { NavLink, useLocation, useResolvedPath } from 'react-router-dom';
import './styles/WorkElement.scss';

export default function WorkElement({ path, style, text, date }) {
	const location = useLocation().pathname;
	return (
		<NavLink
			to={path}
			className={'workElement'}
			style={style}
			onClick={(e) => {
				if (path === location) e.preventDefault();
			}}
		>
			<h2>{text}</h2>
			<p>{date}</p>
		</NavLink>
	);
}
