import React from 'react';

export default function Content() {
  const contents = [
    {
      title: '신나는 아침',
      description: '하루를 시작하는 즐거운 아침 인사와 기상 동요',
      color: 'from-orange-400 to-yellow-400'
    },
    {
      title: '냠냠 맛있는 점심',
      description: '다양한 음식과 식사 예절을 배우는 점심 시간',
      color: 'from-green-400 to-blue-400'
    },
    {
      title: '즐거운 놀이 시간',
      description: '친구들과 함께하는 재미있는 놀이와 게임',
      color: 'from-purple-400 to-pink-400'
    }
  ];

  return (
    <section id="content" className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 to-purple-50">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            학습 콘텐츠
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            일상 속 친숙한 주제들로 구성된 동요를 통해 자연스럽게 언어를 습득할 수 있습니다.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
          {contents.map((content, index) => (
            <div key={index} className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
              <div className={`w-16 h-16 bg-gradient-to-r ${content.color} rounded-full flex items-center justify-center mx-auto mb-6`}>
                <span className="text-2xl text-white">🎵</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 text-center">{content.title}</h3>
              <p className="text-gray-600 text-center leading-relaxed">{content.description}</p>
            </div>
          ))}
        </div>
        
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">체계적인 학습 구성</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-purple-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">각 노래마다 핵심 단어 4개씩 집중 학습</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-pink-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">난이도별 3단계 구성으로 점진적 학습</span>
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-blue-500 rounded-full mr-3"></span>
                  <span className="text-gray-700">일상 주제 중심의 친숙한 콘텐츠</span>
                </li>
              </ul>
            </div>
            <div className="text-center">
              <div className="inline-block bg-gradient-to-r from-purple-500 to-pink-500 rounded-full p-1">
                <div className="bg-white rounded-full p-8">
                  <div className="text-4xl mb-4">📚</div>
                  <div className="text-2xl font-bold text-gray-900">3단계</div>
                  <div className="text-sm text-gray-600">학습 시스템</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 