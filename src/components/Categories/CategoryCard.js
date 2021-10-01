const CategoryCard = ({ categoryName, updateCurrentView }) => {

	return (

		<>
			<li onClick={ () => updateCurrentView('/stories') }>
				<img src='/img/placeholder.png' alt='' />
				<p>{categoryName}</p>
			</li>
		</>

	)

}

export default CategoryCard;