import React from 'react';
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import Image from 'next/image';
import Link from 'next/link';

const materialCategories = [
  { id: '교과자료', label: '교과자료', badge: '22 개정' },
  { id: '평가자료', label: '평가자료', badge: '22 개정' },
  { id: '문제은행', label: '문제은행', badge: 'N' },
  { id: '에듀테크_테마관', label: '에듀테크 테마관', badge: 'N' },
  { id: '창체', label: '창체' },
  { id: '생스토리', label: '생스토리' },
  { id: '수업_연구소', label: '수업 연구소' },
  { id: '쉬는_시간', label: '쉬는 시간' },
];

// Sample data for educational materials
const educationalMaterials = {
  '교과자료': [
    { id: 1, title: '국어 3-1 교과서', grade: '3학년', image: 'https://ext.same-assets.com/1231614362/1946887332.png' },
    { id: 2, title: '국어 3-1 평가자료', grade: '3학년', image: 'https://ext.same-assets.com/1974921728/4023349869.png' },
    { id: 3, title: '수학 3 교과서', grade: '3학년', image: 'https://ext.same-assets.com/3389942001/3184474671.png' },
    { id: 4, title: '음악 3 자료실', grade: '3학년', image: 'https://ext.same-assets.com/1192310640/3116089360.png' },
  ],
  '평가자료': [
    { id: 1, title: '2022 개정 3학년 평가자료', grade: '3학년', image: 'https://ext.same-assets.com/754355742/3236306867.png' },
    { id: 2, title: '1학기 중간평가 문항', grade: '3학년', image: 'https://ext.same-assets.com/149668193/3206976668.png' },
    { id: 3, title: '수행평가 기준안', grade: '3학년', image: 'https://ext.same-assets.com/3260228867/4160759981.png' },
    { id: 4, title: '서술형 평가 예시', grade: '3학년', image: 'https://ext.same-assets.com/2813543693/1671141251.png' },
  ],
  '문제은행': [
    { id: 1, title: '3월 파이데이 특별 문제', grade: '전학년', image: 'https://ext.same-assets.com/3809917069/2935276741.png' },
    { id: 2, title: '국어 어휘력 문제', grade: '3학년', image: 'https://ext.same-assets.com/1037956527/1797617929.png' },
    { id: 3, title: '수학 연산 문제', grade: '3학년', image: 'https://ext.same-assets.com/2593014962/2550107059.png' },
    { id: 4, title: '사회 지리 문제', grade: '3학년', image: 'https://ext.same-assets.com/2310076916/324021036.png' },
  ],
  '에듀테크_테마관': [
    { id: 1, title: 'AI 학습 도우미', grade: '전학년', image: 'https://ext.same-assets.com/3557562034/643792953.jpeg' },
    { id: 2, title: '메타버스 교실', grade: '전학년', image: 'https://ext.same-assets.com/440092885/271468258.jpeg' },
    { id: 3, title: '샘퀴즈 문제풀이', grade: '전학년', image: 'https://ext.same-assets.com/18691399/102019853.jpeg' },
    { id: 4, title: '비바클래스 수업', grade: '전학년', image: 'https://ext.same-assets.com/771773343/138810586.jpeg' },
  ],
  '창체': [
    { id: 1, title: '안전 교육 자료', grade: '전학년', image: 'https://ext.same-assets.com/1627702058/1475964472.jpeg' },
    { id: 2, title: '인성 교육 자료', grade: '전학년', image: 'https://ext.same-assets.com/2481096314/4098268579.jpeg' },
    { id: 3, title: '환경 교육 자료', grade: '전학년', image: 'https://ext.same-assets.com/1618395530/2078897178.jpeg' },
    { id: 4, title: '진로 교육 자료', grade: '전학년', image: 'https://ext.same-assets.com/4278887584/2925046397.jpeg' },
  ],
  '생스토리': [
    { id: 1, title: '3월의 생스토리', grade: '전학년', image: 'https://ext.same-assets.com/3451900932/2816030657.jpeg' },
    { id: 2, title: '독서 활동 이야기', grade: '전학년', image: 'https://ext.same-assets.com/2537904497/398660030.jpeg' },
    { id: 3, title: '학급 운영 사례', grade: '전학년', image: 'https://ext.same-assets.com/990664015/2931888472.jpeg' },
    { id: 4, title: '교실 놀이 활동', grade: '전학년', image: 'https://ext.same-assets.com/134198724/433388002.jpeg' },
  ],
  '수업_연구소': [
    { id: 1, title: 'AI 활용 수업', grade: '전학년', image: 'https://ext.same-assets.com/231973897/2712433533.octet-stream' },
    { id: 2, title: '협동 학습 방법', grade: '전학년', image: 'https://ext.same-assets.com/2661934306/2908141341.octet-stream' },
    { id: 3, title: '프로젝트 학습', grade: '전학년', image: 'https://ext.same-assets.com/807121750/271607033.octet-stream' },
    { id: 4, title: '거꾸로 교실', grade: '전학년', image: 'https://ext.same-assets.com/2941834608/1581622307.octet-stream' },
  ],
  '쉬는_시간': [
    { id: 1, title: '교실 놀이 모음', grade: '전학년', image: 'https://ext.same-assets.com/1883942142/1613931816.octet-stream' },
    { id: 2, title: '학급 경영 팁', grade: '전학년', image: 'https://ext.same-assets.com/240920692/3822999230.octet-stream' },
    { id: 3, title: '쉬는 시간 활동', grade: '전학년', image: 'https://ext.same-assets.com/2827752450/919930979.octet-stream' },
    { id: 4, title: '학급 환경 구성', grade: '전학년', image: 'https://ext.same-assets.com/3610475605/2021348777.octet-stream' },
  ]
};

const EducationalMaterials = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">교육 자료</h2>

      <Tabs defaultValue="교과자료" className="w-full">
        <TabsList className="flex w-full border-b border-gray-200 overflow-x-auto mb-4">
          {materialCategories.map((category) => (
            <TabsTrigger
              key={category.id}
              value={category.id}
              className="relative px-4 py-2 text-sm text-gray-700 hover:text-blue-600 data-[state=active]:text-blue-600 data-[state=active]:border-b-2 data-[state=active]:border-blue-600"
            >
              {category.badge && (
                <span className="absolute -top-1 -left-1 bg-blue-500 text-white text-[10px] px-1 rounded-sm">
                  {category.badge}
                </span>
              )}
              {category.label}
            </TabsTrigger>
          ))}
        </TabsList>

        {materialCategories.map((category) => (
          <TabsContent key={category.id} value={category.id} className="w-full">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {educationalMaterials[category.id as keyof typeof educationalMaterials].map((material) => (
                <div key={material.id} className="border border-gray-200 rounded-lg overflow-hidden hover:shadow-md transition-shadow">
                  <Link href="#" className="block">
                    <div className="relative h-36 bg-gray-100">
                      <Image
                        src={material.image}
                        alt={material.title}
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="p-3">
                      <span className="text-xs text-gray-500">{material.grade}</span>
                      <h3 className="text-sm font-medium text-gray-800 mt-1">{material.title}</h3>
                    </div>
                  </Link>
                </div>
              ))}
            </div>

            <div className="flex justify-center mt-6">
              <Link href="#" className="text-sm text-gray-600 flex items-center hover:text-blue-600">
                더 보기
                <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M9 6L15 12L9 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </Link>
            </div>
          </TabsContent>
        ))}
      </Tabs>
    </div>
  );
};

export default EducationalMaterials;
