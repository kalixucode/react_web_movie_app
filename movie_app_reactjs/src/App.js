import React from 'react';
import PropTypes from "prop-types";
const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "http://aeriskitchen.com/wp-content/uploads/2008/09/kimchi_bokkeumbap_02-.jpg",
    rating: 5
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://3.bp.blogspot.com/-hKwIBxIVcQw/WfsewX3fhJI/AAAAAAAAALk/yHxnxFXcfx4ZKSfHS_RQNKjw3bAC03AnACLcBGAs/s400/DSC07624.jpg",
    rating: 4.2
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "http://cdn-image.myrecipes.com/sites/default/files/styles/4_3_horizontal_-_1200x900/public/image/recipes/ck/12/03/bibimbop-ck-x.jpg?itok=RoXlp6Xb",
    rating: 3.1
  },
  {
    id: 4,
    name: "Doncasu",
    image:
      "https://s3-media3.fl.yelpcdn.com/bphoto/7F9eTTQ_yxaWIRytAu5feA/ls.jpg",
    rating: 4.5
  },
  {
    id: 5,
    name: "Kimbap",
    image:
      "http://cdn2.koreanbapsang.com/wp-content/uploads/2012/05/DSC_1238r-e1454170512295.jpg",
    rating: 4.1
  }
];


function Food({ name, picture, rating }) {
  return (
    <div>
      <h2>I like {name}</h2>
      <h4>{rating}/5.0</h4>
      <img src={picture} />
    </div>
  )
}

Food.propTypes = {
  name : PropTypes.string.isRequired,
  picture : PropTypes.string.isRequired,
  rating : PropTypes.number.isRequired,
}
//propTypes로 array, boolean, true, false, object etc 체크 가능!
//isRequired : components가 반드시 있어야하 하는지...없으면 undefined 가능!
//https://ko.reactjs.org/docs/typechecking-with-proptypes.html


// function renderFood(item) {
//   console.log(item);
//   return <Food name= {item.name} picture={item.image}/>
// }
function App() {
  return (
    <div>
      {foodILike.map(item => <Food key={item.id} name={item.name} picture={item.image} rating={item.rating} />)}
      {/* {foodILike.map(renderFood)} */}
    </div>
  );
}
// key : react의 모든 element들은 다르게 보일 필요가 있음
export default App;



