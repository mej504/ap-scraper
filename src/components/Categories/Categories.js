import styles from './categories.module.scss';

import CategoryCard from './CategoryCard';

const Categories = ({ availableCategories, updateCurrentView }) => {

	return (
		<div className={ styles.categoriesContainer }>

			<ul className={ styles.categories }>

				{availableCategories.map((cat, i) => {
					return (
						<CategoryCard updateCurrentView={ updateCurrentView } categoryName={ cat } key={i} />
					)
				})}

			</ul>

		</div>
	)

}

export default Categories;