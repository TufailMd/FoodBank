import { Link } from 'react-router-dom';

export default function RestaurantCard({
  id,
  name,
  rating,
  cuisine,
  location,
  priceForTwo,
  image,
}) {
  return (
    <article className="bg-surface-container-lowest rounded-xl overflow-hidden shadow-sm border border-outline-variant/50 hover:shadow-md hover:-translate-y-0.5 transition-all duration-200 flex flex-col">

      <div className="relative w-full pb-[66%] overflow-hidden bg-surface-container">
        <img
          src={image}
          alt={name}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />

        <span className="absolute top-3 right-3 inline-flex items-center gap-1 bg-surface-container-lowest/90 backdrop-blur-sm text-on-surface text-label-sm font-bold px-2 py-0.5 rounded-full shadow-sm">
          <span
            className="material-symbols-outlined text-amber-500"
            style={{ fontSize: '13px', fontVariationSettings: "'FILL' 1" }}
          >
            star
          </span>
          {rating}
        </span>
      </div>

      <div className="p-4 flex flex-col gap-1 flex-1">
        <h3 className="text-headline-md font-semibold text-on-surface truncate font-display">
          {name}
        </h3>
        <p className="text-label-md text-on-surface-variant truncate">{cuisine}</p>
        <p className="text-label-sm text-on-surface-variant">
          {location}&nbsp;&bull;&nbsp;&#8377;{priceForTwo} for two
        </p>
      </div>

      <div className="px-4 pb-4">
        <Link
          to={`/restaurant/${id}`}
          className="block text-center w-full py-2.5 bg-primary text-on-primary rounded-lg text-label-md font-semibold hover:bg-primary-container active:scale-95 transition-all"
        >
          View Menu
        </Link>
      </div>

    </article>
  );
}
