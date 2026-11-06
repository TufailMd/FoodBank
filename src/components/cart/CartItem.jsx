export default function CartItem({ item, onIncrease, onDecrease, onRemove }) {
  const subtotal = item.price * item.quantity;

  return (
    <div className="flex items-center gap-3 md:gap-4 py-4 border-b border-outline-variant last:border-b-0">

      <div className="w-16 h-16 rounded-lg overflow-hidden flex-shrink-0 bg-surface-container">
        <img
          src={item.image}
          alt={item.name}
          className="w-full h-full object-cover"
          loading="lazy"
        />
      </div>

      <div className="flex-1 min-w-0">
        <h4 className="text-label-md font-semibold text-on-surface truncate">{item.name}</h4>
        <p className="text-label-sm text-on-surface-variant">&#8377;{item.price} each</p>
      </div>

      <div className="flex items-center bg-surface-container-lowest border border-outline-variant rounded-full overflow-hidden flex-shrink-0">
        <button
          onClick={() => onDecrease(item.id)}
          className="w-8 h-8 flex items-center justify-center text-primary hover:bg-surface-container transition-colors"
          aria-label={`Decrease ${item.name}`}
        >
          <span className="material-symbols-outlined" style={{ fontSize: '17px' }}>remove</span>
        </button>

        <span className="w-7 text-center text-label-md font-bold text-on-surface select-none">
          {item.quantity}
        </span>

        <button
          onClick={() => onIncrease(item.id)}
          className="w-8 h-8 flex items-center justify-center text-primary hover:bg-surface-container transition-colors"
          aria-label={`Increase ${item.name}`}
        >
          <span className="material-symbols-outlined" style={{ fontSize: '17px' }}>add</span>
        </button>
      </div>

      <p className="text-body-md font-bold text-on-surface w-16 text-right flex-shrink-0">
        &#8377;{subtotal}
      </p>

      <button
        onClick={() => onRemove(item.id)}
        className="text-error hover:text-on-error-container transition-colors flex-shrink-0 p-1"
        aria-label={`Remove ${item.name} from cart`}
      >
        <span className="material-symbols-outlined" style={{ fontSize: '22px' }}>delete</span>
      </button>

    </div>
  );
}
