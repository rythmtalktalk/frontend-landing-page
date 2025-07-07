"use client";

import React, { useState } from 'react';

export default function Feedback() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState({ subject: '', email: 'ggprgrkjh2@gmail.com' });

  const showEmailModal = (subject: string) => {
    setModalContent({ subject, email: 'ggprgrkjh2@gmail.com' });
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(modalContent.email);
    alert('이메일이 복사되었습니다! 📋');
  };

  return (
    <section id="feedback" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-purple-50 to-pink-50">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
          여러분의 의견을 들려주세요
        </h2>
        <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
          리듬톡톡에 원하는 기능들을 마음껏 피드백으로 남겨주세요!
          더 나은 학습 경험을 위해 여러분의 소중한 의견을 반영하겠습니다.
        </p>
        
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">📝 기능 제안</h3>
              <p className="text-gray-600 mb-4">
                어떤 기능이 더 필요하신가요? 아이들의 학습에 도움이 될 만한 아이디어를 제안해주세요.
              </p>
              <button 
                onClick={() => showEmailModal('리듬톡톡 기능 제안')}
                className="bg-gradient-to-r from-blue-500 to-cyan-500 text-white px-6 py-3 rounded-full font-semibold hover:from-blue-600 hover:to-cyan-600 transition-all duration-300"
              >
                기능 제안하기
              </button>
            </div>
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">💬 사용 후기</h3>
              <p className="text-gray-600 mb-4">
                리듬톡톡을 사용해보신 후기를 들려주세요. 개선점이나 만족한 부분을 공유해주세요.
              </p>
              <button 
                onClick={() => showEmailModal('리듬톡톡 사용 후기')}
                className="bg-gradient-to-r from-green-500 to-emerald-500 text-white px-6 py-3 rounded-full font-semibold hover:from-green-600 hover:to-emerald-600 transition-all duration-300"
              >
                후기 남기기
              </button>
            </div>
          </div>
          
          <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl p-6 text-white">
            <div className="flex items-center justify-center mb-4">
              <div className="flex space-x-2">
                <span className="text-2xl">👶</span>
                <span className="text-2xl">👨‍👩‍👧‍👦</span>
                <span className="text-2xl">🎵</span>
              </div>
            </div>
            <h3 className="text-xl font-bold mb-2">함께 만들어가는 리듬톡톡</h3>
            <p className="opacity-90 mb-4">
              언어치료 전문가, 부모님, 그리고 우리 아이들의 목소리가 모여 
              더 나은 학습 앱을 만들어가고 있습니다.
            </p>
            <button 
              onClick={() => showEmailModal('리듬톡톡 상담 및 지원 요청')}
              className="bg-white/20 hover:bg-white/30 text-white px-6 py-2 rounded-full font-semibold transition-all duration-300"
            >
              📧 바로 문의하기
            </button>
          </div>
        </div>
        
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="text-3xl mb-3">🎯</div>
            <h4 className="font-semibold text-gray-900 mb-2">맞춤형 콘텐츠</h4>
            <p className="text-sm text-gray-600">연령별, 수준별 콘텐츠 추가</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="text-3xl mb-3">🎨</div>
            <h4 className="font-semibold text-gray-900 mb-2">재미있는 게임</h4>
            <p className="text-sm text-gray-600">학습과 놀이가 결합된 게임</p>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-md">
            <div className="text-3xl mb-3">📱</div>
            <h4 className="font-semibold text-gray-900 mb-2">부모 대시보드</h4>
            <p className="text-sm text-gray-600">자녀의 학습 현황 확인</p>
          </div>
        </div>
      </div>

      {/* 이메일 모달 */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 relative animate-fade-in">
            {/* 닫기 버튼 */}
            <button 
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-2xl"
            >
              ×
            </button>
            
            {/* 모달 콘텐츠 */}
            <div className="text-center">
              <div className="text-5xl mb-4">📧</div>
              <h3 className="text-2xl font-bold text-gray-900 mb-2">문의하기</h3>
              <p className="text-gray-600 mb-6">
                {modalContent.subject}
              </p>
              
              <div className="bg-gray-50 rounded-xl p-4 mb-6">
                <p className="text-sm text-gray-600 mb-2">이메일 주소</p>
                <p className="text-lg font-semibold text-gray-900 mb-3">
                  {modalContent.email}
                </p>
                <button 
                  onClick={copyToClipboard}
                  className="bg-purple-500 hover:bg-purple-600 text-white px-4 py-2 rounded-lg text-sm transition-colors"
                >
                  📋 복사하기
                </button>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-3">
                <a 
                  href={`mailto:${modalContent.email}?subject=${encodeURIComponent(modalContent.subject)}`}
                  className="flex-1 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-6 py-3 rounded-full font-semibold hover:from-purple-600 hover:to-pink-600 transition-all duration-300 text-center"
                >
                  메일 앱으로 열기
                </a>
                <button 
                  onClick={closeModal}
                  className="flex-1 border-2 border-gray-300 text-gray-700 px-6 py-3 rounded-full font-semibold hover:bg-gray-50 transition-all duration-300"
                >
                  닫기
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in {
          from {
            opacity: 0;
            transform: scale(0.9);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-in {
          animation: fade-in 0.3s ease-out;
        }
      `}</style>
    </section>
  );
} 