// import React from 'react'

const Footer = () => {
  return (
    <footer className="bg-gradient-to-br from-blue-900 rounded-2xl to-purple-900 text-white mt-20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          {/* About Section */}
          <div className="space-y-4">
            <h3 className="text-xl font-bold bg-gradient-to-r from-blue-400 to-purple-300 bg-clip-text text-transparent">
              VisionAI Chat
            </h3>
            <p className="text-gray-300 text-sm">
              Revolutionizing image recognition through conversational AI.
              Bridging visual understanding with natural language interactions.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-blue-200">Quick Links</h4>
            <nav className="flex flex-col space-y-2">
              <a href="#" className="hover:text-blue-400 transition-colors">
                Home
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Features
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                Documentation
              </a>
              <a href="#" className="hover:text-blue-400 transition-colors">
                GitHub Repo
              </a>
            </nav>
          </div>

          {/* Technologies */}
          <div className="space-y-4">
            <h4 className="text-lg font-semibold text-purple-200">
              Technologies
            </h4>
            <div className="grid grid-cols-2 gap-2">
              <span className="tech-badge">React</span>
              <span className="tech-badge">TensorFlow</span>
              <span className="tech-badge">Tailwind CSS</span>
              <span className="tech-badge">Node.js</span>
            </div>
          </div>

          {/* Copyright */}
          <div className="border-t border-blue-800 pt-8 text-center">
            <p className="text-sm text-blue-300">
              © {new Date().getFullYear()} VisionAI Chat. All rights reserved.
              <span className="mx-2">|</span>
              <a href="#" className="hover:text-blue-400">
                Privacy Policy
              </a>
              <span className="mx-2">|</span>
              <a href="#" className="hover:text-blue-400">
                Terms of Service
              </a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
