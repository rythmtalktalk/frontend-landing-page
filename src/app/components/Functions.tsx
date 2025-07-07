import React from 'react';

export default function Functions() {
  const functions = [
    {
      icon: '🎧',
      title: '노래 듣기',
      description: '고품질 음원으로 정확한 발음 학습',
      color: 'from-blue-500 to-cyan-500'
    },
    {
      icon: '🗣️',
      title: '따라하기',
      description: '단어별 세분화된 발음 연습',
      color: 'from-green-500 to-emerald-500'
    },
    {
      icon: '🎤',
      title: '음성 인식',
      description: '실시간 발음 분석 및 피드백',
      color: 'from-purple-500 to-violet-500'
    },
    {
      icon: '📊',
      title: '학습 기록',
      description: '개인별 학습 진도 관리',
      color: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section id="functions" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            주요 기능
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            아이들의 언어 학습을 위한 체계적이고 재미있는 기능들을 제공합니다.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {functions.map((func, index) => (
            <div key={index} className="group relative">
              <div className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-4 border-2 border-transparent hover:border-purple-200">
                <div className={`w-20 h-20 bg-gradient-to-r ${func.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-3xl">{func.icon}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">{func.title}</h3>
                <p className="text-gray-600 text-center leading-relaxed">{func.description}</p>
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl p-8 text-white">
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">AI 기반 맞춤형 학습</h3>
            <p className="text-lg mb-6 opacity-90">
              각 아이의 학습 패턴을 분석하여 최적의 학습 경험을 제공합니다.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white/20 rounded-xl p-4">
                <div className="text-3xl mb-2">🎯</div>
                <div className="font-semibold">개별 맞춤</div>
                <div className="text-sm opacity-80">학습 속도에 맞춘 진행</div>
              </div>
              <div className="bg-white/20 rounded-xl p-4">
                <div className="text-3xl mb-2">📈</div>
                <div className="font-semibold">진도 관리</div>
                <div className="text-sm opacity-80">체계적인 학습 추적</div>
              </div>
              <div className="bg-white/20 rounded-xl p-4">
                <div className="text-3xl mb-2">🏆</div>
                <div className="font-semibold">성취감</div>
                <div className="text-sm opacity-80">단계별 성공 경험</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 