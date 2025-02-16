// import React from "react";
import Chatbot from "./components/Chatbot.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  
  return (
    <div className="app-container min-h-screen bg-gradient-to-br from-blue-100 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto space-y-8">
        <h1 className="text-4xl md:text-5xl font-extrabold text-center">
          <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
            Conversational
          </span>
          <span className="block mt-2 text-3xl md:text-4xl font-semibold text-gray-700">
            Image Recognition Chatbot For Women Safety
          </span>
        </h1>
        <div className="bg-white rounded-2xl shadow-xl p-4 md:p-6 transition-all duration-300 hover:shadow-2xl">
          <Chatbot />
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
