import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Link from 'next/link';

export const Projects = ({ title, cards }) => {
  return (
    <div id="projects" className="bg-primary py-5 px-5">
      <div className="container">
        <h1 className="text-light fw-bold">Projects</h1>
        <div className="d-flex flex-row flex-wrap justify-content-center">
          {cards.map((value, index, link) => (
            <Card
              key={index}
              title={value.title}
              description={value.description}
              link={value.link}
              icons={value.icons}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const Music = ({ title, cards }) => {
  return (
    <div id="music" className="bg-dark py-5 px-5">
      <div className="container">
        <h1 className="text-light fw-bold">Music</h1>
        <div className="d-flex flex-row flex-wrap justify-content-center">
          {cards.map((value, index) => (
            <Video
              key={index}
              title={value.title}
              description={value.description}
              youtubeId={value.youtubeId}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export const Card = ({ title, description, link, icons }) => {
  return (
    <div
      className="card py-3 px-3 mx-sm-4 my-4 card-work shadow-lg "
      style={{ width: '20rem' }}
    >
      <h4 className="text-primary">{title}</h4>
      <p className="text-dark">{description}</p>
      <div className="text-end">
        {link && (
          <a target="_blank" rel="noreferrer" href={link}>
            live site
          </a>
        )}
        {icons &&
          icons.map((value, index) => (
            <Link key={index} href={value.link}>
              <a target="_blank" rel="noreferrer">
                <FontAwesomeIcon
                  className="icon-style mx-1 "
                  icon={value.icon}
                  size="2x"
                />
              </a>
            </Link>
          ))}
      </div>
    </div>
  );
};

export const Video = ({ youtubeId }) => {
  return (
    <div className="card m-5">
      <div className="card-body p-2">
        <div className="embed-responsive embed-responsive-16by9 video-container">
          <iframe
            className="embed-responsive-item"
            src={`https://www.youtube.com/embed/${youtubeId}`}
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </div>
  );
};
