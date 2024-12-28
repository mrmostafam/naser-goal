import React from 'react';

interface MediaImageProps {
  src: string;
  alt: string;
  title: string;
}

export const MediaImage: React.FC<MediaImageProps> = ({ src, alt, title }) => {
  return (
    <div className="relative overflow-hidden rounded-xl group">
      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent transition-opacity group-hover:opacity-75" />
      <img
        src={src}
        alt={alt}
        className="w-full h-[300px] object-cover transform transition-transform duration-300 group-hover:scale-105"
      />
      <h3 className="absolute bottom-4 left-0 right-0 text-xl text-white text-center font-semibold px-4">
        {title}
      </h3>
    </div>
  );
};