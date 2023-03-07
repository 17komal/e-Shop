import Items from "../items/items.component";
import './items-list.style.scss';
const ItemList = ({items}) => {
    return(
        <div className="main_container">
        {items.map((item) => (
         <Items key={item.id} item={item} />
        )) }
  
  
      </div>
    );
};
 export default ItemList;