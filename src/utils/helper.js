export function filterData(searchTxt, allRestaurants){
    const filteredRestaurants = allRestaurants.cards.filter((restaurant) =>{
        return restaurant.data.name.toLowerCase().includes(searchTxt.toLowerCase())
    });
    return {cards: filteredRestaurants}
}