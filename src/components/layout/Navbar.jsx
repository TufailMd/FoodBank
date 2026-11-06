import { Link, useNavigate } from 'react-router-dom';
import CartIcon from '../cart/CartIcon';
import { getTotalQuantity } from '../../utils/cartHelpers';
import logo from '../../assets/logo-red.png';

export default function Navbar({ cart }) {
  const navigate = useNavigate();
  const totalQty = getTotalQuantity(cart);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-surface-container-lowest border-b border-outline-variant shadow-sm">
      <div className="max-w-app mx-auto px-gutter h-16 flex items-center justify-between gap-4">

        <Link to="/" className="flex-shrink-0 select-none">
          <img
            src={logo}
            alt="FoodBank"
            className="h-14 w-auto object-contain"
          />
        </Link>

        <nav className="flex items-center gap-5" aria-label="Main navigation">
          <Link
            to="/"
            className="hidden sm:block text-label-md text-on-surface-variant hover:text-primary transition-colors"
          >
            Home
          </Link>

          <button
            onClick={() => navigate('/cart')}
            className="relative p-1.5 rounded-lg hover:bg-surface-container transition-colors"
            aria-label={`Cart — ${totalQty} item${totalQty !== 1 ? 's' : ''}`}
          >
            <CartIcon count={totalQty} />
          </button>

          <div className="w-9 h-9 rounded-full overflow-hidden border-2 border-outline-variant flex-shrink-0">
            <img
              src="https://ui-avatars.com/api/?name=ZC&background=b7122a&color=fff&size=36&bold=true&font-size=0.45"
              alt="User avatar"
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
        </nav>

      </div>
    </header>
  );
}
