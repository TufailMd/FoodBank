import { useNavigate } from 'react-router-dom';
import CartItem from '../components/cart/CartItem';
import CartSummary from '../components/cart/CartSummary';
import EmptyState from '../components/feedback/EmptyState';

export default function Cart({ cart, onIncrease, onDecrease, onRemove }) {
  const navigate = useNavigate();

  return (
    <main className="pt-16 min-h-screen bg-background">
      <div className="max-w-app mx-auto px-gutter py-lg">

        <h1
          className="text-headline-lg-mobile font-bold text-on-surface mb-md"
          style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
        >
          Your Cart
        </h1>

        {cart.length === 0 ? (
          <EmptyState
            icon="shopping_bag"
            title="Your cart is empty"
            message="Looks like you haven't added anything yet. Start exploring our restaurants!"
            ctaLabel="Browse Restaurants"
            onCtaClick={() => navigate('/')}
          />
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">

            <div className="lg:col-span-8 bg-surface-container-lowest rounded-xl border border-outline-variant p-6">
              <h2
                className="text-headline-md font-bold text-on-surface mb-4"
                style={{ fontFamily: '"Plus Jakarta Sans", sans-serif' }}
              >
                Order Summary
                <span className="ml-2 text-label-md font-normal text-on-surface-variant">
                  ({cart.length} item{cart.length !== 1 ? 's' : ''})
                </span>
              </h2>

              <div>
                {cart.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onIncrease={onIncrease}
                    onDecrease={onDecrease}
                    onRemove={onRemove}
                  />
                ))}
              </div>
            </div>

            <div className="lg:col-span-4">
              <CartSummary cart={cart} />
            </div>

          </div>
        )}

      </div>
    </main>
  );
}
