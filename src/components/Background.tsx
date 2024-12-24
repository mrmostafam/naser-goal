import React from 'react';

export const Background: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden">
      <div className="absolute -rotate-12 top-20 left-10 w-32 h-32 bg-red-600/10 rounded-full animate-pulse" />
      <div className="absolute rotate-12 top-40 right-10 w-24 h-24 bg-red-600/10 rounded-full animate-pulse" />
      <div className="absolute bottom-20 left-1/4 w-40 h-40 bg-red-600/5 rounded-full animate-pulse" />
      <div className="absolute -rotate-45 bottom-10 right-1/4 w-28 h-28 bg-red-600/10 rounded-full animate-pulse" />
    </div>
  );
};