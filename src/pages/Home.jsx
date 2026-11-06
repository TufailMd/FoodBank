import SearchBar from '../components/search/SearchBar';
import FilterBar from '../components/filters/FilterBar';
import RestaurantList from '../components/restaurant/RestaurantList';
import Loading from '../components/feedback/Loading';
import ErrorMessage from '../components/feedback/ErrorMessage';
import { filterRestaurants } from '../utils/filterHelpers';

export default function Home({
  restaurants,
  search,
  onSearchChange,
  filter,
  onFilterChange,
  loading,
  error,
  onRetry,
}) {
  const filtered = filterRestaurants(restaurants, search, filter);

  return (
    <main className="pt-16 min-h-screen bg-background">

      <section className="bg-gradient-to-br from-primary-container to-primary py-16 md:py-20 px-gutter">
        <div className="max-w-app mx-auto flex flex-col items-center text-center gap-6">
          <h1
            className="text-headline-lg-mobile md:text-headline-lg font-bold text-on-primary"
            style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
          >
            Discover the best food &amp; drinks
          </h1>
          <p className="text-body-lg text-primary-fixed opacity-90 max-w-md">
            Order from hundreds of restaurants right to your doorstep.
          </p>
          <div className="w-full">
            <SearchBar value={search} onChange={onSearchChange} />
          </div>
        </div>
      </section>

      <section className="max-w-app mx-auto px-gutter py-lg">

        <div className="mb-md">
          <FilterBar filter={filter} onFilterChange={onFilterChange} />
        </div>

        {loading ? (
          <Loading message="Loading restaurants..." />
        ) : error ? (
          <ErrorMessage message={error} onRetry={onRetry} />
        ) : (
          <RestaurantList restaurants={filtered} />
        )}

      </section>
    </main>
  );
}
