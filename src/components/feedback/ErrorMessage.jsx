export default function ErrorMessage({ message, onRetry }) {
  return (
    <div className="flex flex-col items-center justify-center py-24 px-4">
      <div className="bg-error-container rounded-xl p-8 flex flex-col items-center gap-4 max-w-md w-full text-center shadow-sm">
        <span
          className="material-symbols-outlined text-error"
          style={{ fontSize: '48px', fontVariationSettings: "'FILL' 0, 'wght' 400, 'GRAD' 0, 'opsz' 48" }}
        >
          error
        </span>
        <p className="text-body-md text-on-error-container font-medium">{message}</p>
        {onRetry && (
          <button
            onClick={onRetry}
            className="mt-1 px-8 py-2.5 bg-primary text-on-primary rounded-full text-label-md font-semibold hover:bg-primary-container transition-colors"
          >
            Retry
          </button>
        )}
      </div>
    </div>
  );
}
