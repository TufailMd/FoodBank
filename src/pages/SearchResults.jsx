import { useLocation } from 'react-router-dom';
import RestaurantList from '../components/restaurant/RestaurantList';
import { filterRestaurants } from '../utils/filterHelpers';

export default function SearchResults({ restaurants }) {
  const { search: queryString } = useLocation();
  const params = new URLSearchParams(queryString);
  const query = params.get('q') || '';

  const filtered = filterRestaurants(restaurants, query, '');

  return (
    <main className="pt-16 min-h-screen bg-background">
      <div className="max-w-app mx-auto px-gutter py-lg">

        <div className="mb-md">
          <h1
            className="text-headline-lg-mobile font-bold text-on-surface"
            style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
          >
            {query
              ? `Results for "${query}"`
              : 'All Restaurants'}
          </h1>
          <p className="text-label-md text-on-surface-variant mt-1">
            {filtered.length} restaurant{filtered.length !== 1 ? 's' : ''} found
          </p>
        </div>

        <RestaurantList restaurants={filtered} />
      </div>
    </main>
  );
}
