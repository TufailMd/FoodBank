import { getCartTotal } from '../../utils/cartHelpers';

const DELIVERY_FEE = 40;

const TAXES_AND_CHARGES = 20;

export default function CartSummary({ cart }) {
  const itemTotal = getCartTotal(cart);
  const grandTotal = itemTotal + DELIVERY_FEE + TAXES_AND_CHARGES;

  return (
    <div className="bg-surface-container-lowest rounded-xl border border-outline-variant p-6 space-y-5 lg:sticky lg:top-20">

      <h2 className="text-headline-md font-bold text-on-surface font-display">
        Bill Details
      </h2>

      <div className="space-y-3">
        <div className="flex justify-between items-center text-body-md text-on-surface">
          <span>Item Total</span>
          <span className="font-semibold">&#8377;{itemTotal}</span>
        </div>

        <div className="flex justify-between items-center text-body-md text-on-surface-variant">
          <span>Delivery Fee</span>
          <span>&#8377;{DELIVERY_FEE}</span>
        </div>

        <div className="flex justify-between items-center text-body-md text-on-surface-variant">
          <span>Taxes &amp; Charges</span>
          <span>&#8377;{TAXES_AND_CHARGES}</span>
        </div>
      </div>

      <div className="border-t border-outline-variant pt-4">
        <div className="flex justify-between items-center">
          <span className="text-headline-md font-bold text-on-surface font-display">
            To Pay
          </span>
          <span className="text-headline-md font-bold text-primary">
            &#8377;{grandTotal}
          </span>
        </div>
      </div>

      <button
        disabled
        className="w-full py-3.5 bg-primary/40 text-on-primary text-label-md font-semibold rounded-xl cursor-not-allowed select-none"
        title="Checkout is out of scope for Section V"
      >
        Proceed to Checkout
      </button>

      <p className="text-label-sm text-on-surface-variant text-center">
        Checkout &amp; payment coming in a future section.
      </p>

    </div>
  );
}
