import styles from './icon.module.scss';

const Icon = ({ iconName }) => {

	const renderIcon = ( iconName ) => {

		switch(iconName) {
			case 'us-news':
				return USNews();
			case 'politics':
				return Politics();
			case 'world-news':
				return World();
			case 'religion':
				return Religion();
			case 'entertainment':
				return Entertainment();
			case 'business':
				return Business();
			case 'science':
				return Science();
			default:
				return World();
		}

	}

	const Religion = () => (

		<>
			<rect className={ styles.svgPurple } width="156" height="156" rx="44.2"/>
			<path className={styles.svgWhite} d="M90.18,52.09h8.6V74.23a1.65,1.65,0,0,0,.86,1.43,1.56,1.56,0,0,0,.76.19h10.19a1.72,1.72,0,0,0,.81-.21,1.63,1.63,0,0,0,.82-1.41V52.09h8.6a1.64,1.64,0,0,0,1.15-.48,1.61,1.61,0,0,0,.47-1.14V40.3a1.68,1.68,0,0,0-.2-.78,1.61,1.61,0,0,0-1.42-.85h-8.6V30.08a1.61,1.61,0,0,0-1.61-1.61H100.39a1.61,1.61,0,0,0-1.61,1.61v8.59h-8.6a1.61,1.61,0,0,0-1.61,1.61v10.2A1.61,1.61,0,0,0,90.18,52.09Zm20.43-10.2h8.61v7h-8.61A1.61,1.61,0,0,0,109,50.48V72.63h-7V50.48a1.61,1.61,0,0,0-1.61-1.61h-8.6v-7h8.6A1.61,1.61,0,0,0,102,40.28V31.69h7v8.59A1.61,1.61,0,0,0,110.61,41.89Z"/>
			<path className={styles.svgWhite} d="M119.35,105.08l5.6-9.69a1.56,1.56,0,0,0-1.35-2.32H112.44l-5.59-9.67a1.54,1.54,0,0,0-1.75-.72,1.48,1.48,0,0,0-.94.74l-5.58,9.67H87.41a1.57,1.57,0,0,0-1.35.78,1.54,1.54,0,0,0,0,1.54l5.58,9.66-5.58,9.65a1.7,1.7,0,0,0-.21.8,1.56,1.56,0,0,0,1.55,1.55H98.59l5.58,9.68a1.55,1.55,0,0,0,2.68,0l5.57-9.68h10.9a1.55,1.55,0,0,0,1.6-2.33Zm-9.18,9.69-4.66,8.11-4.68-8.11a1.48,1.48,0,0,0-.23-.3,1.55,1.55,0,0,0-1.13-.49H90.09l4.69-8.11a1.63,1.63,0,0,0,.21-.79,1.6,1.6,0,0,0-.21-.78L90.1,96.2h9.38a1.56,1.56,0,0,0,1.34-.78l4.69-8.14,4.7,8.13a1.53,1.53,0,0,0,1.34.77h9.37l-4.7,8.14a1.62,1.62,0,0,0-.2.78,1.59,1.59,0,0,0,.2.78L120.9,114h-9.34a1.32,1.32,0,0,0-.38,0A1.62,1.62,0,0,0,110.17,114.77Zm.65.38Z"/>
			<path className={styles.svgWhite} d="M42.94,94.72a5.87,5.87,0,0,0-3.81,1.37l-.45.39a6.46,6.46,0,0,0-1,1.39,5.94,5.94,0,0,0-.72,2.9,6,6,0,0,0,6,6h0a6,6,0,0,0,3.21-.9,6.48,6.48,0,0,0,1-.83l.4-.41a6,6,0,0,0-.37-8.19A6.13,6.13,0,0,0,42.94,94.72Zm1.93,8a3.14,3.14,0,0,1-.47.4,2.74,2.74,0,0,1-1.45.38,2.63,2.63,0,0,1-2.14-1,2.5,2.5,0,0,1-.57-1.42,2.65,2.65,0,0,1,.31-1.56,2.89,2.89,0,0,1,.43-.6l.24-.21A2.55,2.55,0,0,1,43,98h0a2.65,2.65,0,0,1,2.17,1,2.46,2.46,0,0,1,.55,1.4,2.57,2.57,0,0,1-.57,2C45.06,102.52,45,102.58,44.87,102.7Z"/>
			<path className={styles.svgWhite} d="M30.87,100.76a10.76,10.76,0,0,0,3.53,8.58,11.75,11.75,0,0,0,8.6,3.5,11.61,11.61,0,0,0,8.07-3.1c.12-.11.25-.22.39-.36a9.16,9.16,0,0,1,6.31-2.61,8.78,8.78,0,0,1,6.82,14.35,1.79,1.79,0,0,0-.39,1.73,1.67,1.67,0,0,0,1.57,1.1,1.65,1.65,0,0,0,1.21-.53,22.48,22.48,0,0,0-.67-31.21,21.81,21.81,0,0,0-15.85-6.6h-.1c-5,0-9.74,1.27-13.43,4.4C32.55,93.72,31.11,97.31,30.87,100.76ZM64,94.55a18.71,18.71,0,0,1,5.66,13.63,19.79,19.79,0,0,1-.33,3.64,12.24,12.24,0,0,0-11.54-8.36h0A12.46,12.46,0,0,0,49.16,107l-.3.28A8.31,8.31,0,0,1,43,109.53H42.9A8.36,8.36,0,0,1,36.73,107a9.06,9.06,0,0,1-2.49-6.62C34.18,97.55,37,94,38.93,92.65a18.18,18.18,0,0,1,12.72-4.07A19.28,19.28,0,0,1,64,94.55Z"/>
			<path className={styles.svgWhite} d="M57.77,109.53a5.79,5.79,0,0,0-3.85,1.4,5.4,5.4,0,0,0-.48.44c-.13.14-.25.29-.28.33a6.05,6.05,0,0,0,4.61,9.94h0A5.93,5.93,0,0,0,62,119.92l.15-.18.25-.27a6,6,0,0,0,1.45-3.91,6.11,6.11,0,0,0-6.07-6Zm2.13,7.76a1.07,1.07,0,0,1-.18.19,1.4,1.4,0,0,0-.17.2,2.51,2.51,0,0,1-1.76.65,2.62,2.62,0,0,1-2-.83,2.55,2.55,0,0,1-.79-1.91,2.64,2.64,0,0,1,.7-1.82l.09-.11h0a2.4,2.4,0,0,1,.23-.21,2.51,2.51,0,0,1,1.72-.62,2.8,2.8,0,0,1,2.76,2.72A2.56,2.56,0,0,1,59.9,117.29Z"/>
			<path className={styles.svgWhite} d="M53.23,37.46l-.33.06-.14,0a1.35,1.35,0,0,0,.16,2.69A12,12,0,1,1,40.46,53.9c-.05-.4-.09-.8-.1-1.19a1.36,1.36,0,0,0-2.69-.18,18.3,18.3,0,0,0,18,21.36A18.72,18.72,0,0,0,62,72.8a18.31,18.31,0,0,0-8.73-35.34Zm-11.53,25a14.79,14.79,0,0,0,12.7,4.46A14.77,14.77,0,0,0,67,50.27a14.81,14.81,0,0,0-4.42-8.66A15.58,15.58,0,1,1,41.7,62.43Z"/>
			<path className={styles.svgWhite} d="M37.54,48.28a1.52,1.52,0,0,1-.51-.09,1.44,1.44,0,0,1-.92-1.2l-.46-4.61-4.06-2.23a1.43,1.43,0,0,1,.11-2.56L36,35.73l.87-4.55a1.4,1.4,0,0,1,1-1.11,1.44,1.44,0,0,1,1.44.42L42.37,34,47,33.37a1.44,1.44,0,0,1,1.37.63,1.42,1.42,0,0,1,0,1.51l-2.33,4,2,4.19a1.43,1.43,0,0,1-1.6,2l-4.52-1-3.38,3.17A1.44,1.44,0,0,1,37.54,48.28ZM34.7,39l2.65,1.45a1.42,1.42,0,0,1,.73,1.11l.3,3,2.21-2.07a1.45,1.45,0,0,1,1.27-.36l3,.65-1.29-2.74a1.43,1.43,0,0,1,.07-1.33l1.52-2.6-3,.37A1.41,1.41,0,0,1,40.88,36l-2-2.26-.56,3a1.44,1.44,0,0,1-.83,1Zm7.6,5.32Zm4.64-1.07h0Zm-10.79-.61ZM45.76,40h0Zm0-1h0Zm-9.95-2.71Zm10.37-2Zm-8.8-2.09h0Z"/>
		</>

	)

	const USNews = () => (

		<>
			<rect className={ styles.svgPurple } width="156" height="156" rx="44.2"/>
			<path className={styles.svgWhite} d="M128.33,54.4h-58a2.5,2.5,0,0,1,0-5h58a2.5,2.5,0,0,1,0,5Z"/>
			<path className={styles.svgWhite} d="M128.33,72.78h-58a2.5,2.5,0,0,1,0-5h58a2.5,2.5,0,0,1,0,5Z"/>
			<path className={styles.svgWhite} d="M128.33,91.17h-99a2.5,2.5,0,0,1,0-5h99a2.5,2.5,0,0,1,0,5Z"/>
			<path className={styles.svgWhite} d="M128.33,109.56h-99a2.5,2.5,0,0,1,0-5h99a2.5,2.5,0,0,1,0,5Z"/>
			<rect className={styles.svgWhite} x="27.67" y="48.94" width="32.17" height="24.57" rx="5.54"/>'
		</>

	)

	const Politics = () => (
		<>
			<rect className={ styles.svgPurple } width="156" height="156" rx="44.17"/>
			<path className={ styles.svgWhite } d="M127.4,71.38H106.69a0,0,0,0,1,0,0V66.58a1.59,1.59,0,0,0-1.07-1.5l-26-9.2s0,0,0,0v-6a.05.05,0,0,1,0,0c3.14-2.14,5.88-1.17,9-.05A17,17,0,0,0,94.11,51a7.77,7.77,0,0,0,5.71-2.51,1.55,1.55,0,0,0,.44-1.1V36.22a1.56,1.56,0,0,0-2.66-1.1c-2.45,2.44-4.77,1.62-8,.48-3-1.05-6.33-2.23-10-.6a0,0,0,0,1-.06,0V33.15a1.65,1.65,0,0,0-1.32-1.67A1.56,1.56,0,0,0,76.39,33V55.84s0,0,0,0l-26,9.2a1.59,1.59,0,0,0-1.07,1.5v4.76a0,0,0,0,1,0,0H28.49a1.6,1.6,0,0,0-1.6,1.6v40.64a1.6,1.6,0,0,0,1.6,1.6H49.2a0,0,0,0,1,0,0v1.55a1.6,1.6,0,0,0,1.6,1.6h54.21a1.6,1.6,0,0,0,1.6-1.6v-1.55a0,0,0,0,1,0,0H127.4a1.6,1.6,0,0,0,1.6-1.6V73A1.6,1.6,0,0,0,127.4,71.38ZM88.56,38.54c2.62.93,5.55,2,8.53.68a0,0,0,0,1,0,0v7.44a.06.06,0,0,1,0,0c-2.28,1.9-4.49,1.12-7.53.05a18.6,18.6,0,0,0-6.21-1.41,9.4,9.4,0,0,0-3.83.81,0,0,0,0,1-.06,0V38.63a.08.08,0,0,1,0,0C82.66,36.45,85.4,37.42,88.56,38.54Zm9.9,28.05h-41a.35.35,0,0,1-.12-.68l20.52-7.24a.31.31,0,0,1,.23,0l20.52,7.24A.35.35,0,0,1,98.46,66.59Zm5.07,44.77v3a.93.93,0,0,1-.93.93H53.29a.93.93,0,0,1-.93-.93v-3a.93.93,0,0,1,.93-.93H102.6A.93.93,0,0,1,103.53,111.36ZM50.84,79.29H54a0,0,0,0,1,0,0v27.94a0,0,0,0,1,0,0H50.84a1.6,1.6,0,0,0-1.6,1.6v3.14a0,0,0,0,1,0,0H30.05a0,0,0,0,1-.05,0V74.54a0,0,0,0,1,.05,0H49.2a0,0,0,0,1,0,0v3.15A1.6,1.6,0,0,0,50.84,79.29Zm6.31,28V79.33a0,0,0,0,1,0,0h3.19a0,0,0,0,1,0,0v27.94a0,0,0,0,1,0,0H57.19A0,0,0,0,1,57.15,107.27Zm6.39,0V79.33a0,0,0,0,1,0,0h9.57a0,0,0,0,1,0,0v27.94a0,0,0,0,1,0,0H63.58A0,0,0,0,1,63.54,107.27Zm12.77,0V79.33a0,0,0,0,1,0,0h3.19a0,0,0,0,1,0,0v27.94a0,0,0,0,1,0,0H76.35A0,0,0,0,1,76.31,107.27Zm6.39,0V79.33a0,0,0,0,1,0,0h9.57a0,0,0,0,1,0,0v27.94a0,0,0,0,1,0,0H82.74A0,0,0,0,1,82.7,107.27Zm12.77,0V79.33a0,0,0,0,1,0,0H98.7a0,0,0,0,1,0,0v27.94a0,0,0,0,1,0,0H95.51A0,0,0,0,1,95.47,107.27Zm8.06-36.21v3.76a1.35,1.35,0,0,1-1.35,1.35H53.71a1.35,1.35,0,0,1-1.35-1.35V71.06a1.36,1.36,0,0,1,1.35-1.35h48.47A1.36,1.36,0,0,1,103.53,71.06Zm1.52,36.26H101.9a0,0,0,0,1,0,0V79.33a0,0,0,0,1,0,0h3.15a1.6,1.6,0,0,0,1.6-1.6V74.54a0,0,0,0,1,0,0h19.15a0,0,0,0,1,0,0v37.52a0,0,0,0,1,0,0H106.69a0,0,0,0,1,0,0v-3.14A1.6,1.6,0,0,0,105.05,107.32Z"/>
		</>
	)

	const Entertainment = () => (
		<>
			<rect className={styles.svgPurple} width="156" height="156" rx="44.17"/>
			<path className={styles.svgWhite} d="M90.64,67.58a11.43,11.43,0,0,1-4.81-1.1A1.35,1.35,0,0,1,87,64a7.39,7.39,0,0,0,6.65.12A1.35,1.35,0,0,1,95,66.49,8.73,8.73,0,0,1,90.64,67.58Z"/>
			<path className={styles.svgWhite} d="M112.89,78a11.42,11.42,0,0,1-4.8-1.1,10,10,0,0,1-5.88-7.17,1.35,1.35,0,0,1,2.67-.41,8.12,8.12,0,0,0,11,5.25,1.35,1.35,0,1,1,1.34,2.34A8.67,8.67,0,0,1,112.89,78Z"/>
			<path className={styles.svgWhite} d="M93.8,94.6A16.31,16.31,0,0,1,87,93a16.63,16.63,0,0,1-3.73-2.4,1.35,1.35,0,0,1,1.75-2,13.69,13.69,0,0,0,3.13,2c3.63,1.71,7.62,1.77,10.42.16a1.35,1.35,0,0,1,1.35,2.34A12.22,12.22,0,0,1,93.8,94.6Z"/>
			<path className={styles.svgWhite} d="M134,55.61A68.91,68.91,0,0,1,85.6,32.88a2,2,0,0,0-1.29-.65,2,2,0,0,0-1.49.45,1.75,1.75,0,0,0-.23.24,98.3,98.3,0,0,0-6,8.1c-1.16,1.68-4.81,7.68-6.21,10.1a66.17,66.17,0,0,1-43.61-2.69L25.65,48l-.15,0A2,2,0,0,0,23,49.19l0,.1a101.05,101.05,0,0,0-2,9.9,66.77,66.77,0,0,0,.76,26.4c6.88,29.06,29.09,37.61,30,38a2.1,2.1,0,0,0,1.4,0c.63-.24,11-4.24,19.81-15.82a62.36,62.36,0,0,0,4.18,4.64,2,2,0,0,0,1.23.58s.57,0,1.53,0c5.65,0,25.8-1.51,41.8-21.64a66.78,66.78,0,0,0,11.91-23.58c1.16-4.13,2-7.43,2.37-9.83,0-.11,0-.22,0-.34A2,2,0,0,0,134,55.61ZM52.39,119.5c-3.7-1.66-21.11-10.64-26.84-34.83a62.63,62.63,0,0,1-.7-24.83c.47-2.88.94-5.32,1.39-7.28a70.17,70.17,0,0,0,52.3,0c.46,2,.94,4.51,1.43,7.48A62.33,62.33,0,0,1,78.9,86C72.87,109.18,56,117.87,52.39,119.5ZM129.7,66.69a62.9,62.9,0,0,1-11.19,22.18C103,108.36,83.44,109.08,79.41,109c-.47-.54-3.17-3.4-4.11-4.72A59.13,59.13,0,0,0,82.77,87a66.21,66.21,0,0,0,1.14-27.62,102,102,0,0,0-2.06-10.1A2.05,2.05,0,0,0,81,48.11,2,2,0,0,0,79.13,48l-1.07.46h0c-.63.27-1.28.51-1.92.75,1.44-2.37,3-4.93,3.69-5.9,1.64-2.38,3.13-4.42,4.38-6a73,73,0,0,0,47.33,22.22C131.11,61.45,130.5,63.86,129.7,66.69Z"/>
			<path className={styles.svgWhite} d="M40.13,81a10,10,0,0,1-8.36-4A1.35,1.35,0,0,1,34,75.55a7.41,7.41,0,0,0,6.12,2.79,7.37,7.37,0,0,0,6.06-2.71,1.35,1.35,0,1,1,2.22,1.54A10.08,10.08,0,0,1,40.13,81Z"/>
			<path className={styles.svgWhite} d="M64.72,81a10,10,0,0,1-8.36-4,1.35,1.35,0,0,1,2.24-1.5,7.39,7.39,0,0,0,6.12,2.79,7.37,7.37,0,0,0,6.06-2.71A1.35,1.35,0,1,1,73,77.17,10.08,10.08,0,0,1,64.72,81Z"/>
			<path className={styles.svgWhite} d="M63.05,101.84a1.35,1.35,0,0,1-1.13-.6c-1.82-2.72-5.49-4.41-9.58-4.41s-7.65,1.64-9.5,4.29a1.35,1.35,0,1,1-2.21-1.55c2.34-3.36,6.83-5.44,11.71-5.44s9.51,2.15,11.83,5.61a1.35,1.35,0,0,1-1.12,2.1Z"/>
		</>

	)

	const Business = () => (
		<>
			<rect className={styles.svgPurple} width="156" height="156" rx="44.17"/>
			<path className={styles.svgWhite} d="M62.42,72.79a3.51,3.51,0,0,0-3.51,3.5v28.2A3.51,3.51,0,0,0,62.42,108h9.2a3.51,3.51,0,0,0,3.5-3.51V76.29a3.5,3.5,0,0,0-3.5-3.5Zm9.7,3.5v28.2a.5.5,0,0,1-.5.51h-9.2a.51.51,0,0,1-.51-.51V76.29a.5.5,0,0,1,.51-.5h9.2A.5.5,0,0,1,72.12,76.29Z"/>
			<path className={styles.svgWhite} d="M84.27,85.49A3.51,3.51,0,0,0,80.77,89v15.49a3.51,3.51,0,0,0,3.5,3.51h9.2A3.51,3.51,0,0,0,97,104.49V89a3.51,3.51,0,0,0-3.51-3.51ZM94,89v15.49a.51.51,0,0,1-.51.51h-9.2a.5.5,0,0,1-.5-.51V89a.5.5,0,0,1,.5-.51h9.2A.51.51,0,0,1,94,89Z"/>
			<path className={styles.svgWhite} d="M106.13,65.51A3.51,3.51,0,0,0,102.62,69v35.47a3.51,3.51,0,0,0,3.51,3.51h9.2a3.51,3.51,0,0,0,3.5-3.51V69a3.51,3.51,0,0,0-3.5-3.51Zm9.7,3.51v35.47a.5.5,0,0,1-.5.51h-9.2a.51.51,0,0,1-.51-.51V69a.51.51,0,0,1,.51-.51h9.2A.5.5,0,0,1,115.83,69Z"/>
			<path className={styles.svgWhite} d="M40.56,108h9.2c2,0,3.51-1.87,3.51-4.25V95.89c0-2.38-1.54-4.25-3.51-4.25h-9.2c-2,0-3.5,1.87-3.5,4.25v7.86C37.06,106.13,38.6,108,40.56,108Zm-.5-12.11a1.42,1.42,0,0,1,.5-1.25h9.2c.12,0,.51.45.51,1.25v7.86a1.4,1.4,0,0,1-.51,1.25h-9.2a1.42,1.42,0,0,1-.5-1.25Z"/>
			<path className={styles.svgWhite} d="M45.16,68.64a6.74,6.74,0,0,0,6.73-6.73,6.6,6.6,0,0,0-.94-3.4L63.61,45.85a6.76,6.76,0,0,0,6.82,0L83.08,58.51a6.72,6.72,0,1,0,12.52,3.4,6.6,6.6,0,0,0-.94-3.4l12.66-12.66a6.76,6.76,0,1,0-2.38-2.38L92.28,56.13a6.76,6.76,0,0,0-6.82,0L72.81,43.47a6.73,6.73,0,1,0-12.52-3.41,6.66,6.66,0,0,0,.94,3.41L48.57,56.13a6.63,6.63,0,0,0-3.41-.94,6.73,6.73,0,0,0,0,13.45Zm62.21-28.58a3.36,3.36,0,1,1,3.36,3.36A3.37,3.37,0,0,1,107.37,40.06ZM85.51,61.91a3.36,3.36,0,1,1,3.36,3.36A3.37,3.37,0,0,1,85.51,61.91ZM67,36.7a3.36,3.36,0,1,1-3.36,3.36A3.37,3.37,0,0,1,67,36.7ZM41.8,61.91a3.36,3.36,0,1,1,3.36,3.36A3.37,3.37,0,0,1,41.8,61.91Z"/>
			<path className={styles.svgWhite} d="M120.33,119.81H35.56a2,2,0,0,0,0,4h84.77a2,2,0,0,0,0-4Z"/>
		</>

	)
	
	const World = () => (

		<>
			<rect className={styles.svgPurple} width="156" height="156" rx="44.17"/>
			<path className={styles.svgWhite} d="M77.94,26.89A51.06,51.06,0,1,0,129,77.94,51.11,51.11,0,0,0,77.94,26.89Zm8.92,52a3.21,3.21,0,0,1-3.21-3.21V73.49a3.21,3.21,0,0,1,3.21-3.21H98a5.72,5.72,0,0,0,5.71-5.71V62.34a3.21,3.21,0,0,1,3.21-3.21h14.13a46.87,46.87,0,0,1-2.25,42.09H100.24a3.48,3.48,0,0,0-3.48,3.48v2.23a1,1,0,0,1-1,1H77.94a3.21,3.21,0,0,1-3.21-3.21V98a3.21,3.21,0,0,1,3.21-3.21h8.92a7.94,7.94,0,0,0,0-15.88Zm-52-19.79H55.65a3.48,3.48,0,0,0,3.48-3.48V53.42a1,1,0,0,1,1-1H73.48a3.21,3.21,0,0,1,3.21,3.21v2.23a3.21,3.21,0,0,1-3.21,3.21H69a1.24,1.24,0,0,0-1.25,1.25V66.8A3.21,3.21,0,0,1,64.57,70H51.19a5.71,5.71,0,0,0-5.71,5.7v2.23a5.71,5.71,0,0,0,5.71,5.71h4.46a3.21,3.21,0,0,1,3.21,3.21v4.46a3.21,3.21,0,0,1-3.21,3.21H33.92a46.9,46.9,0,0,1,.91-35.4ZM77.94,125A47.11,47.11,0,0,1,35,97h20.7a5.72,5.72,0,0,0,5.71-5.71V86.86a5.73,5.73,0,0,0-5.71-5.71H51.19A3.21,3.21,0,0,1,48,77.94V75.71a3.21,3.21,0,0,1,3.21-3.2H64.57a5.73,5.73,0,0,0,5.71-5.71V63.59h3.2a5.72,5.72,0,0,0,5.71-5.71V55.65a5.71,5.71,0,0,0-5.71-5.71H60.11a3.48,3.48,0,0,0-3.48,3.48v2.23a1,1,0,0,1-1,1H36a47,47,0,0,1,83.85,0H106.93a5.71,5.71,0,0,0-5.71,5.71v2.23A3.21,3.21,0,0,1,98,67.78H86.86a5.72,5.72,0,0,0-5.71,5.71v2.22a5.72,5.72,0,0,0,5.71,5.71,5.44,5.44,0,0,1,0,10.88H77.94A5.72,5.72,0,0,0,72.23,98v6.69a5.72,5.72,0,0,0,5.71,5.71H95.78a3.48,3.48,0,0,0,3.48-3.48V104.7a1,1,0,0,1,1-1h17A47,47,0,0,1,77.94,125Z"/>
		</>

	)

	const Science = () => (
		<>
			<rect className={styles.svgPurple} width="156" height="156" rx="44.2"/>
			<path className={styles.svgWhite} d="M112.72,100.84a1.62,1.62,0,0,0-1.36-.73,1.58,1.58,0,0,0-.87.26,1.62,1.62,0,0,0-.48,2.23c5,7.76,6.07,12.42,4.84,13.59a2.59,2.59,0,0,1-1.82.54c-2.76,0-7.72-2.06-13.7-5.67a31.47,31.47,0,0,0,5.76-39c8.79-10.69,13.56-19.32,13.44-24.32a5,5,0,0,0-1.46-3.68,5.48,5.48,0,0,0-3.91-1.33c-4.81,0-12.58,3.69-22.49,10.67A1.64,1.64,0,0,0,90,54.45a1.61,1.61,0,0,0,1.59,1.88,1.63,1.63,0,0,0,.93-.29c9-6.35,16.7-10.14,20.58-10.14a2.51,2.51,0,0,1,1.74.49,2,2,0,0,1,.46,1.42c.09,3.93-4.42,11.9-12.09,21.41A31.17,31.17,0,0,0,88.38,58.28V47.49H89a1.61,1.61,0,0,0,1.61-1.61V37.75A1.61,1.61,0,0,0,89,36.14H66.81a1.61,1.61,0,0,0-1.61,1.61v8.13a1.61,1.61,0,0,0,1.61,1.61h.64V58.28a31.23,31.23,0,0,0-9.2,5.12l-.15.12a31.79,31.79,0,0,0-5.41,5.6c-.94-1.17-1.87-2.36-2.76-3.55a6.87,6.87,0,0,0-7.22-11.28c-2.31-4.69-2.34-7.15-1.56-7.9a2.48,2.48,0,0,1,1.71-.48c3.63,0,10.7,3.35,18.92,9a1.56,1.56,0,0,0,.91.29A1.62,1.62,0,0,0,64,54.44a1.59,1.59,0,0,0,.25-1.2,1.63,1.63,0,0,0-.67-1C54.53,46,47.34,42.74,42.82,42.74a5.47,5.47,0,0,0-3.89,1.32c-2.25,2.13-1.89,6.18,1.06,12a6.88,6.88,0,0,0,5,11.58,6.69,6.69,0,0,0,2.18-.36q1.74,2.33,3.62,4.64a31.46,31.46,0,0,0,5.76,39.2c-6,3.6-10.79,5.58-13.62,5.58a2.61,2.61,0,0,1-1.8-.52c-1.23-1.17-.21-5.83,4.84-13.59a1.62,1.62,0,0,0-.47-2.23,1.64,1.64,0,0,0-.88-.26,1.6,1.6,0,0,0-1.35.73c-5.9,9.08-7.33,14.86-4.36,17.69a5.5,5.5,0,0,0,3.91,1.33c3.77,0,9.26-2.22,16.3-6.59a31.43,31.43,0,0,0,37.62-.06c7.09,4.41,12.61,6.65,16.4,6.65a5.5,5.5,0,0,0,3.91-1.33C120,115.7,118.61,109.92,112.72,100.84ZM48.66,60.77a3.65,3.65,0,1,1-5.74-3A3.62,3.62,0,0,1,45,57.12,3.66,3.66,0,0,1,48.66,60.77ZM59.4,109.35A28.21,28.21,0,0,1,49.64,88,28.5,28.5,0,0,1,53,74.55,211.13,211.13,0,0,0,68.31,90.61c2.31,2.2,4.74,4.4,7.24,6.58A161.25,161.25,0,0,1,59.4,109.35ZM70.67,59.44V47.49H85.16V59.44A1.6,1.6,0,0,0,86.29,61a28.68,28.68,0,0,1,6.94,3.25l-.09.07a1.85,1.85,0,0,1-2.67,0,5,5,0,0,0-6.64,0,1.85,1.85,0,0,1-2.67,0,5,5,0,0,0-6.64,0,1.84,1.84,0,0,1-2.66,0,5,5,0,0,0-6.65,0,1.8,1.8,0,0,1-1.33.57,1.83,1.83,0,0,1-1.33-.57l0,0a28.4,28.4,0,0,1,7-3.3A1.61,1.61,0,0,0,70.67,59.44Zm-10.11,7.4a5,5,0,0,0,6.64,0,1.85,1.85,0,0,1,2.67,0,5,5,0,0,0,6.64,0,1.83,1.83,0,0,1,1.33-.57,1.8,1.8,0,0,1,1.33.57,5,5,0,0,0,6.64,0,1.83,1.83,0,0,1,1.34-.57,1.81,1.81,0,0,1,1.33.57,4.91,4.91,0,0,0,3.33,1.26,5,5,0,0,0,3.32-1.26,2.08,2.08,0,0,1,.94-.52,27.88,27.88,0,0,1,5,5.45c-2.21,2.63-4.64,5.35-7.23,8.08a6.81,6.81,0,0,0-4.15-1.4,6.89,6.89,0,0,0-6.88,6.88,6.81,6.81,0,0,0,1.38,4.12c-2.09,2-4.18,3.85-6.23,5.63-2.5-2.18-5-4.47-7.47-6.8A207.92,207.92,0,0,1,54.79,71.67a27.85,27.85,0,0,1,4.93-5.33A2.4,2.4,0,0,1,60.56,66.84ZM89.73,81.67a3.66,3.66,0,1,1-1.9,6.77.39.39,0,0,0-.08-.1,1.61,1.61,0,0,0-.52-.36,3.57,3.57,0,0,1-1.16-2.65A3.66,3.66,0,0,1,89.73,81.67Zm-3,9.84a6.87,6.87,0,0,0,9.87-6.18,6.79,6.79,0,0,0-.68-3c2.49-2.61,4.83-5.19,7-7.69a28.32,28.32,0,0,1-6.39,34.6,162.06,162.06,0,0,1-16-12.09C82.58,95.34,84.69,93.43,86.74,91.51Zm7.11,19.83a28.21,28.21,0,0,1-31.79,0A178.07,178.07,0,0,0,78,99.29,179.33,179.33,0,0,0,93.85,111.34Zm-6.44-72v4.91h-19V39.36Z"/>
		</>
	)

	return (

		<svg className={ styles.categorySVG } role="img" aria-label='' viewBox="0 0 156 156">

			{ renderIcon(iconName) }

		</svg>

	)

}

export default Icon;