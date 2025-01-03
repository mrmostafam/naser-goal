import React from 'react';
import { MediaImage } from './MediaImage';
import { MediaVideo } from './MediaVideo';
import { MessageBox } from '../MessageBox';

interface MediaSectionProps {
  translations: {
    celebrationTitle: string;
    goalMomentTitle: string;
    goalVideoTitle: string;
    secondVideoTitle: string;
    loveMessage: string;
    secondMessage: string;
  };
}

export const MediaSection: React.FC<MediaSectionProps> = ({ translations }) => {
  return (
    <div className="mt-16 space-y-12">
      <MessageBox message={translations.loveMessage} />
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <MediaImage
          src="https://i.imgur.com/FfZN5q2.jpeg"
          alt="Celebration Moment"
          title={translations.celebrationTitle}
        />
        <MediaImage
          src="https://i.imgur.com/3qMYNYw.png"
          alt="Goal Moment"
          title={translations.goalMomentTitle}
        />
      </div>
      
      <div className="max-w-3xl mx-auto">
        <MediaVideo
          src="https://www.youtube.com/embed/Y0w9nETbHS8?si=bmCh40IY7gLy74d2"
          title={translations.goalVideoTitle}
        />
      </div>

      <div className="max-w-3xl mx-auto">
        <MediaVideo
          src="https://www.youtube.com/embed/cnMTnDP5_kY?si=-AzhIn2Tu-cmH-pr"
          title={translations.secondVideoTitle}
        />
      </div>

      <div className="mt-20">
        <MessageBox message={translations.secondMessage} />
      </div>
    </div>
  );
};
