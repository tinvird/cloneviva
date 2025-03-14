import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

const Header = () => {
  return (
    <header className="w-full bg-white">
      {/* Top Navigation Bar */}
      <div className="flex items-center justify-between px-4 py-2 border-b border-gray-200 text-xs text-gray-600">
        <div className="flex items-center space-x-4">
          <Link href="/" className="flex items-center">
            <span className="text-amber-500 font-bold px-2 py-1 rounded-sm">초등</span>
          </Link>
          <div className="flex space-x-4">
            <Link href="/textbook/list">중고등</Link>
            <Link href="/evaluation/list">연수원</Link>
            <Link href="/problem/list">비바클래스</Link>
            <Link href="/theme/list">생각글쓰기</Link>
            <Link href="/creative/index">비상교과서</Link>
            <Link href="/samstory/index">전자도서관</Link>
            <Link href="/class/index">22개정 교과서 전시관</Link>
            <Link href="/break/list">AI 디지털교과서 지원센터</Link>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <Link href="/login">로그인</Link>
          <span>·</span>
          <Link href="/join">회원가입</Link>
          <span>·</span>
          <Link href="/events">이벤트</Link>
          <span>·</span>
          <Link href="/support">고객센터</Link>
        </div>
      </div>

      {/* Main Header with Logo and Search */}
      <div className="flex items-center justify-between px-4 py-4">
        <div className="flex items-center">
          <Link href="/">
            <div className="relative w-40 h-12">
              <Image
                src="https://ext.same-assets.com/2700814598/2515777230.png"
                alt="Vivasam Logo"
                fill
                className="object-contain"
              />
            </div>
          </Link>
          <div className="ml-3 p-1 bg-amber-500 text-white rounded-sm font-bold text-lg">초등</div>
        </div>
        <div className="flex items-center">
          <div className="relative w-96">
            <Input
              className="pl-4 pr-12 py-2 rounded-full border-amber-500"
              placeholder="3.14 파이데이"
            />
            <Button
              size="icon"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-transparent hover:bg-transparent"
            >
              <SearchIcon className="h-5 w-5 text-gray-500" />
            </Button>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="bg-blue-50 py-2 px-4">
        <nav className="flex items-center space-x-8">
          <NavItem href="/textbook/list" label="교과자료" badge="22 개정" />
          <NavItem href="/evaluation/list" label="평가자료" badge="22 개정" />
          <NavItem href="/problem/list" label="문제은행" badge="N" />
          <NavItem href="/theme/list" label="에듀테크 테마관" badge="N" />
          <NavItem href="/creative/index" label="창체" />
          <NavItem href="/samstory/index" label="생스토리" />
          <NavItem href="/class/index" label="수업 연구소" />
          <NavItem href="/break/list" label="쉬는 시간" />
        </nav>
      </div>
    </header>
  );
};

// Helper Components
const NavItem = ({ href, label, badge }: { href: string; label: string; badge?: string }) => (
  <Link
    href={href}
    className="relative flex items-center text-gray-800 font-medium text-sm hover:text-blue-600"
  >
    {badge && (
      <span className="absolute -top-1 -left-1 bg-blue-500 text-white text-xs px-1 rounded-sm">
        {badge}
      </span>
    )}
    {label}
  </Link>
);

const SearchIcon = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <circle cx="11" cy="11" r="8"></circle>
    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
  </svg>
);

export default Header;
