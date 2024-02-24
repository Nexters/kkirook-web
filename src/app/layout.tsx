import type { Metadata } from 'next';
import './globals.css';
import { QueryProvider } from '@/shared/providers/QueryProvider';
import { changwonDangamAsac, pretendard } from '@/styles/fonts';
import 'slick-carousel/slick/slick-theme.css';
import 'slick-carousel/slick/slick.css';

export const metadata: Metadata = {
  title: 'Kirook',
  description: 'Generated by create next app',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='ko' className={`${pretendard.variable} ${changwonDangamAsac.variable}`}>
      <head>
        <title>Kirook - 끼룩으로 스마트한 일상관리</title>
        <meta name='title' content='Kirook' />
        <meta name='description' content='투두, 메모, 링크 스크랩을 모두 제공하는 개인 생산성 슈퍼 앱' />
        <meta
          name='keywords'
          content='링크 스크랩, 투두, 투두리스트, 할일, 메모, 자기관리, 개인 생산성, link scrape, todo, memo, personal productivity, self management'
        />
        <meta property='og:title' content='Kirook' />
        <meta property='og:description' content='투두, 메모, 링크 스크랩을 모두 제공하는 개인 생산성 슈퍼 앱' />
        <meta property='og:image' content='https://kirook.vercel.app/main.png' />
        <meta property='og:url' content='https://kirook.vercel.app' />
      </head>
      <body className={`${pretendard.className}`}>
        <QueryProvider>
          {children}
          <div id='modal-root' />
          <div id='loading-root' />
        </QueryProvider>
      </body>
    </html>
  );
}
