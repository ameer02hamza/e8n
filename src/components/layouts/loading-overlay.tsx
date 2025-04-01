import React from 'react'

function LoadingOverlay() {
  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-90">
    <div className="space-y-4 text-center">
      <div className="relative mx-auto h-12 w-12">
        <div className="absolute h-full w-full animate-ping rounded-full bg-blue-600 opacity-75"></div>
        <div className="absolute h-full w-full rounded-full bg-blue-500"></div>
      </div>
      <h2 className="text-2xl font-bold text-white">Almost there</h2>
      <p className="text-gray-300">Preparing your experience...</p>
    </div>
  </div>
  )
}

export default LoadingOverlay