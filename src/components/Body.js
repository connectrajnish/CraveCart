import { config } from "../constants";
import RestaurantCard from "./RestaurantCard"



const Body = () => {
    return (
        <div className="restaurant-list">
            {config[1].cards.map((card) => (
                <RestaurantCard key={card.id} {...card} />
            ))}



            {/* other ways */}
            {/* {config[1].cards.map(RestaurantCard)}
            <RestaurantCard {...config[1].cards[0]}/>
            {RestaurantCard (...config[1].cards[1])} */}
        </div>
    );
};

export default Body;