import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'next-ts',
  description: 'next-ts 프로젝트입니다.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
