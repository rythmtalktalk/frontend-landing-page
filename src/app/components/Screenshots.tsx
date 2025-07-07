"use client";

import React, { useState } from 'react';
import Image from 'next/image';

export default function Screenshots() {
  const [currentSlide, setCurrentSlide] = useState(0);

  const screenshots = [
    {
      id: 1,
      title: '프로필 관리',
      description: '개인별 맞춤 프로필을 관리할 수 있어요',
      image: '/screenshots/profile.png',
      features: ['개별 사용자 관리', '학습 진도 추적', '활동 현황 확인']
    },
    {
      id: 2,
      title: '단계별 학습',
      description: '체계적인 3단계 학습으로 따라해볼까요?',
      image: '/screenshots/learning-steps.png',
      features: ['단계별 진행', '발음 연습', '실시간 피드백']
    },
    {
      id: 3,
      title: '노래 가사 보기',
      description: '가사를 한눈에 볼 수 있어요',
      image: '/screenshots/lyrics.png',
      features: ['큰 글씨 가사', '따라 부르기', '동요 학습']
    },
    {
      id: 4,
      title: '인기 노래 확인',
      description: '인기 노래를 확인하고 함께 불러보세요',
      image: '/screenshots/popular-songs.png',
      features: ['연령별 추천', '난이도별 구성', '즐겨찾기']
    },
    {
      id: 5,
      title: '활동 통계',
      description: '주간 활동 통계를 볼 수 있어요',
      image: '/screenshots/statistics.png',
      features: ['학습 시간 추적', '진도율 확인', '성취 기록']
    },
    {
      id: 6,
      title: '음악치료 소개',
      description: '음악 언어치료 기법을 만나보세요',
      image: '/screenshots/music-therapy.png',
      features: ['전문가 가이드', '치료 원리', '학습 방법']
    },
    {
      id: 7,
      title: '메인 화면',
      description: '다양한 언어치료 음악을 만나보세요',
      image: '/screenshots/main-screen.png',
      features: ['주제별 노래', '즐거운 학습', '쉬운 사용법']
    }
  ];

  const itemsPerSlide = 4;
  const totalSlides = Math.ceil(screenshots.length / itemsPerSlide);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % totalSlides);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentSlide(index);
  };

  const getCurrentSlideItems = () => {
    const startIndex = currentSlide * itemsPerSlide;
    const endIndex = startIndex + itemsPerSlide;
    return screenshots.slice(startIndex, endIndex);
  };

  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            앱 화면 미리보기
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            리듬톡톡의 실제 화면을 미리 확인해보세요. 직관적이고 친근한 인터페이스로 아이들이 쉽게 사용할 수 있습니다.
          </p>
        </div>

        {/* 슬라이드 컨테이너 */}
        <div className="relative mb-16">
          <div className="bg-white rounded-2xl p-8 shadow-lg">
            {/* 4개씩 보여주는 그리드 */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {getCurrentSlideItems().map((screenshot) => (
                <div key={screenshot.id} className="group">
                  <div className="bg-gray-50 rounded-xl p-4 hover:shadow-lg transition-all duration-300">
                    {/* 스크린샷 이미지 */}
                    <div className="relative w-full h-80 rounded-lg overflow-hidden border border-gray-200 mb-4">
                      <Image
                        src={screenshot.image}
                        alt={screenshot.title}
                        fill
                        className="object-contain bg-white"
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      />
                    </div>
                    
                    {/* 스크린샷 정보 */}
                    <div className="text-center">
                      <h3 className="text-lg font-semibold text-gray-900 mb-2">
                        {screenshot.title}
                      </h3>
                      <p className="text-sm text-gray-600 mb-3">
                        {screenshot.description}
                      </p>
                      
                      <div className="space-y-1">
                        {screenshot.features.map((feature, idx) => (
                          <div key={idx} className="flex items-center justify-center text-xs text-gray-500">
                            <span className="w-1 h-1 bg-purple-500 rounded-full mr-2"></span>
                            {feature}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* 이전/다음 버튼 */}
          {totalSlides > 1 && (
            <>
              <button
                onClick={prevSlide}
                className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 z-10"
              >
                <span className="text-xl">‹</span>
              </button>
              <button
                onClick={nextSlide}
                className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white text-gray-800 p-3 rounded-full shadow-lg transition-all duration-300 z-10"
              >
                <span className="text-xl">›</span>
              </button>
            </>
          )}

          {/* 슬라이드 인디케이터 */}
          {totalSlides > 1 && (
            <div className="flex justify-center mt-6 space-x-2">
              {Array.from({ length: totalSlides }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => goToSlide(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentSlide 
                      ? 'bg-purple-500 scale-125' 
                      : 'bg-gray-300 hover:bg-gray-400'
                  }`}
                />
              ))}
            </div>
          )}
        </div>

        {/* 주요 특징 하이라이트 */}
        <div className="bg-white rounded-2xl p-8 shadow-lg">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-gray-900 mb-4">
              리듬톡톡 앱의 주요 특징
            </h3>
            <p className="text-gray-600">
              사용자 친화적인 디자인과 체계적인 학습 시스템을 확인해보세요
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-6 bg-gradient-to-br from-blue-50 to-cyan-50 rounded-xl">
              <div className="text-3xl mb-3">🎨</div>
              <h4 className="font-semibold text-gray-900 mb-2">직관적 디자인</h4>
              <p className="text-sm text-gray-600">
                아이들이 쉽게 사용할 수 있는 친근한 인터페이스
              </p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-green-50 to-emerald-50 rounded-xl">
              <div className="text-3xl mb-3">📊</div>
              <h4 className="font-semibold text-gray-900 mb-2">체계적 관리</h4>
              <p className="text-sm text-gray-600">
                개인별 학습 진도와 성취도를 한눈에 확인
              </p>
            </div>
            
            <div className="text-center p-6 bg-gradient-to-br from-purple-50 to-pink-50 rounded-xl">
              <div className="text-3xl mb-3">🎵</div>
              <h4 className="font-semibold text-gray-900 mb-2">풍부한 콘텐츠</h4>
              <p className="text-sm text-gray-600">
                다양한 주제의 동요와 단계별 학습 과정
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
} 