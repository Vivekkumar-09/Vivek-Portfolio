import React from 'react'

function Error() {
  return (
    <div className="h-screen flex flex-col items-center justify-center bg-gray-100 text-center px-4">
      <h1 className="text-6xl font-bold text-red-600">404</h1>
      <p className="text-2xl mt-4">Oops! Page not found.</p>
      <p className="mt-2 text-gray-600">The page you’re looking for doesn’t exist.</p>
      <a href="/" className="mt-4 text-blue-600 hover:underline">Go back to Home</a>
    </div>
  );
}

export default Error