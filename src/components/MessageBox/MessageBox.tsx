import React from 'react';

interface MessageBoxProps {
  message: string;
}

export const MessageBox: React.FC<MessageBoxProps> = ({ message }) => {
  return (
    <div className="relative mb-12 max-w-2xl mx-auto">
      <div className="bg-gradient-to-r from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 
                    p-6 rounded-2xl shadow-lg border-2 border-red-500/20 
                    transform transition-all duration-300 hover:scale-[1.02] hover:border-red-500
                    group">
        <div className="absolute inset-0 bg-gradient-to-r from-red-500/5 to-transparent 
                      opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-2xl" />
        <p className="text-2xl md:text-3xl text-center font-bold bg-gradient-to-r 
                   from-red-600 to-red-500 bg-clip-text text-transparent">
          {message}
        </p>
      </div>
    </div>
  );
};