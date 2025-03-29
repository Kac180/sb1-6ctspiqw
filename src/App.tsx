import React from 'react';
import { Star, MapPin, Clock, Phone, UtensilsCrossed } from 'lucide-react';

function App() {
  const reviews = [
    {
      name: "Maria K.",
      rating: 5,
      text: "The pierogi here reminded me of my grandmother's cooking. Absolutely authentic and delicious!",
      date: "March 2024"
    },
    {
      name: "Thomas W.",
      rating: 5,
      text: "Best żurek soup I've had outside of Poland. The atmosphere is cozy and welcoming.",
      date: "February 2024"
    },
    {
      name: "Anna B.",
      rating: 5,
      text: "Their bigos is outstanding! Perfect place for traditional Polish cuisine.",
      date: "January 2024"
    }
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <div 
        className="h-screen relative bg-cover bg-center"
        style={{
          backgroundImage: 'url("https://images.unsplash.com/photo-1625938145744-e380515399b7?auto=format&fit=crop&q=80")',
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-50">
          <div className="container mx-auto px-6 h-full flex items-center">
            <div className="text-white max-w-2xl">
              <h1 className="text-5xl font-bold mb-4">Stary Dom</h1>
              <p className="text-xl mb-8">Authentic Polish Cuisine in the Heart of the City</p>
              <button className="bg-red-700 text-white px-8 py-3 rounded-lg hover:bg-red-800 transition duration-300">
                Reserve a Table
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Info Section */}
      <div className="container mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex items-center space-x-4">
            <Clock className="w-6 h-6 text-red-700" />
            <div>
              <h3 className="font-semibold">Hours</h3>
              <p>Tue-Sun: 12:00 - 22:00</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <MapPin className="w-6 h-6 text-red-700" />
            <div>
              <h3 className="font-semibold">Location</h3>
              <p>123 Main Street, Downtown</p>
            </div>
          </div>
          <div className="flex items-center space-x-4">
            <Phone className="w-6 h-6 text-red-700" />
            <div>
              <h3 className="font-semibold">Contact</h3>
              <p>(555) 123-4567</p>
            </div>
          </div>
        </div>
      </div>

      {/* Featured Dishes */}
      <div className="bg-gray-50 py-16">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl font-bold text-center mb-12">Our Signature Dishes</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1610197361600-33a3a5073cad?auto=format&fit=crop&q=80" 
                alt="Pierogi" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Pierogi</h3>
                <p className="text-gray-700">Handmade dumplings with various fillings</p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1623334044303-241021148842?auto=format&fit=crop&q=80" 
                alt="Żurek" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Żurek</h3>
                <p className="text-gray-700">Traditional sour rye soup</p>
              </div>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img 
                src="https://images.unsplash.com/photo-1599921841143-819065a55cc6?auto=format&fit=crop&q=80" 
                alt="Kotlet Schabowy" 
                className="w-full h-64 object-cover"
              />
              <div className="p-6">
                <h3 className="font-bold text-xl mb-2">Kotlet Schabowy</h3>
                <p className="text-gray-700">Classic breaded pork cutlet</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Reviews Section */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-3xl font-bold text-center mb-12">What Our Guests Say</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-lg">
              <div className="flex items-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-current" />
                ))}
              </div>
              <p className="text-gray-700 mb-4">"{review.text}"</p>
              <div className="flex justify-between items-center">
                <span className="font-semibold">{review.name}</span>
                <span className="text-gray-500 text-sm">{review.date}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-red-900 text-white py-8">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              <UtensilsCrossed className="w-8 h-8 mr-2" />
              <span className="text-xl font-bold">Stary Dom</span>
            </div>
            <div className="text-center md:text-right">
              <p>© 2024 Stary Dom. All rights reserved.</p>
              <p className="text-sm mt-1">Authentic Polish Restaurant</p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;