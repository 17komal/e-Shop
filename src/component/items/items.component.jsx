import './items.style.scss';

const Items = ({item}) => {
    const { title,imgUrl} = item;
    return(
        <div className="sub_container" >
          <div className='container_background' style={{backgroundImage : `url(${imgUrl})` ,}}/>
          <div className="container_body" >
            <h2>{title}</h2>
            <p>Shop Now..</p>
          </div>
        </div>
    );
}
 export default Items;