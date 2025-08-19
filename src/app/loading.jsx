export default function GlobalLoading() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-200">
      <div className="flex flex-col items-center">
        <div className="w-14 h-14 border-4 border-pink-500 border-dashed rounded-full animate-spin"></div>

        <p className="mt-4 text-gray-300 text-lg">Loading, please wait...</p>
      </div>
    </div>
  );
}
