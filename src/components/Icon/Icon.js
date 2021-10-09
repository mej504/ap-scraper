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

	return (

		<img className={ styles.icon } src={ renderIcon(iconName) } />

	)

}

export default Icon;