import React from 'react';


const Home = () => {
  return (
    <div className="h-screen bg-cover bg-center relative" style={{backgroundImage: `url('/images/GPimg/8.jpg')`}}>
    <div className="absolute inset-0 flex justify-center items-center">
      <div className="text-center text-white">
        <h1 className="text-6xl font-bold mb-4">Welcome to GHTourtle</h1>
        <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
      </div>
    </div>
  </div>
  )
}

export default Home
