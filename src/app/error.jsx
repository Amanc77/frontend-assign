"use client";

export default function Error({ error, reset }) {
  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gray-200 text-white">
      <h1 className="text-3xl font-bold text-red-500">Something went wrong</h1>
      <p className="mt-2 text-gray-400">
        {error?.message || "An unexpected error occurred."}
      </p>

      <button
        onClick={() => reset()}
        className="mt-6 px-6 py-2 bg-pink-600 hover:bg-pink-700 rounded-lg"
      >
        Try Again
      </button>
    </div>
  );
}
