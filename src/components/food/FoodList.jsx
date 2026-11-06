import FoodCard from './FoodCard';

export default function FoodList({ menu, cart, onAdd, onIncrease, onDecrease }) {
  const categories = menu.reduce((acc, item) => {
    if (!acc[item.category]) acc[item.category] = [];
    acc[item.category].push(item);
    return acc;
  }, {});

  return (
    <div className="space-y-10">
      {Object.entries(categories).map(([category, items]) => (
        <section key={category} aria-labelledby={`cat-${category}`}>
          <h3
            id={`cat-${category}`}
            className="text-headline-md font-bold text-on-surface pb-3 mb-0 border-b-2 border-outline-variant font-display"
          >
            {category}
          </h3>

          <div>
            {items.map((item) => (
              <FoodCard
                key={item.id}
                item={item}
                cart={cart}
                onAdd={onAdd}
                onIncrease={onIncrease}
                onDecrease={onDecrease}
              />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}
