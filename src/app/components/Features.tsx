import React from 'react';

export default function Features() {
  const features = [
    {
      icon: '🎵',
      title: '음악 기반 학습',
      description: '리듬과 멜로디를 통해 기억력과 학습 효과를 극대화'
    },
    {
      icon: '👶',
      title: '개별 맞춤 학습',
      description: '각 어린이의 학습 속도에 맞춘 단계별 진행'
    },
    {
      icon: '😊',
      title: '긍정적 피드백',
      description: '모든 시도를 격려하는 스트레스 없는 학습 환경'
    },
    {
      icon: '🤖',
      title: '실시간 음성 인식',
      description: '최신 AI 기술로 정확한 발음 연습 지원'
    }
  ];

  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            왜 리듬톡톡인가요?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            음악과 언어 교육의 완벽한 결합으로 우리 아이들의 언어 능력을 자연스럽게 향상시킵니다.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="text-center p-6 rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 hover:from-purple-100 hover:to-pink-100 transition-all duration-300 shadow-sm hover:shadow-md">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <span className="text-2xl">{feature.icon}</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-3">{feature.title}</h3>
              <p className="text-gray-600 leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
} 