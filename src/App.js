import React from 'react';
import PropTypes from "prop-types";

function Food({ name, picture, rating }) {
  return (
    <div>
      <h1>I like {name}</h1>
      <img src={picture}></img>
      <h4>{rating} / 5.0</h4>
    </div>
  )
}

Food.propTypes = {
  name: PropTypes.string.isRequired,
  picture: PropTypes.string,
  rating: PropTypes.number.isRequired
};

const foodILike = [
  {
    id: 1,
    name: "Kimchi",
    image:
      "https://search.naver.com/search.naver?where=image&sm=tab_jum&query=%EA%B9%80%EC%B9%98#",
    rating: 5
  },
  {
    id: 2,
    name: "Samgyeopsal",
    image:
      "https://search.naver.com/search.naver?sm=tab_hty.top&where=image&query=%EC%82%BC%EA%B2%B9%EC%82%B4&oquery=%EA%B9%80%EC%B9%98&tqi=UWyzGlprvmssse4HmxZssssstTl-074716#",
    rating: 4.9
  },
  {
    id: 3,
    name: "Bibimbap",
    image:
      "https://search.naver.com/search.naver?sm=tab_hty.top&where=image&query=%EB%B9%84%EB%B9%94%EB%B0%A5&oquery=%EC%82%BC%EA%B2%B9%EC%82%B4&tqi=UWy0vsprvTVss7owxC4ssssstyK-115328#",
    rating: 3
  }
];

// function renderFood(dish) {
//   return <Food name={dish.name} picture={dish.image} />
// }

function App() {
  return (
    <div className="App">
      <h1>Hello</h1>
      {foodILike.map(dish => (
        <Food key={dish.id} name={dish.name} picture={dish.image} rating={dish.rating} />
      ))}
    </div>
  );
}

export default App;
