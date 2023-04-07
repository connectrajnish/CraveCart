import { useState } from "react";
import restaurantList  from "../constants";
import RestaurantCard from "./RestaurantCard"


function filterData(searchTxt, restaurants){
    const filteredRestaurants = restaurants[1].cards.filter((restaurant) =>{
        return restaurant.name.toLowerCase().includes(searchTxt.toLowerCase())
    });
    return [
        {},
        {
            cards: filteredRestaurants
        }
    ];
}

const Body = () => {

    //react state variable
    const [searchTxt, setSearchTxt] = useState("");
    const [restaurants, setRestaurant] = useState(restaurantList);

    return (
        <>
            <div className="search-container">
                <input
                    type="text"
                    className="search-input"
                    placeholder="Search"
                    value={searchTxt}
                    //normal variables can't be changed in react, so onChange function will callback
                    onChange={(e) => {
                        // whatever written in input it'll be passed to the searchTxt i.e. from parent to child
                        setSearchTxt(e.target.value);
                    }}
                />
                
                <button className="search-btn" onClick={()=>{
                    //onclick filter data and then update the restaurantList state variable
                    const data = filterData(searchTxt, restaurantList);
                    setRestaurant(data);
                }}>Search</button>
            </div>
            
            <div className="restaurant-list">
                {restaurants[1].cards.map((card) => (
                    <RestaurantCard key={card.id} {...card} />
                ))}



                {/* other ways */}
                {/* {restaurantList[1].cards.map(RestaurantCard)}
                <RestaurantCard {...restaurantList[1].cards[0]}/>
                {RestaurantCard (...restaurantList[1].cards[1])} */}
            </div>
        </>
    );
};

export default Body;