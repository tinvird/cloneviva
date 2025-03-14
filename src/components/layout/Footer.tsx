import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Footer = () => {
  return (
    <footer className="w-full bg-white border-t border-gray-200 pt-8 pb-6">
      <div className="container mx-auto px-4">
        {/* Footer Top with Links */}
        <div className="flex flex-wrap justify-between mb-6">
          <div className="w-full md:w-auto mb-4 md:mb-0">
            <h3 className="font-bold text-gray-700 mb-3">회사소개</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-gray-600 hover:text-blue-600">비상교육 소개</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-blue-600">찾아오시는 길</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-blue-600">이용약관</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-blue-600">개인정보처리방침</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-blue-600">사이트맵</Link></li>
            </ul>
          </div>

          <div className="w-full md:w-auto mb-4 md:mb-0">
            <h3 className="font-bold text-gray-700 mb-3">교과자료</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-gray-600 hover:text-blue-600">교과서 자료실</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-blue-600">평가자료</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-blue-600">문제은행</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-blue-600">에듀테크 테마관</Link></li>
            </ul>
          </div>

          <div className="w-full md:w-auto mb-4 md:mb-0">
            <h3 className="font-bold text-gray-700 mb-3">창의적 체험활동</h3>
            <ul className="space-y-2">
              <li><Link href="#" className="text-sm text-gray-600 hover:text-blue-600">안전 교육</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-blue-600">인성 교육</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-blue-600">세계시민 교육</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-blue-600">역사·문화정체성 교육</Link></li>
              <li><Link href="#" className="text-sm text-gray-600 hover:text-blue-600">경제·금융 교육</Link></li>
            </ul>
          </div>

          <div className="w-full md:w-auto">
            <h3 className="font-bold text-gray-700 mb-3">고객센터</h3>
            <div className="flex flex-col space-y-2">
              <p className="text-xl font-bold text-gray-800">1544-7714</p>
              <p className="text-xs text-gray-600">(평일 09:00-18:00)</p>
              <div className="flex space-x-3 mt-2">
                <button className="flex items-center text-xs text-gray-600 hover:text-blue-600">
                  <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 20L4 12L12 4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M20 12H5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  문의하기
                </button>
                <button className="flex items-center text-xs text-gray-600 hover:text-blue-600">
                  <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="2"/>
                    <path d="M12 8V12L15 15" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  자주 하는 질문
                </button>
                <button className="flex items-center text-xs text-gray-600 hover:text-blue-600">
                  <svg className="w-4 h-4 mr-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M22 16.7399V19.7C22 20.2303 21.7893 20.7391 21.4142 21.1142C21.0391 21.4893 20.5304 21.7 20 21.7C15.4913 21.7 11.1673 19.9421 7.97918 16.7609C4.79107 13.5726 3.0293 9.25054 3.02 4.74997C3.02 4.22055 3.22986 3.71175 3.60493 3.33607C3.98 2.96039 4.4887 2.74997 5.02 2.74997H8.02C8.49547 2.74997 8.95674 2.9244 9.3168 3.2489C9.67685 3.57341 9.90566 4.02083 9.96 4.49997C10.0616 5.5399 10.2825 6.56354 10.62 7.54997C10.7448 7.90027 10.7566 8.27955 10.654 8.63629C10.5514 8.99303 10.339 9.31159 10.05 9.54997L8.7 10.9C10.398 13.9727 12.9272 16.5019 16 18.2L17.35 16.85C17.5884 16.561 17.9069 16.3485 18.2637 16.246C18.6204 16.1434 18.9997 16.1551 19.35 16.28C20.3364 16.6175 21.3601 16.8384 22.4 16.94C22.8878 16.9945 23.3434 17.2293 23.6705 17.5947C23.9975 17.9602 24.1698 18.4261 24.17 18.905L22 16.7399Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                  원격지원요청
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Company Information */}
        <div className="border-t border-gray-200 pt-6 text-xs text-gray-500">
          <div className="flex items-center mb-3">
            <Image
              src="https://ext.same-assets.com/1760704020/3187386702.png"
              alt="Visang Logo"
              width={100}
              height={30}
              className="mr-4"
            />
            <div className="flex space-x-4">
              <button className="py-1 px-3 border border-gray-300 rounded text-gray-600 hover:bg-gray-100">
                교과서/지도서 구매
              </button>
              <div className="relative">
                <button className="flex items-center py-1 px-3 border border-gray-300 rounded text-gray-600 hover:bg-gray-100">
                  FAMILY SITE
                  <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </button>
              </div>
            </div>
          </div>

          <div className="space-y-1">
            <p>(주)비상교육 대표자명 : 양태회</p>
            <p>사업자등록번호 : 211-87-07735</p>
            <p>경기 과천시 과천대로 2길 54 그레이트밸리 14층</p>
            <p>TEL : 1544-7714(서울녹색 전화 고객센터), 1661-0777(서디지털교과서 중등 고객센터)</p>
            <p>COPYRIGHT(C) (주)비상교육 ALL RIGHTS RESERVED.</p>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
