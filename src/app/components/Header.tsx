"use client";

import React, { useState } from 'react';

export default function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const handleAppStoreClick = () => {
    alert('App Store 출시 준비 중입니다. 조금만 기다려주세요! 🍎');
    setIsDropdownOpen(false);
  };

  return (
    <header className="bg-white/80 backdrop-blur-sm shadow-sm sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center space-x-2">
            <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
              <span className="text-white font-bold text-sm">🎵</span>
            </div>
            <h1 className="text-xl font-bold text-gray-800">리듬톡톡</h1>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#features" className="text-gray-600 hover:text-purple-600 transition-colors">특징</a>
            <a href="#content" className="text-gray-600 hover:text-purple-600 transition-colors">콘텐츠</a>
            <a href="#functions" className="text-gray-600 hover:text-purple-600 transition-colors">기능</a>
            <a href="#feedback" className="text-gray-600 hover:text-purple-600 transition-colors">피드백</a>
          </nav>
          <div className="relative">
            <button 
              onClick={() => setIsDropdownOpen(!isDropdownOpen)}
              className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-2 rounded-full hover:from-purple-600 hover:to-pink-600 transition-all duration-300 font-semibold flex items-center space-x-2"
            >
              <span>다운로드</span>
              <span className="text-sm">▼</span>
            </button>
            {isDropdownOpen && (
              <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-lg border z-50">
                <div className="py-2">
                  <a 
                    href="https://play.google.com/store/apps/details?id=com.rythmtalk.app.rythmtalk"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors"
                    onClick={() => setIsDropdownOpen(false)}
                  >
                    <span className="mr-3">🤖</span>
                    <span>Google Play Store</span>
                  </a>
                  <button 
                    onClick={handleAppStoreClick}
                    className="flex items-center px-4 py-2 text-gray-700 hover:bg-gray-50 transition-colors w-full text-left"
                  >
                    <span className="mr-3">🍎</span>
                    <span>App Store</span>
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
} 