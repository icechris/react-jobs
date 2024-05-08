import React from 'react'

const App = () => {
  return (
    <div className="bg-white h-screen flex justify-center items-center">
      <div className="bg-white p-8 rounded shadow-md">
        <h1 className="text-3xl font-bold mb-4">Hello, Tailwind CSS!</h1>
        <p className="text-gray-700 ">This is a simple React app styled with Tailwind CSS.</p>
        <button className="bg-blue-400 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4">Click Me</button>
      </div>
    </div>
  )
}

export default App
