"use client";

import React from 'react';

export default function Footer() {
  const handleAppStoreClick = () => {
    alert('App Store 출시 준비 중입니다. 조금만 기다려주세요! 🍎');
  };

  return (
    <footer className="bg-gray-900 text-white py-16">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* 로고 및 소개 */}
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center">
                <span className="text-white font-bold text-sm">🎵</span>
              </div>
              <h3 className="text-xl font-bold">리듬톡톡</h3>
            </div>
            <p className="text-gray-400 mb-6 max-w-md">
              음악 치료와 언어 교육을 결합한 혁신적인 어린이 학습 앱으로, 
              3세부터 7세까지의 아이들이 즐거운 동요를 통해 언어 능력을 기를 수 있습니다.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://play.google.com/store/apps/details?id=com.rythmtalk.app.rythmtalk"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors"
              >
                <span className="text-xl">🤖</span>
              </a>
              <a href="mailto:ggprgrkjh2@gmail.com" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <span className="text-xl">📧</span>
              </a>
              <a href="#feedback" className="bg-white/10 hover:bg-white/20 p-2 rounded-full transition-colors">
                <span className="text-xl">💬</span>
              </a>
            </div>
          </div>
          
          {/* 다운로드 및 연락처 */}
          <div>
            <h4 className="font-semibold mb-4">다운로드</h4>
            <ul className="space-y-2">
              <li><a 
                href="https://play.google.com/store/apps/details?id=com.rythmtalk.app.rythmtalk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2"
              >
                <span>🤖</span>
                <span>Google Play Store</span>
              </a></li>
              <li><button 
                onClick={handleAppStoreClick}
                className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2"
              >
                <span>🍎</span>
                <span>App Store</span>
              </button></li>
            </ul>
            <h4 className="font-semibold mb-4 mt-6">연락처</h4>
            <ul className="space-y-2">
              <li><a href="mailto:ggprgrkjh2@gmail.com" className="text-gray-400 hover:text-white transition-colors flex items-center space-x-2">
                <span>📧</span>
                <span>상담 및 기능 추가</span>
              </a></li>
            </ul>
          </div>
          
          {/* 지원 정보 */}
          <div>
            <h4 className="font-semibold mb-4">지원</h4>
            <ul className="space-y-2">
              <li><a href="#feedback" className="text-gray-400 hover:text-white transition-colors">피드백</a></li>
              <li><a href="mailto:ggprgrkjh2@gmail.com" className="text-gray-400 hover:text-white transition-colors">고객센터</a></li>
              <li><a href="#functions" className="text-gray-400 hover:text-white transition-colors">기능 소개</a></li>
              <li><a href="#content" className="text-gray-400 hover:text-white transition-colors">학습 콘텐츠</a></li>
            </ul>
          </div>
        </div>
        
        {/* 키워드 태그 */}
        <div className="mt-12 pt-8 border-t border-gray-800">
          <div className="flex flex-wrap gap-2 mb-6">
            {['언어치료', '언어인지교육', '발달재활', '언어교육', '언어치료사', '어린이', '동요'].map((tag) => (
              <span key={tag} className="bg-white/10 px-3 py-1 rounded-full text-sm text-gray-300">
                {tag}
              </span>
            ))}
          </div>
        </div>
        
        {/* 저작권 정보 */}
        <div className="mt-8 pt-8 border-t border-gray-800 text-center">
          <p className="text-gray-400">
            © 2024 리듬톡톡. All rights reserved. 모든 권리 보유.
          </p>
        </div>
      </div>
    </footer>
  );
} 