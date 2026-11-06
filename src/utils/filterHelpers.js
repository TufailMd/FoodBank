export function filterRestaurants(restaurants, search, filter) {
  let result = [...restaurants];

  if (search.trim()) {
    const q = search.toLowerCase();
    result = result.filter(
      (r) =>
        r.name.toLowerCase().includes(q) || r.cuisine.toLowerCase().includes(q),
    );
  }

  switch (filter) {
    case "Rating":
      result = result.filter((r) => r.rating >= 4.3);
      break;

    case "Price":
      result = result.filter((r) => r.priceForTwo <= 400);
      break;

    case "Cuisine":
      result = result.filter(
        (r) =>
          r.cuisine.toLowerCase().includes("indian") ||
          r.cuisine.toLowerCase().includes("continental"),
      );
      break;

    case "Type":
      result = result.filter((r) => r.isVeg === true);
      break;

    case "Filters":
    default:
      break;
  }

  return result;
}
