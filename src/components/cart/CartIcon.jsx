export default function CartIcon({ count }) {
  return (
    <div className="relative inline-flex items-center justify-center">
      <span
        className="material-symbols-outlined text-on-surface"
        style={{ fontSize: '26px' }}
      >
        shopping_cart
      </span>

      {count > 0 && (
        <span className="absolute -top-2 -right-2 bg-primary text-on-primary text-[10px] font-bold rounded-full min-w-[18px] h-[18px] flex items-center justify-center px-0.5 leading-none">
          {count > 99 ? '99+' : count}
        </span>
      )}
    </div>
  );
}
