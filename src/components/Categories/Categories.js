import styles from './categories.module.scss';

import CategoryCard from './CategoryCard';

const Categories = ({ root, previousCategory, currentlyViewing, screenType, availableCategories, updateCurrentView }) => {

	return (
		<div className={ styles.categoriesContainer }>

			<ul className={ styles.categories }>

				{availableCategories.map((cat, i) => {
					return (
						<CategoryCard
							root={ root }
							previousCategory={ previousCategory }
							currentlyViewing={ currentlyViewing }
							screenType={ screenType }
							updateCurrentView={ updateCurrentView }
							categoryName={ cat.name }
							slug={ cat.slug }
							key={i}
						/>
					)
				})}

			</ul>

		</div>
	)

}

export default Categories;