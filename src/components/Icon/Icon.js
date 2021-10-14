import styles from './icon.module.scss';

// ICONS
import usNewsIcon from '../../assets/icons/us-news.png';
import scienceIcon from '../../assets/icons/science.png';
import politicsIcon from '../../assets/icons/politics.png';
import worldIcon from '../../assets/icons/world.png';
import entertainmentIcon from '../../assets/icons/entertainment.png';
import religionIcon from '../../assets/icons/religion.png';
import businessIcon from '../../assets/icons/business.png';

const Icon = ({ iconName }) => {

	const renderIcon = ( iconName ) => {

		switch(iconName) {
			case 'us-news':
				return usNewsIcon;
			case 'politics':
				return politicsIcon;
			case 'world-news':
				return worldIcon;
			case 'religion':
				return religionIcon;
			case 'entertainment':
				return entertainmentIcon;
			case 'business':
				return businessIcon;
			case 'science':
				return scienceIcon;
			default:
				return usNewsIcon;
		}

	}

	const test = () => {

		return (
			<svg style={{ width:60, height: 'auto' }} viewBox="0 0 60 60">
			<rect style={{ fill: '#402d85' }} width="60" height="60" rx="17"/>
			<path style={{ fill: 'none', stroke: '#fff', strokeLinecap: 'round', strokeLinejoin: 'round' }}d="M28.85,19c.38-.68.79-1.34,1.24-2,.69-1,1.49-2.11,2.15-2.88h0a25.62,25.62,0,0,0,18.09,8.5h0c-.17,1-.51,2.31-.84,3.49a23.62,23.62,0,0,1-4.19,8.31C38.7,42.73,30.2,42,30.2,42h0a11.57,11.57,0,0,1-1-1.3"/>
			<path style={{ fill: 'none', stroke: '#fff', strokeLinecap: 'round', strokeLinejoin: 'round' }} d="M35.94,25.42a3.18,3.18,0,0,1-2.87,0"/>
			<path style={{ fill: 'none', stroke: '#fff', strokeLinecap: 'round', strokeLinejoin: 'round' }} d="M44,29.21A3.41,3.41,0,0,1,39.3,27"/>
			<path style={{ fill: 'none', stroke: '#fff', strokeLinecap: 'round', strokeLinejoin: 'round' }} d="M37.72,35.07a4.68,4.68,0,0,1-4.24,0,5.61,5.61,0,0,1-1.24-.8"/>
			<path style={{ fill: 'none', stroke: '#fff', strokeLinecap: 'round', strokeLinejoin: 'round' }} d="M30.33,20l.38-.16h0c.27,1,.53,2.36.73,3.59a23.48,23.48,0,0,1-.4,9.73C28.47,43,20.75,45.87,20.72,45.88h0s-8-3-10.45-13.27a23.68,23.68,0,0,1-.27-9.3c.2-1.21.46-2.55.73-3.52h0l.39.16A24.63,24.63,0,0,0,30.33,20Z"/>
			<path style={{ fill: 'none', stroke: '#fff', strokeLinecap: 'round', strokeLinejoin: 'round' }} d="M18.87,29.44a3.14,3.14,0,0,1-2.6,1.19,3.15,3.15,0,0,1-2.63-1.23"/>
			<path style={{ fill: 'none', stroke: '#fff', strokeLinecap: 'round', strokeLinejoin: 'round' }} d="M27.8,29.44a3.14,3.14,0,0,1-2.6,1.19,3.15,3.15,0,0,1-2.63-1.23"/>
			<path style={{ fill: 'none', stroke: '#fff', strokeLinecap: 'round', strokeLinejoin: 'round' }} d="M16.85,38.13a4.7,4.7,0,0,1,3.85-1.76,4.65,4.65,0,0,1,3.89,1.82"/>
			</svg>
		)

	}

	return (

		iconName === 'business' ? (
			test()
		) : (
			<img alt="" width="60px" height="auto" className={ styles.icon } src={ renderIcon(iconName) } />
		)

	)

}

export default Icon;