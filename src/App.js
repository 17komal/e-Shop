import ItemList from './component/items-list/items-list.component';
import './style/main.style.scss';

const App = () => {
  const Items = [
    {
      id: 1,
      title: "Women",
      imgUrl :"https://images.pexels.com/photos/974911/pexels-photo-974911.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      id: 2,
      title: "Men",
      imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSnKVS3fJXWce782tZbbPeRO0EMFopAHno22Q&usqp=CAU',
    },
    {
      id: 3,
      title: "Kids",
      imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9YjI6QvlTX8IOMPyj9u4FPSZEQg9glPYiiw&usqp=CAU',
     
    },
    {
      id: 4,
      title: "Mobiles & Laptops",
      imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQaT09UzNzBCuxt9hV0OOTVbpbljMD2XvolkA&usqp=CAU',
    },
    {
      id: 5,
      title: "Home appliances",
      imgUrl: 'https://images.pexels.com/photos/1370082/pexels-photo-1370082.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 6,
      title: "Watches",
      imgUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTg9Ff-AWXPTAOaW4VJmPxtkJ0bWizI36ErLg&usqp=CAU',
    },
  ]
  return (
   <ItemList items={Items}/>
  );
}

export default App;
