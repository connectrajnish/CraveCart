const RestaurantCard = ({img, name, cuisines, rating}) => {
    return (
        <div className="card">
            <img src={img}/>
            <h2>{name}</h2>
            <h4>{cuisines.join(', ')}</h4>
            <h5>{rating} stars</h5>
        </div>
    );
};

export default RestaurantCard;