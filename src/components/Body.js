import { useState, useEffect } from "react";
// import restaurantList  from "../constants";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./Shimmer";
import { filterData } from "../utils/helper";
import useOnline from "../utils/useOnline";




const Body = () => {
    //react state variable
    const [searchTxt, setSearchTxt] = useState("");
    const [allRestaurants, setAllRestaurants] = useState();
    const [filteredRestaurants, setFilteredRestaurants] = useState();

    //empty dependancy array => once after render
    //dependency array [searchTxt] => once after initial render + everytime as the dependency changes
    useEffect(()=>{
        //make api call
        getRestaurants();
    }, []);
    
    async function getRestaurants(){
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=15.3647083&lng=75.1239547&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setAllRestaurants(json?.data?.cards[2]?.data?.data);
        setFilteredRestaurants(json?.data?.cards[2]?.data?.data);
        // console.log(filteredRestaurants?.cards.length);
    }

    //check if online or offline
    const isOnline = useOnline();
    if(!isOnline){
        return <h1>Please check your connection</h1>;
    }
    //early return when empty i.e. do no render the component
    // if(!allRestaurants) return null;
    if(allRestaurants === undefined) {
        return <Shimmer />;
    }

    //if no filtered restaurants
    // if (filteredRestaurants.cards.length === 0) {
    //     return (
    //         <Shimmer/>
    //          <h2>No restaurant matches your filter!!!</h2>
    //     );
    // }
      

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
                    const data = filterData(searchTxt, allRestaurants);
                    setFilteredRestaurants(data);
                }}>Search</button>
            </div>
            
            <div className="restaurant-list">
                {filteredRestaurants?.cards.map((card) => (
                    <RestaurantCard key = {card.data.id} {...card.data} />
                ))}

                {filteredRestaurants.cards.length==0 && <h2>No restaurant matches your filter!!!</h2>}

                {/* other ways */}
                {/* {restaurantList[1].cards.map(RestaurantCard)}
                <RestaurantCard {...restaurantList[1].cards[0]}/>
                {RestaurantCard (...restaurantList[1].cards[1])} */}
            </div>
        </>
    );
};

export default Body;