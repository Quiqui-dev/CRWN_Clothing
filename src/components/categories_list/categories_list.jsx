import CategoryItem from "../category_item/category_item";
import "./categories_list.scss"

const CategoriesList = ({categories}) => {

    return (
    <div className='categories-container'>
      {categories.map((category) => {
        return (
          <CategoryItem key={category.id} category={category}/>
        );
      })}
    </div>
    );
}

export default CategoriesList;