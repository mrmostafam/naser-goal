import React from 'react';

interface MediaVideoProps {
  src: string;
  title: string;
}

export const MediaVideo: React.FC<MediaVideoProps> = ({ src, title }) => {
  return (
    <div className="relative rounded-xl overflow-hidden bg-black/5">
      <div className="aspect-video">
        <iframe
          src={src}
          title={title}
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
          allowFullScreen
          className="w-full h-full rounded-xl"
        />
      </div>
      <h3 className="mt-3 text-xl font-semibold text-center">
        {title}
      </h3>
    </div>
  );
};