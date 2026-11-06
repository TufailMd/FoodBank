export default function FoodCard({ item, cart, onAdd, onIncrease, onDecrease }) {
  const cartItem = cart.find((c) => c.id === item.id);
  const quantity = cartItem ? cartItem.quantity : 0;

  return (
    <div className="flex items-start gap-4 py-5 border-b border-outline-variant last:border-b-0">

      <div className="flex-1 min-w-0 space-y-1.5 pr-2">
        {item.isBestSeller && (
          <span className="inline-flex items-center gap-1 bg-amber-50 text-amber-700 border border-amber-200 text-[11px] font-semibold px-2 py-0.5 rounded-full">
            <span
              className="material-symbols-outlined"
              style={{ fontSize: '12px', fontVariationSettings: "'FILL' 1" }}
            >
              local_fire_department
            </span>
            Best Seller
          </span>
        )}

        <h4 className="text-label-md font-semibold text-on-surface leading-snug">
          {item.name}
        </h4>
        <p className="text-label-sm text-on-surface-variant line-clamp-2 leading-relaxed">
          {item.description}
        </p>
        <p className="text-body-md font-bold text-on-surface">
          &#8377;{item.price}
        </p>
      </div>

      <div className="flex flex-col items-center gap-2.5 flex-shrink-0">
        {/* Food image */}
        <div className="w-24 h-24 rounded-xl overflow-hidden bg-surface-container flex-shrink-0">
          <img
            src={item.image}
            alt={item.name}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {quantity > 0 ? (
          <div className="flex items-center bg-surface-container-lowest border border-primary rounded-full overflow-hidden shadow-sm">
            <button
              onClick={() => onDecrease(item.id)}
              className="w-8 h-8 flex items-center justify-center text-primary hover:bg-primary/10 transition-colors"
              aria-label={`Decrease ${item.name} quantity`}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                remove
              </span>
            </button>

            <span className="w-8 text-center text-label-md font-bold text-primary select-none">
              {quantity}
            </span>

            <button
              onClick={() => onIncrease(item.id)}
              className="w-8 h-8 flex items-center justify-center text-primary hover:bg-primary/10 transition-colors"
              aria-label={`Increase ${item.name} quantity`}
            >
              <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>
                add
              </span>
            </button>
          </div>
        ) : (
          <button
            onClick={() => onAdd(item)}
            className="px-5 py-1.5 bg-primary text-on-primary text-label-md font-semibold rounded-full hover:bg-primary-container active:scale-95 transition-all shadow-sm"
            aria-label={`Add ${item.name} to cart`}
          >
            Add
          </button>
        )}
      </div>

    </div>
  );
}
