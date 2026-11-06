const FILTER_PILLS = ['Filters', 'Cuisine', 'Rating', 'Price', 'Type'];

export default function FilterBar({ filter, onFilterChange }) {
  const handlePillClick = (pill) => {
    if (pill === 'Filters' || pill === filter) {
      onFilterChange('');
    } else {
      onFilterChange(pill);
    }
  };

  return (
    <div
      className="flex gap-xs overflow-x-auto scrollbar-none pb-1"
      role="group"
      aria-label="Filter options"
    >
      {FILTER_PILLS.map((pill) => {
        const isActive = filter === pill && pill !== 'Filters';

        return (
          <button
            key={pill}
            onClick={() => handlePillClick(pill)}
            aria-pressed={isActive}
            className={`
              flex-shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-full
              text-label-md border transition-all whitespace-nowrap select-none
              ${isActive
                ? 'bg-primary text-on-primary border-primary shadow-sm'
                : 'bg-surface-container-lowest text-on-surface border-outline-variant hover:bg-surface-container active:scale-95'
              }
            `}
          >
            {pill === 'Filters' && (
              <span className="material-symbols-outlined" style={{ fontSize: '15px' }}>
                tune
              </span>
            )}
            {pill}
          </button>
        );
      })}
    </div>
  );
}
