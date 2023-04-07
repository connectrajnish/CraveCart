import { useState, useEffect } from "react";
// import restaurantList  from "../constants";
import RestaurantCard from "./RestaurantCard"


function filterData(searchTxt, restaurants){
    const filteredRestaurants = restaurants.cards.filter((restaurant) =>{
        return restaurant.data.name.toLowerCase().includes(searchTxt.toLowerCase())
    });
    return {cards: filteredRestaurants}
}

const Body = () => {

    //react state variable
    const [searchTxt, setSearchTxt] = useState("");
    const [restaurants, setRestaurant] = useState();

    //empty dependancy array => once after render
    //dependency array [searchTxt] => once after initial render + everytime as the dependency changes
    useEffect(()=>{
        //make api call
        getRestaurants();
    }, []);
    
    async function getRestaurants(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=15.3647083&lng=75.1239547&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setRestaurant(json?.data?.cards[2]?.data?.data);
    }

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
                    const data = filterData(searchTxt, restaurants);
                    setRestaurant(data);
                }}>Search</button>
            </div>
            
            <div className="restaurant-list">
                {restaurants?.cards.map((card) => (
                    <RestaurantCard key = {card.data.id} {...card.data} />
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