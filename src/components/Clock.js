import React from 'react';

export const Clock = ({ time, className }) => {
  const hours = +time.split(':')[0];
  const minutes = +time.split(':')[1];

  return (
      <div className={className}>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 222 222" width="100%" height="100%">
          <defs>
            <style>
              {'.cls-1{fill:#00a5e7;}.cls-2{fill:#00c5ff;}.cls-3{fill:#b7e8ff;}.cls-4{fill:#fff;}.cls-5{fill:#004672;}'}
            </style>
          </defs>
          <g>
            <g>
              <path className="cls-1" d="M111,0,84.2,111,111,222A111,111,0,0,0,111,0Z"/>
              <path className="cls-2" d="M0,111A111,111,0,0,0,111,222V0A111,111,0,0,0,0,111Z"/>
              <path className="cls-3" d="M111,13.4V208.6a97.6,97.6,0,0,0,0-195.2Z"/>
              <path className="cls-4"
                    d="M195.2,111c0-53.9-37.7-97.6-84.2-97.6a97.6,97.6,0,0,0,0,195.2C157.5,208.6,195.2,164.9,195.2,111Z"/>
              <circle className="cls-1" cx="68.9" cy="38.08" r="3.35"/>
              <circle className="cls-1" cx="38.08" cy="68.9" r="3.35"/>
              <circle className="cls-1" cx="26.8" cy="111" r="3.35"/>
              <circle className="cls-1" cx="38.08" cy="153.1" r="3.35"/>
              <circle className="cls-1" cx="68.9" cy="183.92" r="3.35"/>
              <circle className="cls-1" cx="111" cy="195.2" r="3.35"/>
              <circle className="cls-1" cx="111" cy="27.23" r="3.35"/>
              <circle className="cls-1" cx="153.1" cy="183.92" r="3.35"/>
              <circle className="cls-1" cx="183.92" cy="153.1" r="3.35"/>
              <circle className="cls-1" cx="195.2" cy="111" r="3.35"/>
              <circle className="cls-1" cx="183.92" cy="68.9" r="3.35"/>
              <circle className="cls-1" cx="153.1" cy="38.08" r="3.35"/>
              <path className="cls-5" transform={`rotate(${minutes * 6} 111 111)`}
                    d="M114.07,26.79a3.35,3.35,0,0,0-6.7,0l.19,85.1.18.32,6.51-2.36Z"/>
              <path className="cls-5" transform={`rotate(${((hours + 6) * 30) + (minutes * 0.4)} 111 111)`}
                    d="M114.7,161.32l-.07-49.75.11-.19-6.81-1.25.07,51.18a3.36,3.36,0,0,0,1.67,2.91,3.43,3.43,0,0,0,1.68.45A3.35,3.35,0,0,0,114.7,161.32Z"/>
              <circle className="cls-1" cx="111" cy="111" r="6.7"/>
            </g>
          </g>
        </svg>
      </div>
  );
};