
export default function Loading({ message = 'Loading...' }) {
  return (
    <div className="flex flex-col items-center justify-center py-24 gap-5">
      <div className="w-12 h-12 rounded-full border-4 border-surface-container-high border-t-primary animate-spin" />
      <p className="text-body-md text-on-surface-variant">{message}</p>
    </div>
  );
}
