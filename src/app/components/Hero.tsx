"use client";

import React from 'react';

export default function Hero() {
  const handleAppStoreClick = () => {
    alert('App Store 출시 준비 중입니다. 조금만 기다려주세요! 🍎');
  };

  return (
    <section className="relative py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-gray-900 mb-6">
          <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">
            음악 언어치료 기법을 만나보세요
          </span>
        </h1>
        <h2 className="text-2xl sm:text-3xl font-semibold text-gray-800 mb-8">
          리듬톡톡 - 음악으로 배우는 우리 아이 첫 언어 학습
        </h2>
        <p className="text-lg sm:text-xl text-gray-600 mb-12 max-w-3xl mx-auto leading-relaxed">
          리듬톡톡은 음악 치료와 언어 교육을 결합한 혁신적인 어린이 학습 앱입니다. 
          3세부터 7세까지의 어린이들이 즐거운 동요를 통해 자연스럽게 언어 능력을 기를 수 있도록 설계되었습니다.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="https://play.google.com/store/apps/details?id=com.rythmtalk.app.rythmtalk"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-gradient-to-r from-purple-500 to-pink-500 text-white px-8 py-4 rounded-full text-lg font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 shadow-lg hover:shadow-xl inline-flex items-center justify-center space-x-2"
          >
            <span>🤖</span>
            <span>Google Play에서 다운로드</span>
          </a>
          <button 
            onClick={handleAppStoreClick}
            className="border-2 border-purple-500 text-purple-600 px-8 py-4 rounded-full text-lg font-semibold hover:bg-purple-50 transition-all duration-300 inline-flex items-center justify-center space-x-2"
          >
            <span>🍎</span>
            <span>App Store에서 다운로드</span>
          </button>
        </div>
      </div>
      
      {/* 배경 장식 */}
      <div className="absolute top-10 left-10 w-20 h-20 bg-yellow-300 rounded-full opacity-20 animate-bounce"></div>
      <div className="absolute top-32 right-16 w-16 h-16 bg-pink-300 rounded-full opacity-20 animate-pulse"></div>
      <div className="absolute bottom-20 left-20 w-12 h-12 bg-blue-300 rounded-full opacity-20 animate-bounce"></div>
      <div className="absolute bottom-32 right-32 w-14 h-14 bg-green-300 rounded-full opacity-20 animate-pulse"></div>
    </section>
  );
} 