import RestaurantCard from './RestaurantCard';
import EmptyState from '../feedback/EmptyState';

export default function RestaurantList({ restaurants }) {
  if (restaurants.length === 0) {
    return (
      <EmptyState
        icon="search_off"
        title="No restaurants found"
        message="Try adjusting your search or filters to discover more options."
      />
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-gutter">
      {restaurants.map((restaurant) => (
        <RestaurantCard
          key={restaurant.id}
          id={restaurant.id}
          name={restaurant.name}
          rating={restaurant.rating}
          cuisine={restaurant.cuisine}
          location={restaurant.location}
          priceForTwo={restaurant.priceForTwo}
          image={restaurant.image}
        />
      ))}
    </div>
  );
}
