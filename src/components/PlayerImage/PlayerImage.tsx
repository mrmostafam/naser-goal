import React from 'react';

interface PlayerImageProps {
  translations: {
    playerTitle: string;
  };
}

export const PlayerImage: React.FC<PlayerImageProps> = ({ translations }) => {
  return (
    <div className="mt-20 mb-12 text-center">
      <div className="relative max-w-lg mx-auto">
        <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent rounded-2xl" />
        <img
          src="https://i.imgur.com/LHaYVIX.jpeg"
          alt="Nasser Mansi"
          className="w-full h-auto rounded-2xl shadow-2xl transform transition-transform duration-300 hover:scale-[1.02]"
        />
        <img
        src="https://i.imgur.com/xzQqXu3.jpeg"
        alt="Mostafa Mohamed"
        className="w-full h-auto rounded-2xl shadow-2xl transform transition-transform duration-300 hover:scale-[1.02]"
        />

        <h2 className="absolute bottom-4 left-0 right-0 text-2xl md:text-3xl font-bold text-white text-center px-4">
          {translations.playerTitle}
        </h2>
      </div>
    </div>
  );
};
