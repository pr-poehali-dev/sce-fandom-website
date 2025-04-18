import { ReactNode } from 'react';
import SCEHeader from './SCEHeader';
import SCEFooter from './SCEFooter';

interface SCELayoutProps {
  children: ReactNode;
}

const SCELayout = ({ children }: SCELayoutProps) => {
  return (
    <div className="flex flex-col min-h-screen bg-sce-gray">
      <SCEHeader />
      <main className="flex-1 sce-container py-6">
        {children}
      </main>
      <SCEFooter />
    </div>
  );
};

export default SCELayout;