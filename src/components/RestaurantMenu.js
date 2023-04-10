import { useParams } from "react-router-dom";
const RestaurantMenu = () => {
    //reading params
    const params = useParams();
    const {id} = params;
    return (
        <div className="restaurant-menu">
            <h1>Gramin</h1>
            <h2>Id: {id}</h2>
        </div>
    );
};

export default RestaurantMenu;