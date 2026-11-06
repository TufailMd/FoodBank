import { useParams, Link } from 'react-router-dom';
import FoodList from '../components/food/FoodList';
import Loading from '../components/feedback/Loading';
import EmptyState from '../components/feedback/EmptyState';

export default function RestaurantDetails({
  restaurants,
  cart,
  onAdd,
  onIncrease,
  onDecrease,
  loading,
}) {
  const { id } = useParams();

  if (loading) {
    return (
      <main className="pt-16 min-h-screen bg-background flex items-center justify-center">
        <Loading message="Loading menu..." />
      </main>
    );
  }

  const restaurant = restaurants.find((r) => r.id === id);

  if (!restaurant) {
    return (
      <main className="pt-16 min-h-screen bg-background flex items-center justify-center">
        <EmptyState
          icon="search_off"
          title="Restaurant not found"
          message="We couldn't find this restaurant. It may have moved or been removed."
          ctaLabel="Back to Home"
          onCtaClick={() => window.history.back()}
        />
      </main>
    );
  }

  return (
    <main className="pt-16 min-h-screen bg-background">

      <div className="relative w-full h-64 md:h-80 overflow-hidden">
        <img
          src={restaurant.image}
          alt={restaurant.name}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/40 to-transparent" />

        <div className="absolute bottom-0 left-0 right-0 px-gutter pb-6 text-white">
          <div className="max-w-app mx-auto">
            <h1
              className="text-headline-lg-mobile md:text-headline-lg font-bold leading-tight"
              style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
            >
              {restaurant.name}
            </h1>
            <div className="flex flex-wrap items-center gap-x-4 gap-y-1 mt-2">
              <span className="inline-flex items-center gap-1 text-label-md font-semibold">
                <span
                  className="material-symbols-outlined text-amber-400"
                  style={{ fontSize: '17px', fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                {restaurant.rating}
              </span>
              <span className="text-label-md opacity-80">{restaurant.cuisine}</span>
              <span className="hidden sm:inline text-label-md opacity-50">•</span>
              <span className="text-label-md opacity-80">{restaurant.location}</span>
              <span className="hidden sm:inline text-label-md opacity-50">•</span>
              <span className="text-label-md opacity-80">
                &#8377;{restaurant.priceForTwo} for two
              </span>
            </div>
          </div>
        </div>
      </div>

      <section className="max-w-app mx-auto px-gutter py-lg">
        <div className="flex items-center justify-between mb-md">
          <h2
            className="text-headline-md font-bold text-on-surface"
            style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
          >
            Menu
          </h2>
          <Link
            to="/"
            className="inline-flex items-center gap-1 text-label-md text-primary hover:underline"
          >
            <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>
              arrow_back
            </span>
            All Restaurants
          </Link>
        </div>

        <FoodList
          menu={restaurant.menu}
          cart={cart}
          onAdd={onAdd}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
        />
      </section>

    </main>
  );
}
