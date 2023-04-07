const RestaurantCard = ({cloudinaryImageId, name, cuisines, avgRating}) => {
    return (
        <div className="card">
            <img src={"https://res.cloudinary.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_508,h_320,c_fill/"+cloudinaryImageId}/>
            <h2>{name}</h2>
            <h5>{cuisines.join(', ')}</h5>
            <h5>{avgRating} stars</h5>
        </div>
    );
};

export default RestaurantCard;