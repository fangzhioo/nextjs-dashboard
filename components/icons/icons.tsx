import * as React from 'react';

import { IconSvgProps } from './types';

interface IconProps extends IconSvgProps {
  fill?: string;
  filled?: boolean;
  size?: string | number;
  height?: string | number;
  width?: string | number;
  label?: string;
}

export const Sun: React.FC<IconProps> = ({
  fill,
  filled,
  size,
  height,
  width,
  ...props
}) => {
  if (filled) {
    return (
      <svg
        height={size || height || 24}
        viewBox='0 0 512 512'
        width={size || width || 24}
        {...props}
      >
        <path
          d='M256 118a22 22 0 01-22-22V48a22 22 0 0144 0v48a22 22 0 01-22 22zM256 486a22 22 0 01-22-22v-48a22 22 0 0144 0v48a22 22 0 01-22 22zM369.14 164.86a22 22 0 01-15.56-37.55l33.94-33.94a22 22 0 0131.11 31.11l-33.94 33.94a21.93 21.93 0 01-15.55 6.44zM108.92 425.08a22 22 0 01-15.55-37.56l33.94-33.94a22 22 0 1131.11 31.11l-33.94 33.94a21.94 21.94 0 01-15.56 6.45zM464 278h-48a22 22 0 010-44h48a22 22 0 010 44zM96 278H48a22 22 0 010-44h48a22 22 0 010 44zM403.08 425.08a21.94 21.94 0 01-15.56-6.45l-33.94-33.94a22 22 0 0131.11-31.11l33.94 33.94a22 22 0 01-15.55 37.56zM142.86 164.86a21.89 21.89 0 01-15.55-6.44l-33.94-33.94a22 22 0 0131.11-31.11l33.94 33.94a22 22 0 01-15.56 37.55zM256 358a102 102 0 11102-102 102.12 102.12 0 01-102 102z'
          fill={fill}
        />
      </svg>
    );
  }

  return (
    <svg
      height={size || height || 24}
      viewBox='0 0 512 512'
      width={size || width || 24}
      {...props}
    >
      <path
        d='M256 48v48M256 416v48M403.08 108.92l-33.94 33.94M142.86 369.14l-33.94 33.94M464 256h-48M96 256H48M403.08 403.08l-33.94-33.94M142.86 142.86l-33.94-33.94'
        fill='none'
        stroke={fill}
        strokeLinecap='round'
        strokeMiterlimit={10}
        strokeWidth={32}
      />
      <circle
        cx={256}
        cy={256}
        fill='none'
        r={80}
        stroke={fill}
        strokeLinecap='round'
        strokeMiterlimit={10}
        strokeWidth={32}
      />
    </svg>
  );
};

export const Mail: React.FC<IconProps> = ({
  fill,
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      height={size || height || 24}
      viewBox='0 0 24 24'
      width={size || width || 24}
      {...props}
    >
      <g
        fill='none'
        stroke={fill}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
      >
        <path d='M12 20.5H7c-3 0-5-1.5-5-5v-7c0-3.5 2-5 5-5h10c3 0 5 1.5 5 5v3' />
        <path d='M17 9l-3.13 2.5a3.166 3.166 0 01-3.75 0L7 9M19.21 14.77l-3.539 3.54a1.232 1.232 0 00-.3.59l-.19 1.35a.635.635 0 00.76.76l1.35-.19a1.189 1.189 0 00.59-.3l3.54-3.54a1.365 1.365 0 000-2.22 1.361 1.361 0 00-2.211.01zM18.7 15.28a3.185 3.185 0 002.22 2.22' />
      </g>
    </svg>
  );
};

export const Moon: React.FC<IconProps> = ({
  fill,
  filled,
  size,
  height,
  width,
  ...props
}) => {
  if (filled) {
    return (
      <svg
        height={size || height || 24}
        viewBox='0 0 512 512'
        width={size || width || 24}
        {...props}
      >
        <path
          d='M152.62 126.77c0-33 4.85-66.35 17.23-94.77C87.54 67.83 32 151.89 32 247.38 32 375.85 136.15 480 264.62 480c95.49 0 179.55-55.54 215.38-137.85-28.42 12.38-61.8 17.23-94.77 17.23-128.47 0-232.61-104.14-232.61-232.61z'
          fill={fill}
        />
      </svg>
    );
  }

  return (
    <svg
      height={size || height || 24}
      viewBox='0 0 512 512'
      width={size || width || 24}
      {...props}
    >
      <path
        d='M160 136c0-30.62 4.51-61.61 16-88C99.57 81.27 48 159.32 48 248c0 119.29 96.71 216 216 216 88.68 0 166.73-51.57 200-128-26.39 11.49-57.38 16-88 16-119.29 0-216-96.71-216-216z'
        fill='none'
        stroke={fill}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={32}
      />
    </svg>
  );
};

export const Lock: React.FC<IconProps> = ({
  fill,
  size,
  height,
  width,
  ...props
}) => {
  const color = fill;

  return (
    <svg
      data-name='Iconly/Curved/Lock'
      height={size || height || 24}
      viewBox='0 0 24 24'
      width={size || width || 24}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g transform='translate(3.5 2)'>
        <path
          d='M9.121,6.653V4.5A4.561,4.561,0,0,0,0,4.484V6.653'
          fill='none'
          stroke={color}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeMiterlimit='10'
          strokeWidth={1.5}
          transform='translate(3.85 0.75)'
        />
        <path
          d='M.5,0V2.221'
          fill='none'
          stroke={color}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeMiterlimit='10'
          strokeWidth={1.5}
          transform='translate(7.91 12.156)'
        />
        <path
          d='M7.66,0C1.915,0,0,1.568,0,6.271s1.915,6.272,7.66,6.272,7.661-1.568,7.661-6.272S13.4,0,7.66,0Z'
          fill='none'
          stroke={color}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeMiterlimit='10'
          strokeWidth={1.5}
          transform='translate(0.75 6.824)'
        />
      </g>
    </svg>
  );
};

export const Unlock: React.FC<IconProps> = ({
  fill,
  size,
  height,
  width,
  ...props
}) => {
  const color = fill;

  return (
    <svg
      data-name='Iconly/Curved/Lock'
      height={size || height || 24}
      viewBox='0 0 24 24'
      width={size || width || 24}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g transform='translate(3.5 2)'>
        <path
          d='M8.927,3.237A4.562,4.562,0,0,0,0,4.484V6.653'
          fill='none'
          stroke={color}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeMiterlimit='10'
          strokeWidth={1.5}
          transform='translate(3.849 0.75)'
        />
        <path
          d='M.5,0V2.221'
          fill='none'
          stroke={color}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeMiterlimit='10'
          strokeWidth={1.5}
          transform='translate(7.91 12.156)'
        />
        <path
          d='M7.66,0C1.915,0,0,1.568,0,6.271s1.915,6.272,7.66,6.272,7.661-1.568,7.661-6.272S13.406,0,7.66,0Z'
          fill='none'
          stroke={color}
          strokeLinecap='round'
          strokeLinejoin='round'
          strokeMiterlimit='10'
          strokeWidth={1.5}
          transform='translate(0.75 6.824)'
        />
      </g>
    </svg>
  );
};

export const Password: React.FC<IconProps> = ({
  fill,
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      height={size || height || 24}
      viewBox='0 0 24 24'
      width={size || width || 24}
      {...props}
    >
      <g fill={fill}>
        <path d='M18.75 8v2.1a12.984 12.984 0 00-1.5-.1V8c0-3.15-.89-5.25-5.25-5.25S6.75 4.85 6.75 8v2a12.984 12.984 0 00-1.5.1V8c0-2.9.7-6.75 6.75-6.75S18.75 5.1 18.75 8z' />
        <path d='M18.75 10.1a12.984 12.984 0 00-1.5-.1H6.75a12.984 12.984 0 00-1.5.1C2.7 10.41 2 11.66 2 15v2c0 4 1 5 5 5h10c4 0 5-1 5-5v-2c0-3.34-.7-4.59-3.25-4.9zM8.71 16.71A1.052 1.052 0 018 17a1 1 0 01-.38-.08 1.032 1.032 0 01-.33-.21A1.052 1.052 0 017 16a1 1 0 01.08-.38 1.155 1.155 0 01.21-.33 1.032 1.032 0 01.33-.21 1 1 0 011.09.21 1.155 1.155 0 01.21.33A1 1 0 019 16a1.052 1.052 0 01-.29.71zm4.21-.33a1.155 1.155 0 01-.21.33A1.052 1.052 0 0112 17a1.033 1.033 0 01-.71-.29 1.155 1.155 0 01-.21-.33A1 1 0 0111 16a1.033 1.033 0 01.29-.71 1.047 1.047 0 011.42 0A1.033 1.033 0 0113 16a1 1 0 01-.08.38zm3.79.33a1.014 1.014 0 01-1.42 0 1.014 1.014 0 010-1.42 1.047 1.047 0 011.42 0c.04.05.08.1.12.16a.556.556 0 01.09.17.636.636 0 01.06.18 1.5 1.5 0 01.02.2 1.052 1.052 0 01-.29.71z' />
      </g>
    </svg>
  );
};

export const Notification: React.FC<IconProps> = ({
  fill,
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      fill='none'
      height={size || height || 24}
      viewBox='0 0 24 24'
      width={size || width || 24}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        clipRule='evenodd'
        d='M18.707 8.796c0 1.256.332 1.997 1.063 2.85.553.628.73 1.435.73 2.31 0 .874-.287 1.704-.863 2.378a4.537 4.537 0 01-2.9 1.413c-1.571.134-3.143.247-4.736.247-1.595 0-3.166-.068-4.737-.247a4.532 4.532 0 01-2.9-1.413 3.616 3.616 0 01-.864-2.378c0-.875.178-1.682.73-2.31.754-.854 1.064-1.594 1.064-2.85V8.37c0-1.682.42-2.781 1.283-3.858C7.861 2.942 9.919 2 11.956 2h.09c2.08 0 4.204.987 5.466 2.625.82 1.054 1.195 2.108 1.195 3.745v.426zM9.074 20.061c0-.504.462-.734.89-.833.5-.106 3.545-.106 4.045 0 .428.099.89.33.89.833-.025.48-.306.904-.695 1.174a3.635 3.635 0 01-1.713.731 3.795 3.795 0 01-1.008 0 3.618 3.618 0 01-1.714-.732c-.39-.269-.67-.694-.695-1.173z'
        fill={fill}
        fillRule='evenodd'
      />
    </svg>
  );
};

export const User: React.FC<IconProps> = ({
  fill,
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      height={size || height || 24}
      viewBox='0 0 24 24'
      width={size || width || 24}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g
        fill='none'
        stroke={fill}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit={10}
        strokeWidth={1.5}
      >
        <path
          d='M11.845 21.662C8.153 21.662 5 21.088 5 18.787s3.133-4.425 6.845-4.425c3.692 0 6.845 2.1 6.845 4.4s-3.134 2.9-6.845 2.9z'
          data-name='Stroke 1'
        />
        <path
          d='M11.837 11.174a4.372 4.372 0 10-.031 0z'
          data-name='Stroke 3'
        />
      </g>
    </svg>
  );
};

export const VolumeUp: React.FC<IconProps> = ({
  fill,
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      fill='none'
      height={size || height || 24}
      viewBox='0 0 24 24'
      width={size || width || 24}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        clipRule='evenodd'
        d='M13.357 6.45c-.05-.486-.103-.99-.232-1.494C12.775 3.752 11.801 3 10.758 3c-.582-.002-1.318.356-1.736.72l-3.46 2.897h-1.81c-1.333 0-2.404 1.027-2.607 2.51-.172 1.424-.214 4.11 0 5.677.186 1.567 1.21 2.579 2.607 2.579h1.81l3.527 2.94c.362.315 1 .676 1.588.676l.105.001c1.063 0 2-.78 2.35-1.98.133-.509.18-.985.224-1.445l.001-.008.047-.459c.18-1.487.18-8.739 0-10.215l-.047-.442zm4.05.045a.907.907 0 00-1.279-.237.957.957 0 00-.228 1.308c.802 1.182 1.243 2.756 1.243 4.434 0 1.677-.441 3.252-1.243 4.434a.956.956 0 00.23 1.308.905.905 0 001.277-.237c1.012-1.492 1.571-3.447 1.571-5.505s-.559-4.013-1.571-5.505zM19.29 3.22a.905.905 0 011.277.236C22.136 5.767 23 8.802 23 12c0 3.2-.864 6.234-2.433 8.544a.902.902 0 01-1.276.236.957.957 0 01-.23-1.308c1.356-1.999 2.104-4.653 2.104-7.472 0-2.818-.748-5.472-2.105-7.471a.958.958 0 01.23-1.308z'
        fill={fill}
        fillRule='evenodd'
      />
    </svg>
  );
};

export const Camera: React.FC<IconProps> = ({
  fill,
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      fill='none'
      height={size || height || 24}
      viewBox='0 0 24 24'
      width={size || width || 24}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        clipRule='evenodd'
        d='M17.44 6.236c.04.07.11.12.2.12 2.4 0 4.36 1.958 4.36 4.355v5.934A4.368 4.368 0 0117.64 21H6.36A4.361 4.361 0 012 16.645V10.71a4.361 4.361 0 014.36-4.355c.08 0 .16-.04.19-.12l.06-.12.106-.222a97.79 97.79 0 01.714-1.486C7.89 3.51 8.67 3.01 9.64 3h4.71c.97.01 1.76.51 2.22 1.408.157.315.397.822.629 1.31l.141.299.1.22zm-.73 3.836c0 .5.4.9.9.9s.91-.4.91-.9-.41-.909-.91-.909-.9.41-.9.91zm-6.44 1.548c.47-.47 1.08-.719 1.73-.719.65 0 1.26.25 1.72.71.46.459.71 1.068.71 1.717A2.438 2.438 0 0112 15.756c-.65 0-1.26-.25-1.72-.71a2.408 2.408 0 01-.71-1.717v-.01c-.01-.63.24-1.24.7-1.699zm4.5 4.485a3.91 3.91 0 01-2.77 1.15 3.921 3.921 0 01-3.93-3.926 3.865 3.865 0 011.14-2.767A3.921 3.921 0 0112 9.402c1.05 0 2.04.41 2.78 1.15.74.749 1.15 1.738 1.15 2.777a3.958 3.958 0 01-1.16 2.776z'
        fill={fill}
        fillRule='evenodd'
      />
    </svg>
  );
};

export const Activity: React.FC<IconProps> = ({
  fill,
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      data-name='Iconly/Curved/Activity'
      height={size || height || 24}
      viewBox='0 0 24 24'
      width={size || width || 24}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g
        fill='none'
        stroke={fill}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit={10}
        strokeWidth={1.5}
      >
        <path d='M6.918 14.854l2.993-3.889 3.414 2.68 2.929-3.78' />
        <path d='M19.668 2.35a1.922 1.922 0 11-1.922 1.922 1.921 1.921 0 011.922-1.922z' />
        <path d='M20.756 9.269a20.809 20.809 0 01.194 3.034c0 6.938-2.312 9.25-9.25 9.25s-9.25-2.312-9.25-9.25 2.313-9.25 9.25-9.25a20.931 20.931 0 012.983.187' />
      </g>
    </svg>
  );
};

export const Plus: React.FC<IconProps> = ({
  fill,
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      height={size || height || 24}
      viewBox='0 0 24 24'
      width={size || width || 24}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g
        fill='none'
        stroke={fill}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
      >
        <path d='M6 12h12' />
        <path d='M12 18V6' />
      </g>
    </svg>
  );
};

export const Minus: React.FC<IconProps> = ({
  fill,
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      height={size || height || 24}
      viewBox='0 0 24 24'
      width={size || width || 24}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M6 12h12'
        fill='none'
        stroke={fill}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
      />
    </svg>
  );
};

export const Eye: React.FC<IconProps> = ({
  fill,
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      fill='none'
      height={size || height || 24}
      viewBox='0 0 20 20'
      width={size || width || 24}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M12.9833 10C12.9833 11.65 11.65 12.9833 10 12.9833C8.35 12.9833 7.01666 11.65 7.01666 10C7.01666 8.35 8.35 7.01666 10 7.01666C11.65 7.01666 12.9833 8.35 12.9833 10Z'
        stroke={fill}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
      />
      <path
        d='M9.99999 16.8916C12.9417 16.8916 15.6833 15.1583 17.5917 12.1583C18.3417 10.9833 18.3417 9.00831 17.5917 7.83331C15.6833 4.83331 12.9417 3.09998 9.99999 3.09998C7.05833 3.09998 4.31666 4.83331 2.40833 7.83331C1.65833 9.00831 1.65833 10.9833 2.40833 12.1583C4.31666 15.1583 7.05833 16.8916 9.99999 16.8916Z'
        stroke={fill}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
      />
    </svg>
  );
};

export const Edit: React.FC<IconProps> = ({
  fill,
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      fill='none'
      height={size || height || 24}
      viewBox='0 0 20 20'
      width={size || width || 24}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M11.05 3.00002L4.20835 10.2417C3.95002 10.5167 3.70002 11.0584 3.65002 11.4334L3.34169 14.1334C3.23335 15.1084 3.93335 15.775 4.90002 15.6084L7.58335 15.15C7.95835 15.0834 8.48335 14.8084 8.74168 14.525L15.5834 7.28335C16.7667 6.03335 17.3 4.60835 15.4583 2.86668C13.625 1.14168 12.2334 1.75002 11.05 3.00002Z'
        stroke={fill}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
      <path
        d='M9.90833 4.20831C10.2667 6.50831 12.1333 8.26665 14.45 8.49998'
        stroke={fill}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
      <path
        d='M2.5 18.3333H17.5'
        stroke={fill}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
    </svg>
  );
};

export const Delete: React.FC<IconProps> = ({
  fill,
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      fill='none'
      height={size || height || 24}
      viewBox='0 0 20 20'
      width={size || width || 24}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M17.5 4.98332C14.725 4.70832 11.9333 4.56665 9.15 4.56665C7.5 4.56665 5.85 4.64998 4.2 4.81665L2.5 4.98332'
        stroke={fill}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
      />
      <path
        d='M7.08331 4.14169L7.26665 3.05002C7.39998 2.25835 7.49998 1.66669 8.90831 1.66669H11.0916C12.5 1.66669 12.6083 2.29169 12.7333 3.05835L12.9166 4.14169'
        stroke={fill}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
      />
      <path
        d='M15.7084 7.61664L15.1667 16.0083C15.075 17.3166 15 18.3333 12.675 18.3333H7.32502C5.00002 18.3333 4.92502 17.3166 4.83335 16.0083L4.29169 7.61664'
        stroke={fill}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
      />
      <path
        d='M8.60834 13.75H11.3833'
        stroke={fill}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
      />
      <path
        d='M7.91669 10.4167H12.0834'
        stroke={fill}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
      />
    </svg>
  );
};

export const ChevronDown: React.FC<IconProps> = ({
  fill,
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      fill='none'
      height={size || height || 24}
      viewBox='0 0 24 24'
      width={size || width || 24}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='m19.92 8.95-6.52 6.52c-.77.77-2.03.77-2.8 0L4.08 8.95'
        stroke={fill}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
    </svg>
  );
};

export const ChevronDownBold: React.FC<IconProps> = ({
  fill,
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      fill='none'
      height={size || height || 24}
      viewBox='0 0 24 24'
      width={size || width || 24}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M17.9188 8.17969H11.6888H6.07877C5.11877 8.17969 4.63877 9.33969 5.31877 10.0197L10.4988 15.1997C11.3288 16.0297 12.6788 16.0297 13.5088 15.1997L15.4788 13.2297L18.6888 10.0197C19.3588 9.33969 18.8788 8.17969 17.9188 8.17969Z'
        fill={fill}
      />
    </svg>
  );
};

export const NewFile: React.FC<IconProps> = ({
  fill,
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      fill='none'
      height={size || height || 24}
      viewBox='0 0 24 24'
      width={size || width || 24}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M8 2V5'
        stroke={fill}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
      <path
        d='M16 2V5'
        stroke={fill}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
      <path
        d='M21 8.5V13.63C20.11 12.92 18.98 12.5 17.75 12.5C16.52 12.5 15.37 12.93 14.47 13.66C13.26 14.61 12.5 16.1 12.5 17.75C12.5 18.73 12.78 19.67 13.26 20.45C13.63 21.06 14.11 21.59 14.68 22H8C4.5 22 3 20 3 17V8.5C3 5.5 4.5 3.5 8 3.5H16C19.5 3.5 21 5.5 21 8.5Z'
        stroke={fill}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
      <path
        d='M7 11H13'
        stroke={fill}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
      <path
        d='M7 16H9.62'
        stroke={fill}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
      <path
        d='M23 17.75C23 18.73 22.72 19.67 22.24 20.45C21.96 20.93 21.61 21.35 21.2 21.69C20.28 22.51 19.08 23 17.75 23C16.6 23 15.54 22.63 14.68 22C14.11 21.59 13.63 21.06 13.26 20.45C12.78 19.67 12.5 18.73 12.5 17.75C12.5 16.1 13.26 14.61 14.47 13.66C15.37 12.93 16.52 12.5 17.75 12.5C18.98 12.5 20.11 12.92 21 13.63C22.22 14.59 23 16.08 23 17.75Z'
        stroke={fill}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
      <path
        d='M17.75 20.25C17.75 18.87 18.87 17.75 20.25 17.75C18.87 17.75 17.75 16.63 17.75 15.25C17.75 16.63 16.63 17.75 15.25 17.75C16.63 17.75 17.75 18.87 17.75 20.25Z'
        stroke={fill}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
      />
    </svg>
  );
};

export const AddNoteBulk: React.FC<IconProps> = ({
  fill,
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      fill='none'
      height={size || height || 24}
      viewBox='0 0 24 24'
      width={size || width || 24}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M7.37 22h9.25a4.87 4.87 0 0 0 4.87-4.87V8.37a4.87 4.87 0 0 0-4.87-4.87H7.37A4.87 4.87 0 0 0 2.5 8.37v8.75c0 2.7 2.18 4.88 4.87 4.88Z'
        fill={fill}
        opacity={0.4}
      />
      <path
        d='M8.29 6.29c-.42 0-.75-.34-.75-.75V2.75a.749.749 0 1 1 1.5 0v2.78c0 .42-.33.76-.75.76ZM15.71 6.29c-.42 0-.75-.34-.75-.75V2.75a.749.749 0 1 1 1.5 0v2.78c0 .42-.33.76-.75.76ZM12 14.75h-1.69V13c0-.41-.34-.75-.75-.75s-.75.34-.75.75v1.75H7c-.41 0-.75.34-.75.75s.34.75.75.75h1.81V18c0 .41.34.75.75.75s.75-.34.75-.75v-1.75H12c.41 0 .75-.34.75-.75s-.34-.75-.75-.75Z'
        fill={fill}
      />
    </svg>
  );
};

export const CopyDocumentBulk: React.FC<IconProps> = ({
  fill,
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      fill='none'
      height={size || height || 24}
      viewBox='0 0 24 24'
      width={size || width || 24}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M15.5 13.15h-2.17c-1.78 0-3.23-1.44-3.23-3.23V7.75c0-.41-.33-.75-.75-.75H6.18C3.87 7 2 8.5 2 11.18v6.64C2 20.5 3.87 22 6.18 22h5.89c2.31 0 4.18-1.5 4.18-4.18V13.9c0-.42-.34-.75-.75-.75Z'
        fill={fill}
        opacity={0.4}
      />
      <path
        d='M17.82 2H11.93C9.67 2 7.84 3.44 7.76 6.01c.06 0 .11-.01.17-.01h5.89C16.13 6 18 7.5 18 10.18V16.83c0 .06-.01.11-.01.16 2.23-.07 4.01-1.55 4.01-4.16V6.18C22 3.5 20.13 2 17.82 2Z'
        fill={fill}
      />
      <path
        d='M11.98 7.15c-.31-.31-.84-.1-.84.33v2.62c0 1.1.93 2 2.07 2 .71.01 1.7.01 2.55.01.43 0 .65-.5.35-.8-1.09-1.09-3.03-3.04-4.13-4.16Z'
        fill={fill}
      />
    </svg>
  );
};

export const EditDocumentBulk: React.FC<IconProps> = ({
  fill,
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      fill='none'
      height={size || height || 24}
      viewBox='0 0 24 24'
      width={size || width || 24}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M15.48 3H7.52C4.07 3 2 5.06 2 8.52v7.95C2 19.94 4.07 22 7.52 22h7.95c3.46 0 5.52-2.06 5.52-5.52V8.52C21 5.06 18.93 3 15.48 3Z'
        fill={fill}
        opacity={0.4}
      />
      <path
        d='M21.02 2.98c-1.79-1.8-3.54-1.84-5.38 0L14.51 4.1c-.1.1-.13.24-.09.37.7 2.45 2.66 4.41 5.11 5.11.03.01.08.01.11.01.1 0 .2-.04.27-.11l1.11-1.12c.91-.91 1.36-1.78 1.36-2.67 0-.9-.45-1.79-1.36-2.71ZM17.86 10.42c-.27-.13-.53-.26-.77-.41-.2-.12-.4-.25-.59-.39-.16-.1-.34-.25-.52-.4-.02-.01-.08-.06-.16-.14-.31-.25-.64-.59-.95-.96-.02-.02-.08-.08-.13-.17-.1-.11-.25-.3-.38-.51-.11-.14-.24-.34-.36-.55-.15-.25-.28-.5-.4-.76-.13-.28-.23-.54-.32-.79L7.9 10.72c-.35.35-.69 1.01-.76 1.5l-.43 2.98c-.09.63.08 1.22.47 1.61.33.33.78.5 1.28.5.11 0 .22-.01.33-.02l2.97-.42c.49-.07 1.15-.4 1.5-.76l5.38-5.38c-.25-.08-.5-.19-.78-.31Z'
        fill={fill}
      />
    </svg>
  );
};

export const DeleteDocumentBulk: React.FC<IconProps> = ({
  fill,
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      fill='none'
      height={size || height || 24}
      viewBox='0 0 24 24'
      width={size || width || 24}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M21.07 5.23c-1.61-.16-3.22-.28-4.84-.37v-.01l-.22-1.3c-.15-.92-.37-2.3-2.71-2.3h-2.62c-2.33 0-2.55 1.32-2.71 2.29l-.21 1.28c-.93.06-1.86.12-2.79.21l-2.04.2c-.42.04-.72.41-.68.82.04.41.4.71.82.67l2.04-.2c5.24-.52 10.52-.32 15.82.21h.08c.38 0 .71-.29.75-.68a.766.766 0 0 0-.69-.82Z'
        fill={fill}
      />
      <path
        d='M19.23 8.14c-.24-.25-.57-.39-.91-.39H5.68c-.34 0-.68.14-.91.39-.23.25-.36.59-.34.94l.62 10.26c.11 1.52.25 3.42 3.74 3.42h6.42c3.49 0 3.63-1.89 3.74-3.42l.62-10.25c.02-.36-.11-.7-.34-.95Z'
        fill={fill}
        opacity={0.399}
      />
      <path
        clipRule='evenodd'
        d='M9.58 17a.75.75 0 0 1 .75-.75h3.33a.75.75 0 0 1 0 1.5h-3.33a.75.75 0 0 1-.75-.75ZM8.75 13a.75.75 0 0 1 .75-.75h5a.75.75 0 0 1 0 1.5h-5a.75.75 0 0 1-.75-.75Z'
        fill={fill}
        fillRule='evenodd'
      />
    </svg>
  );
};

export const CartIcon: React.FC<IconProps> = ({
  fill = 'currentColor',
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      fill='none'
      height={size || height || 24}
      viewBox='0 0 24 24'
      width={size || width || 24}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M16.25 22.5C17.2165 22.5 18 21.7165 18 20.75C18 19.7835 17.2165 19 16.25 19C15.2835 19 14.5 19.7835 14.5 20.75C14.5 21.7165 15.2835 22.5 16.25 22.5Z'
        fill={fill}
      />
      <path
        d='M8.25 22.5C9.2165 22.5 10 21.7165 10 20.75C10 19.7835 9.2165 19 8.25 19C7.2835 19 6.5 19.7835 6.5 20.75C6.5 21.7165 7.2835 22.5 8.25 22.5Z'
        fill={fill}
      />
      <path
        d='M4.84 3.94L4.64 6.39C4.6 6.86 4.97 7.25 5.44 7.25H20.75C21.17 7.25 21.52 6.93 21.55 6.51C21.68 4.74 20.33 3.3 18.56 3.3H6.27C6.17 2.86 5.97 2.44 5.66 2.09C5.16 1.56 4.46 1.25 3.74 1.25H2C1.59 1.25 1.25 1.59 1.25 2C1.25 2.41 1.59 2.75 2 2.75H3.74C4.05 2.75 4.34 2.88 4.55 3.1C4.76 3.33 4.86 3.63 4.84 3.94Z'
        fill={fill}
      />
      <path
        d='M20.5101 8.75H5.17005C4.75005 8.75 4.41005 9.07 4.37005 9.48L4.01005 13.83C3.87005 15.54 5.21005 17 6.92005 17H18.0401C19.5401 17 20.8601 15.77 20.9701 14.27L21.3001 9.6C21.3401 9.14 20.9801 8.75 20.5101 8.75Z'
        fill={fill}
      />
    </svg>
  );
};

export const Flash: React.FC<IconProps> = ({
  fill = 'currentColor',
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      fill='none'
      height={size || height}
      viewBox='0 0 24 24'
      width={size || width}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M6.09 13.28h3.09v7.2c0 1.68.91 2.02 2.02.76l7.57-8.6c.93-1.05.54-1.92-.87-1.92h-3.09v-7.2c0-1.68-.91-2.02-2.02-.76l-7.57 8.6c-.92 1.06-.53 1.92.87 1.92Z'
        stroke={fill}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
    </svg>
  );
};

export const Server: React.FC<IconProps> = ({
  fill = 'currentColor',
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      fill='none'
      height={size || height}
      viewBox='0 0 24 24'
      width={size || width}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M19.32 10H4.69c-1.48 0-2.68-1.21-2.68-2.68V4.69c0-1.48 1.21-2.68 2.68-2.68h14.63C20.8 2.01 22 3.22 22 4.69v2.63C22 8.79 20.79 10 19.32 10ZM19.32 22H4.69c-1.48 0-2.68-1.21-2.68-2.68v-2.63c0-1.48 1.21-2.68 2.68-2.68h14.63c1.48 0 2.68 1.21 2.68 2.68v2.63c0 1.47-1.21 2.68-2.68 2.68ZM6 5v2M10 5v2M6 17v2M10 17v2M14 6h4M14 18h4'
        stroke={fill}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
      />
    </svg>
  );
};

export const TagUser: React.FC<IconProps> = ({
  fill = 'currentColor',
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      fill='none'
      height={size || height}
      viewBox='0 0 24 24'
      width={size || width}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M18 18.86h-.76c-.8 0-1.56.31-2.12.87l-1.71 1.69c-.78.77-2.05.77-2.83 0l-1.71-1.69c-.56-.56-1.33-.87-2.12-.87H6c-1.66 0-3-1.33-3-2.97V4.98c0-1.64 1.34-2.97 3-2.97h12c1.66 0 3 1.33 3 2.97v10.91c0 1.63-1.34 2.97-3 2.97Z'
        stroke={fill}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeMiterlimit={10}
        strokeWidth={1.5}
      />
      <path
        d='M12 10a2.33 2.33 0 1 0 0-4.66A2.33 2.33 0 0 0 12 10ZM16 15.66c0-1.8-1.79-3.26-4-3.26s-4 1.46-4 3.26'
        stroke={fill}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
      />
    </svg>
  );
};

export const Scale: React.FC<IconProps> = ({
  fill = 'currentColor',
  size,
  height,
  width,
  ...props
}) => {
  return (
    <svg
      fill='none'
      height={size || height}
      viewBox='0 0 24 24'
      width={size || width}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <path
        d='M9 22h6c5 0 7-2 7-7V9c0-5-2-7-7-7H9C4 2 2 4 2 9v6c0 5 2 7 7 7ZM18 6 6 18'
        stroke={fill}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
      />
      <path
        d='M18 10V6h-4M6 14v4h4'
        stroke={fill}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={1.5}
      />
    </svg>
  );
};

export const Search: React.FC<IconProps> = ({
  size,
  fill,
  width = 24,
  height = 24,
  ...props
}) => {
  return (
    <svg
      fill='none'
      height={size || height}
      viewBox='0 0 24 24'
      width={size || width}
      {...props}
    >
      <path
        d='M11.5 21a9.5 9.5 0 1 0 0-19 9.5 9.5 0 0 0 0 19ZM22 22l-2-2'
        stroke={fill}
        strokeLinecap='round'
        strokeLinejoin='round'
        strokeWidth={2}
      />
    </svg>
  );
};

// ===

export const Logo: React.FC<IconSvgProps> = ({
  size = 36,
  width,
  height,
  ...props
}) => (
  <svg
    fill='none'
    height={size || height}
    viewBox='0 0 32 32'
    width={size || width}
    {...props}
  >
    <path
      clipRule='evenodd'
      d='M17.6482 10.1305L15.8785 7.02583L7.02979 22.5499H10.5278L17.6482 10.1305ZM19.8798 14.0457L18.11 17.1983L19.394 19.4511H16.8453L15.1056 22.5499H24.7272L19.8798 14.0457Z'
      fill='currentColor'
      fillRule='evenodd'
    />
  </svg>
);

export const DiscordIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox='0 0 24 24'
      width={size || width}
      {...props}
    >
      <path
        d='M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z'
        fill='currentColor'
      />
    </svg>
  );
};

export const TwitterIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox='0 0 24 24'
      width={size || width}
      {...props}
    >
      <path
        d='M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z'
        fill='currentColor'
      />
    </svg>
  );
};

export const GithubIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox='0 0 24 24'
      width={size || width}
      {...props}
    >
      <path
        clipRule='evenodd'
        d='M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z'
        fill='currentColor'
        fillRule='evenodd'
      />
    </svg>
  );
};

export const HeartFilledIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden='true'
    focusable='false'
    height={size || height}
    role='presentation'
    viewBox='0 0 24 24'
    width={size || width}
    {...props}
  >
    <path
      d='M12.62 20.81c-.34.12-.9.12-1.24 0C8.48 19.82 2 15.69 2 8.69 2 5.6 4.49 3.1 7.56 3.1c1.82 0 3.43.88 4.44 2.24a5.53 5.53 0 0 1 4.44-2.24C19.51 3.1 22 5.6 22 8.69c0 7-6.48 11.13-9.38 12.12Z'
      fill='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
    />
  </svg>
);

export const MagicIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden='true'
    fill='none'
    focusable='false'
    height={size || height}
    role='presentation'
    viewBox='0 0 24 24'
    width={size || width}
    {...props}
  >
    <path
      d='M3.5 20.5c.83.83 2.17.83 3 0l13-13c.83-.83.83-2.17 0-3-.83-.83-2.17-.83-3 0l-13 13c-.83.83-.83 2.17 0 3ZM18.01 8.99l-3-3'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
    />
    <path
      d='M8.5 2.44 10 2l-.44 1.5L10 5l-1.5-.44L7 5l.44-1.5L7 2l1.5.44ZM4.5 8.44 6 8l-.44 1.5L6 11l-1.5-.44L3 11l.44-1.5L3 8l1.5.44ZM19.5 13.44 21 13l-.44 1.5L21 16l-1.5-.44L18 16l.44-1.5L18 13l1.5.44Z'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </svg>
);

export const FlashIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden='true'
    fill='none'
    focusable='false'
    height={size || height}
    role='presentation'
    viewBox='0 0 24 24'
    width={size || width}
    {...props}
  >
    <path
      d='M6.09 13.28h3.09v7.2c0 1.68.91 2.02 2.02.76l7.57-8.6c.93-1.05.54-1.92-.87-1.92h-3.09v-7.2c0-1.68-.91-2.02-2.02-.76l-7.57 8.6c-.92 1.06-.53 1.92.87 1.92Z'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeMiterlimit={10}
      strokeWidth={1.5}
    />
  </svg>
);

export const DevicesIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden='true'
    fill='none'
    focusable='false'
    height={size || height}
    role='presentation'
    viewBox='0 0 24 24'
    width={size || width}
    {...props}
  >
    <path
      d='M10 16.95H6.21c-3.37 0-4.21-.84-4.21-4.21v-6c0-3.37.84-4.21 4.21-4.21h10.53c3.37 0 4.21.84 4.21 4.21M10 21.47v-4.52M2 12.95h8M6.74 21.47H10'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
    />
    <path
      d='M22 12.8v5.71c0 2.37-.59 2.96-2.96 2.96h-3.55c-2.37 0-2.96-.59-2.96-2.96V12.8c0-2.37.59-2.96 2.96-2.96h3.55c2.37 0 2.96.59 2.96 2.96Z'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
    />
    <path
      d='M17.244 18.25h.01'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={2}
    />
  </svg>
);

export const PaletteIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden='true'
    fill='none'
    focusable='false'
    height={size || height}
    role='presentation'
    viewBox='0 0 24 24'
    width={size || width}
    {...props}
  >
    <g
      fill='none'
      stroke='currentcolor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
    >
      <path d='M10 4.5V18a4.007 4.007 0 01-1.14 2.79l-.04.04a3.149 3.149 0 01-.28.25 3.5 3.5 0 01-.99.6c-.11.05-.22.09-.33.13A3.888 3.888 0 016 22a4.255 4.255 0 01-.8-.08c-.13-.03-.26-.06-.39-.1a3.611 3.611 0 01-.46-.17c0-.01 0-.01-.01 0a5.042 5.042 0 01-.8-.49l-.01-.01a2.744 2.744 0 01-.36-.32c-.11-.12-.22-.24-.33-.37a5.042 5.042 0 01-.49-.8c.01-.01.01-.01 0-.01a.031.031 0 00-.01-.02c-.06-.14-.11-.29-.16-.44-.04-.13-.07-.26-.1-.39A4.255 4.255 0 012 18V4.5A2.362 2.362 0 014.5 2h3A2.362 2.362 0 0110 4.5z' />
      <path d='M22 16.5v3a2.362 2.362 0 01-2.5 2.5H6a3.888 3.888 0 001.22-.19c.11-.04.22-.08.33-.13a3.5 3.5 0 00.99-.6 3.149 3.149 0 00.28-.25l.04-.04 6.8-6.79h3.84a2.362 2.362 0 012.5 2.5zM4.81 21.82a3.835 3.835 0 01-1.64-.99 3.835 3.835 0 01-.99-1.64 4.02 4.02 0 002.63 2.63z' />
      <path d='M18.37 11.29L15.66 14l-6.8 6.79A4.007 4.007 0 0010 18V8.335l2.71-2.705a2.368 2.368 0 013.54 0l2.12 2.12a2.368 2.368 0 010 3.54zM7 18a1 1 0 11-1-1 1 1 0 011 1z' />
    </g>
  </svg>
);

export const GamingConsoleIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden='true'
    fill='none'
    focusable='false'
    height={size || height}
    role='presentation'
    viewBox='0 0 24 24'
    width={size || width}
    {...props}
  >
    <path
      d='M21 7v10c0 3-1.5 5-5 5H8c-3.5 0-5-2-5-5V7c0-3 1.5-5 5-5h8c3.5 0 5 2 5 5Z'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeMiterlimit={10}
      strokeWidth={1.5}
    />
    <path
      d='M16.25 11h-8.5C6.79 11 6 10.21 6 9.25v-2.5C6 5.79 6.79 5 7.75 5h8.5c.96 0 1.75.79 1.75 1.75v2.5c0 .96-.79 1.75-1.75 1.75ZM10.3 15.28 8 17.58M8.03 15.31l2.3 2.3'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeMiterlimit={10}
      strokeWidth={1.5}
    />
    <path
      d='M16.49 15.33h.02M14.49 17.5v-.02'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeMiterlimit={10}
      strokeWidth={2}
    />
  </svg>
);

export const StarIcon = ({
  size = 24,
  width,
  height,
  fill = 'none',
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden='true'
    fill={fill}
    focusable='false'
    height={size || height}
    role='presentation'
    viewBox='0 0 24 24'
    width={size || width}
    {...props}
  >
    <path
      d='M13.73 3.51001L15.49 7.03001C15.73 7.52002 16.37 7.99001 16.91 8.08001L20.1 8.61001C22.14 8.95001 22.62 10.43 21.15 11.89L18.67 14.37C18.25 14.79 18.02 15.6 18.15 16.18L18.86 19.25C19.42 21.68 18.13 22.62 15.98 21.35L12.99 19.58C12.45 19.26 11.56 19.26 11.01 19.58L8.01997 21.35C5.87997 22.62 4.57997 21.67 5.13997 19.25L5.84997 16.18C5.97997 15.6 5.74997 14.79 5.32997 14.37L2.84997 11.89C1.38997 10.43 1.85997 8.95001 3.89997 8.61001L7.08997 8.08001C7.61997 7.99001 8.25997 7.52002 8.49997 7.03001L10.26 3.51001C11.22 1.60001 12.78 1.60001 13.73 3.51001Z'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='1.5'
    />
  </svg>
);

export const KeyboardBoldIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden='true'
    fill='none'
    focusable='false'
    height={size || height}
    role='presentation'
    viewBox='0 0 24 24'
    width={size || width}
    {...props}
  >
    <path
      d='M18.27 3.35C17.8 3.28 17.26 3.25 16.5 3.25H7.5C6.75 3.25 6.2 3.28 5.76 3.34C2.41 3.71 1.75 5.7 1.75 9V15C1.75 18.3 2.41 20.29 5.73 20.65C6.2 20.72 6.74 20.75 7.5 20.75H16.5C17.25 20.75 17.8 20.72 18.24 20.66C21.59 20.29 22.25 18.31 22.25 15V9C22.25 5.7 21.59 3.71 18.27 3.35ZM10.09 9C10.65 9 11.1 9.45 11.1 10C11.1 10.55 10.65 11 10.1 11C9.55 11 9.1 10.55 9.1 10C9.1 9.45 9.54 9 10.09 9ZM7.09 9C7.66 9 8.1 9.45 8.1 10C8.1 10.55 7.65 11 7.1 11C6.55 11 6.1 10.55 6.1 10C6.1 9.45 6.54 9 7.09 9ZM17 16.25H7.02C6.61 16.25 6.26 15.91 6.26 15.5C6.26 15.09 6.59 14.75 7 14.75H17C17.41 14.75 17.75 15.09 17.75 15.5C17.75 15.91 17.41 16.25 17 16.25ZM17 10.75H13.5C13.09 10.75 12.75 10.41 12.75 10C12.75 9.59 13.09 9.25 13.5 9.25H17C17.41 9.25 17.75 9.59 17.75 10C17.75 10.41 17.41 10.75 17 10.75Z'
      fill='currentColor'
    />
  </svg>
);

export const MouseCircleBoldIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden='true'
    fill='none'
    focusable='false'
    height={size || height}
    role='presentation'
    viewBox='0 0 24 24'
    width={size || width}
    {...props}
  >
    <path
      d='M20.9597 17.8385L19.3297 18.3885C18.8797 18.5385 18.5197 18.8885 18.3697 19.3485L17.8197 20.9785C17.3497 22.3885 15.3697 22.3585 14.9297 20.9485L13.0797 14.9985C12.7197 13.8185 13.8097 12.7185 14.9797 13.0885L20.9397 14.9385C22.3397 15.3785 22.3597 17.3685 20.9597 17.8385Z'
      fill='currentColor'
    />
    <path
      d='M20.9994 11.4994C20.9994 11.9294 20.9694 12.3594 20.9194 12.7794C20.8794 13.0794 20.5694 13.2594 20.2794 13.1694L15.4294 11.6594C14.3494 11.3294 13.1994 11.6094 12.3994 12.3994C11.5994 13.1994 11.3094 14.3694 11.6494 15.4494L13.1494 20.2794C13.2394 20.5694 13.0494 20.8794 12.7494 20.9194C12.3294 20.9694 11.9194 20.9994 11.4994 20.9994C6.15942 20.9994 1.85942 16.6094 1.99942 11.2294C2.13942 6.26942 6.26942 2.13942 11.2294 1.99942C16.6094 1.85942 20.9994 6.15942 20.9994 11.4994Z'
      fill='currentColor'
    />
  </svg>
);

export const SquaresBoldIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden='true'
    fill='none'
    focusable='false'
    height={size || height}
    role='presentation'
    viewBox='0 0 24 24'
    width={size || width}
    {...props}
  >
    <path
      d='M12 18.5V19.38C12 21.25 11.25 22 9.37 22H4.62C3.17 22 2 20.83 2 19.38V14.63C2 12.75 2.75 12 4.62 12H5.5V15.5C5.5 17.16 6.84 18.5 8.5 18.5H12Z'
      fill='currentColor'
    />
    <path
      d='M17 13.5V14.37C17 15.82 15.82 17 14.37 17H9.62C7.75 17 7 16.25 7 14.37V9.62C7 8.17 8.17 7 9.62 7H10.5V10.5C10.5 12.16 11.84 13.5 13.5 13.5H17Z'
      fill='currentColor'
    />
    <path
      d='M22 4.62V9.37C22 11.25 21.25 12 19.37 12H14.62C12.75 12 12 11.25 12 9.37V4.62C12 2.75 12.75 2 14.62 2H19.37C21.25 2 22 2.75 22 4.62Z'
      fill='currentColor'
    />
  </svg>
);

export const FatrowsBoldIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden='true'
    fill='none'
    focusable='false'
    height={size || height}
    role='presentation'
    viewBox='0 0 24 24'
    width={size || width}
    {...props}
  >
    <path
      d='M19.9 13.5H4.1C2.6 13.5 2 14.14 2 15.73V19.77C2 21.36 2.6 22 4.1 22H19.9C21.4 22 22 21.36 22 19.77V15.73C22 14.14 21.4 13.5 19.9 13.5Z'
      fill='currentColor'
    />
    <path
      d='M12.9 2H4.1C2.6 2 2 2.64 2 4.23V8.27C2 9.86 2.6 10.5 4.1 10.5H12.9C14.4 10.5 15 9.86 15 8.27V4.23C15 2.64 14.4 2 12.9 2Z'
      fill='currentColor'
    />
  </svg>
);

export const EyeBoldIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden='true'
    fill='none'
    focusable='false'
    height={size || height}
    role='presentation'
    viewBox='0 0 24 24'
    width={size || width}
    {...props}
  >
    <path
      d='M21.25 9.14969C18.94 5.51969 15.56 3.42969 12 3.42969C10.22 3.42969 8.49 3.94969 6.91 4.91969C5.33 5.89969 3.91 7.32969 2.75 9.14969C1.75 10.7197 1.75 13.2697 2.75 14.8397C5.06 18.4797 8.44 20.5597 12 20.5597C13.78 20.5597 15.51 20.0397 17.09 19.0697C18.67 18.0897 20.09 16.6597 21.25 14.8397C22.25 13.2797 22.25 10.7197 21.25 9.14969ZM12 16.0397C9.76 16.0397 7.96 14.2297 7.96 11.9997C7.96 9.76969 9.76 7.95969 12 7.95969C14.24 7.95969 16.04 9.76969 16.04 11.9997C16.04 14.2297 14.24 16.0397 12 16.0397Z'
      fill='currentColor'
    />
    <path
      d='M11.9984 9.14062C10.4284 9.14062 9.14844 10.4206 9.14844 12.0006C9.14844 13.5706 10.4284 14.8506 11.9984 14.8506C13.5684 14.8506 14.8584 13.5706 14.8584 12.0006C14.8584 10.4306 13.5684 9.14062 11.9984 9.14062Z'
      fill='currentColor'
    />
  </svg>
);

export const KeyboardOpenBoldIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden='true'
    fill='none'
    focusable='false'
    height={size || height}
    role='presentation'
    viewBox='0 0 24 24'
    width={size || width}
    {...props}
  >
    <path
      d='M17 22.75H7C6.59 22.75 6.25 22.41 6.25 22C6.25 21.59 6.59 21.25 7 21.25H17C17.41 21.25 17.75 21.59 17.75 22C17.75 22.41 17.41 22.75 17 22.75Z'
      fill='currentColor'
    />
    <path
      d='M18 2H6C3.79 2 2 3.79 2 6V15C2 17.21 3.79 19 6 19H18C20.21 19 22 17.21 22 15V6C22 3.79 20.21 2 18 2ZM9.99 7.32C10.55 7.32 11 7.77 11 8.32C11 8.87 10.55 9.32 10 9.32C9.45 9.32 9 8.87 9 8.32C9 7.77 9.44 7.32 9.99 7.32ZM6.84 7.32C7.4 7.32 7.85 7.77 7.85 8.32C7.85 8.87 7.4 9.32 6.85 9.32C6.3 9.32 5.85 8.87 5.85 8.32C5.85 7.77 6.28 7.32 6.84 7.32ZM17.26 14.86H6.76C6.34 14.86 6 14.52 6 14.11C6 13.7 6.33 13.36 6.74 13.36H17.27C17.68 13.36 18.02 13.7 18.02 14.11C18.02 14.52 17.68 14.86 17.26 14.86ZM17.26 9.07H13.58C13.17 9.07 12.83 8.73 12.83 8.32C12.83 7.91 13.17 7.57 13.58 7.57H17.26C17.67 7.57 18.01 7.91 18.01 8.32C18.01 8.73 17.68 9.07 17.26 9.07Z'
      fill='currentColor'
    />
  </svg>
);

export const InfoBoldIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden='true'
    fill='none'
    focusable='false'
    height={size || height}
    role='presentation'
    viewBox='0 0 24 24'
    width={size || width}
    {...props}
  >
    <path
      d='M12 2C6.49 2 2 6.49 2 12C2 17.51 6.49 22 12 22C17.51 22 22 17.51 22 12C22 6.49 17.51 2 12 2ZM11.25 8C11.25 7.59 11.59 7.25 12 7.25C12.41 7.25 12.75 7.59 12.75 8V13C12.75 13.41 12.41 13.75 12 13.75C11.59 13.75 11.25 13.41 11.25 13V8ZM12.92 16.38C12.87 16.51 12.8 16.61 12.71 16.71C12.61 16.8 12.5 16.87 12.38 16.92C12.26 16.97 12.13 17 12 17C11.87 17 11.74 16.97 11.62 16.92C11.5 16.87 11.39 16.8 11.29 16.71C11.2 16.61 11.13 16.51 11.08 16.38C11.03 16.26 11 16.13 11 16C11 15.87 11.03 15.74 11.08 15.62C11.13 15.5 11.2 15.39 11.29 15.29C11.39 15.2 11.5 15.13 11.62 15.08C11.86 14.98 12.14 14.98 12.38 15.08C12.5 15.13 12.61 15.2 12.71 15.29C12.8 15.39 12.87 15.5 12.92 15.62C12.97 15.74 13 15.87 13 16C13 16.13 12.97 16.26 12.92 16.38Z'
      fill='currentColor'
    />
  </svg>
);

export const PauseCircleBoldIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden='true'
    fill='none'
    focusable='false'
    height={size || height}
    role='presentation'
    viewBox='0 0 24 24'
    width={size || width}
    {...props}
  >
    <path
      d='M11.9688 2C6.44875 2 1.96875 6.48 1.96875 12C1.96875 17.52 6.44875 22 11.9688 22C17.4888 22 21.9688 17.52 21.9688 12C21.9688 6.48 17.4988 2 11.9688 2ZM10.7188 15.03C10.7188 15.51 10.5188 15.7 10.0087 15.7H8.70875C8.19875 15.7 7.99875 15.51 7.99875 15.03V8.97C7.99875 8.49 8.19875 8.3 8.70875 8.3H9.99875C10.5087 8.3 10.7087 8.49 10.7087 8.97V15.03H10.7188ZM15.9987 15.03C15.9987 15.51 15.7987 15.7 15.2887 15.7H13.9987C13.4887 15.7 13.2887 15.51 13.2887 15.03V8.97C13.2887 8.49 13.4887 8.3 13.9987 8.3H15.2887C15.7987 8.3 15.9987 8.49 15.9987 8.97V15.03Z'
      fill='currentColor'
    />
  </svg>
);

export const NextBoldIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden='true'
    fill='none'
    focusable='false'
    height={size || height}
    role='presentation'
    viewBox='0 0 24 24'
    width={size || width}
    {...props}
  >
    <path
      d='M3.76172 7.21957V16.7896C3.76172 18.7496 5.89172 19.9796 7.59172 18.9996L11.7417 16.6096L15.8917 14.2096C17.5917 13.2296 17.5917 10.7796 15.8917 9.79957L11.7417 7.39957L7.59172 5.00957C5.89172 4.02957 3.76172 5.24957 3.76172 7.21957Z'
      fill='currentColor'
    />
    <path
      d='M20.2383 18.9303C19.8283 18.9303 19.4883 18.5903 19.4883 18.1803V5.82031C19.4883 5.41031 19.8283 5.07031 20.2383 5.07031C20.6483 5.07031 20.9883 5.41031 20.9883 5.82031V18.1803C20.9883 18.5903 20.6583 18.9303 20.2383 18.9303Z'
      fill='currentColor'
    />
  </svg>
);

export const PreviousBoldIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden='true'
    fill='none'
    focusable='false'
    height={size || height}
    role='presentation'
    viewBox='0 0 24 24'
    width={size || width}
    {...props}
  >
    <path
      d='M20.2409 7.21957V16.7896C20.2409 18.7496 18.1109 19.9796 16.4109 18.9996L12.2609 16.6096L8.11094 14.2096C6.41094 13.2296 6.41094 10.7796 8.11094 9.79957L12.2609 7.39957L16.4109 5.00957C18.1109 4.02957 20.2409 5.24957 20.2409 7.21957Z'
      fill='currentColor'
    />
    <path
      d='M3.76172 18.9303C3.35172 18.9303 3.01172 18.5903 3.01172 18.1803V5.82031C3.01172 5.41031 3.35172 5.07031 3.76172 5.07031C4.17172 5.07031 4.51172 5.41031 4.51172 5.82031V18.1803C4.51172 18.5903 4.17172 18.9303 3.76172 18.9303Z'
      fill='currentColor'
    />
  </svg>
);

export const RepeatOneBoldIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden='true'
    fill='none'
    focusable='false'
    height={size || height}
    role='presentation'
    viewBox='0 0 24 24'
    width={size || width}
    {...props}
  >
    <path
      d='M3.91 17.1814C3.72 17.1814 3.53 17.1114 3.38 16.9614C2.01 15.5814 1.25 13.7614 1.25 11.8314C1.25 7.82139 4.5 4.56139 8.5 4.56139L14.57 4.58139L13.48 3.54139C13.18 3.25139 13.17 2.78139 13.46 2.48139C13.75 2.18139 14.22 2.17139 14.52 2.46139L16.96 4.80139C17.18 5.01139 17.25 5.34139 17.14 5.62139C17.03 5.90139 16.75 6.09139 16.44 6.09139L8.5 6.07139C5.33 6.07139 2.75 8.66139 2.75 11.8414C2.75 13.3714 3.35 14.8214 4.44 15.9114C4.73 16.2014 4.73 16.6814 4.44 16.9714C4.29 17.1114 4.1 17.1814 3.91 17.1814Z'
      fill='currentColor'
    />
    <path
      d='M9.9999 21.75C9.8099 21.75 9.6299 21.68 9.4799 21.54L7.0399 19.2C6.8199 18.99 6.7499 18.66 6.8599 18.38C6.9799 18.1 7.2599 17.95 7.5599 17.91L15.5099 17.93C18.6799 17.93 21.2599 15.34 21.2599 12.16C21.2599 10.63 20.6599 9.18 19.5699 8.09C19.2799 7.8 19.2799 7.32 19.5699 7.03C19.8599 6.74 20.3399 6.74 20.6299 7.03C21.9999 8.41 22.7599 10.23 22.7599 12.16C22.7599 16.17 19.5099 19.43 15.5099 19.43L9.4399 19.41L10.5299 20.45C10.8299 20.74 10.8399 21.21 10.5499 21.51C10.3899 21.67 10.1999 21.75 9.9999 21.75Z'
      fill='currentColor'
    />
    <path
      d='M12.2485 15.4191C11.8385 15.4191 11.4985 15.0791 11.4985 14.6691V11.2791L11.3085 11.4891C11.0285 11.7991 10.5585 11.8191 10.2485 11.5491C9.93853 11.2791 9.91853 10.7991 10.1885 10.4891L11.6885 8.81909C11.8985 8.58909 12.2285 8.50909 12.5185 8.61909C12.8085 8.73909 12.9985 9.00909 12.9985 9.32909V14.6791C12.9985 15.0891 12.6585 15.4191 12.2485 15.4191Z'
      fill='currentColor'
    />
  </svg>
);
export const ShuffleBoldIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden='true'
    fill='none'
    focusable='false'
    height={size || height}
    role='presentation'
    viewBox='0 0 24 24'
    width={size || width}
    {...props}
  >
    <path
      d='M21.7507 17.9809C21.7507 17.9609 21.7407 17.9409 21.7407 17.9209C21.7307 17.8409 21.7207 17.7609 21.6907 17.6909C21.6507 17.6009 21.6007 17.5309 21.5407 17.4609C21.5407 17.4609 21.5407 17.4509 21.5307 17.4509C21.4607 17.3809 21.3807 17.3309 21.2907 17.2909C21.2007 17.2509 21.1007 17.2309 21.0007 17.2309L16.3307 17.2509C16.3307 17.2509 16.3307 17.2509 16.3207 17.2509C15.7207 17.2509 15.1407 16.9709 14.7807 16.4909L13.5607 14.9209C13.3107 14.5909 12.8407 14.5309 12.5107 14.7909C12.1807 15.0509 12.1207 15.5109 12.3807 15.8409L13.6007 17.4109C14.2507 18.2509 15.2707 18.7509 16.3307 18.7509H16.3407L19.1907 18.7409L18.4807 19.4509C18.1907 19.7409 18.1907 20.2209 18.4807 20.5109C18.6307 20.6609 18.8207 20.7309 19.0107 20.7309C19.2007 20.7309 19.3907 20.6609 19.5407 20.5109L21.5407 18.5109C21.6107 18.4409 21.6607 18.3609 21.7007 18.2709C21.7307 18.1709 21.7507 18.0709 21.7507 17.9809Z'
      fill='currentColor'
    />
    <path
      d='M8.42 6.69172C7.77 5.79172 6.73 5.26172 5.62 5.26172C5.61 5.26172 5.61 5.26172 5.6 5.26172L3 5.27172C2.59 5.27172 2.25 5.61172 2.25 6.02172C2.25 6.43172 2.59 6.77172 3 6.77172L5.61 6.76172H5.62C6.25 6.76172 6.84 7.06172 7.2 7.57172L8.28 9.07172C8.43 9.27172 8.66 9.38172 8.89 9.38172C9.04 9.38172 9.2 9.33172 9.33 9.24172C9.67 8.99172 9.74 8.52172 9.5 8.19172L8.42 6.69172Z'
      fill='currentColor'
    />
    <path
      d='M21.74 6.07875C21.74 6.05875 21.75 6.03875 21.75 6.02875C21.75 5.92875 21.73 5.82875 21.69 5.73875C21.65 5.64875 21.6 5.56875 21.53 5.49875L19.53 3.49875C19.24 3.20875 18.76 3.20875 18.47 3.49875C18.18 3.78875 18.18 4.26875 18.47 4.55875L19.18 5.26875L16.45 5.25875C16.44 5.25875 16.44 5.25875 16.43 5.25875C15.28 5.25875 14.2 5.82875 13.56 6.79875L7.17 16.3787C6.81 16.9187 6.2 17.2487 5.55 17.2487H5.54L3 17.2287C2.59 17.2287 2.25 17.5587 2.25 17.9787C2.25 18.3887 2.58 18.7287 3 18.7287L5.55 18.7387C5.56 18.7387 5.56 18.7387 5.57 18.7387C6.73 18.7387 7.8 18.1688 8.44 17.1988L14.83 7.61875C15.19 7.07875 15.8 6.74875 16.45 6.74875H16.46L21 6.76875C21.1 6.76875 21.19 6.74875 21.29 6.70875C21.38 6.66875 21.46 6.61875 21.53 6.54875C21.53 6.54875 21.53 6.53875 21.54 6.53875C21.6 6.46875 21.66 6.39875 21.69 6.30875C21.72 6.23875 21.73 6.15875 21.74 6.07875Z'
      fill='currentColor'
    />
  </svg>
);
export const HeartLinearIcon = ({
  size = 24,
  width,
  height,
  strokeWidth = 1.5,
  fill = 'none',
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden='true'
    fill={fill}
    focusable='false'
    height={size || height}
    role='presentation'
    viewBox='0 0 24 24'
    width={size || width}
    {...props}
  >
    <path
      d='M12.62 20.81C12.28 20.93 11.72 20.93 11.38 20.81C8.48 19.82 2 15.69 2 8.68998C2 5.59998 4.49 3.09998 7.56 3.09998C9.38 3.09998 10.99 3.97998 12 5.33998C13.01 3.97998 14.63 3.09998 16.44 3.09998C19.51 3.09998 22 5.59998 22 8.68998C22 15.69 15.52 19.82 12.62 20.81Z'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={strokeWidth}
    />
  </svg>
);
export const ServerLinearIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden='true'
    fill='none'
    focusable='false'
    height={size || height}
    role='presentation'
    viewBox='0 0 24 24'
    width={size || width}
    {...props}
  >
    <path
      d='M19.32 10H4.69c-1.48 0-2.68-1.21-2.68-2.68V4.69c0-1.48 1.21-2.68 2.68-2.68h14.63C20.8 2.01 22 3.22 22 4.69v2.63C22 8.79 20.79 10 19.32 10ZM19.32 22H4.69c-1.48 0-2.68-1.21-2.68-2.68v-2.63c0-1.48 1.21-2.68 2.68-2.68h14.63c1.48 0 2.68 1.21 2.68 2.68v2.63c0 1.47-1.21 2.68-2.68 2.68ZM6 5v2M10 5v2M6 17v2M10 17v2M14 6h4M14 18h4'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
    />
  </svg>
);
export const TagUserLinearIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden='true'
    fill='none'
    focusable='false'
    height={size || height}
    role='presentation'
    viewBox='0 0 24 24'
    width={size || width}
    {...props}
  >
    <path
      d='M18 18.86h-.76c-.8 0-1.56.31-2.12.87l-1.71 1.69c-.78.77-2.05.77-2.83 0l-1.71-1.69c-.56-.56-1.33-.87-2.12-.87H6c-1.66 0-3-1.33-3-2.97V4.98c0-1.64 1.34-2.97 3-2.97h12c1.66 0 3 1.33 3 2.97v10.91c0 1.63-1.34 2.97-3 2.97Z'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeMiterlimit={10}
      strokeWidth={1.5}
    />
    <path
      d='M12 10a2.33 2.33 0 1 0 0-4.66A2.33 2.33 0 0 0 12 10ZM16 15.66c0-1.8-1.79-3.26-4-3.26s-4 1.46-4 3.26'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
    />
  </svg>
);
export const MouseCircleLinearIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden='true'
    fill='none'
    focusable='false'
    height={size || height}
    role='presentation'
    viewBox='0 0 24 24'
    width={size || width}
    {...props}
  >
    <path
      d='m20.96 17.84-1.63.55c-.45.15-.81.5-.96.96l-.55 1.63c-.47 1.41-2.45 1.38-2.89-.03L13.08 15c-.36-1.18.73-2.28 1.9-1.91l5.96 1.85c1.4.44 1.42 2.43.02 2.9Z'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
    />
    <path
      d='M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12s4.48 10 10 10'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
    />
  </svg>
);
export const CodeDocumentLinearIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden='true'
    fill='none'
    focusable='false'
    height={size || height}
    role='presentation'
    viewBox='0 0 24 24'
    width={size || width}
    {...props}
  >
    <path
      d='M21 7V17C21 20 19.5 22 16 22H8C4.5 22 3 20 3 17V7C3 4 4.5 2 8 2H16C19.5 2 21 4 21 7Z'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeMiterlimit='10'
      strokeWidth='1.5'
    />
    <path
      d='M14.5 4.5V6.5C14.5 7.6 15.4 8.5 16.5 8.5H18.5'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeMiterlimit='10'
      strokeWidth='1.5'
    />
    <path
      d='M10 13L8 15L10 17'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeMiterlimit='10'
      strokeWidth='1.5'
    />
    <path
      d='M14 13L16 15L14 17'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeMiterlimit='10'
      strokeWidth='1.5'
    />
  </svg>
);
export const HtmlLogoLinearIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden='true'
    fill='none'
    focusable='false'
    height={size || height}
    role='presentation'
    viewBox='0 0 24 24'
    width={size || width}
    {...props}
  >
    <path
      d='M4.1 2h15.8c.6 0 1.1.5 1 1.1l-1.8 16.2c0 .4-.3.7-.7.9l-6.1 1.7c-.2.1-.4.1-.5 0l-6.1-1.7c-.4-.1-.7-.4-.7-.9L3.1 3.1c0-.6.4-1.1 1-1.1Z'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeMiterlimit={10}
      strokeWidth={1.5}
    />
    <path
      d='M16.2 6.8H7.8l.4 4.4h7.6l-.6 5-3.4 1-3.6-1v-2'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeMiterlimit={10}
      strokeWidth={1.5}
    />
  </svg>
);

export const CubesLinearIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden='true'
    fill='none'
    focusable='false'
    height={size || height}
    role='presentation'
    viewBox='0 0 24 24'
    width={size || width}
    {...props}
  >
    <path
      d='M22 15C22 18.87 18.87 22 15 22L16.05 20.25'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='1.5'
    />
    <path
      d='M2 9C2 5.13 5.13 2 9 2L7.95 3.75'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='1.5'
    />
    <path
      d='M13.7 4.44995L17.6799 6.74994L21.6199 4.45996'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='1.5'
    />
    <path
      d='M17.6799 10.82V6.73999'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='1.5'
    />
    <path
      d='M16.74 2.21L14.34 3.53996C13.8 3.83996 13.35 4.59995 13.35 5.21995V7.75999C13.35 8.37999 13.79 9.13998 14.34 9.43998L16.74 10.77C17.25 11.06 18.09 11.06 18.61 10.77L21.01 9.43998C21.55 9.13998 22 8.37999 22 7.75999V5.21995C22 4.59995 21.56 3.83996 21.01 3.53996L18.61 2.21C18.1 1.93 17.26 1.93 16.74 2.21Z'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='1.5'
    />
    <path
      d='M2.34998 15.45L6.31998 17.7499L10.27 15.46'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='1.5'
    />
    <path
      d='M6.31995 21.82V17.74'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='1.5'
    />
    <path
      d='M5.39 13.21L2.99001 14.54C2.45001 14.84 2 15.5999 2 16.2199V18.76C2 19.38 2.44001 20.14 2.99001 20.44L5.39 21.77C5.9 22.06 6.73999 22.06 7.25999 21.77L9.66 20.44C10.2 20.14 10.65 19.38 10.65 18.76V16.2199C10.65 15.5999 10.21 14.84 9.66 14.54L7.25999 13.21C6.73999 12.93 5.9 12.93 5.39 13.21Z'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth='1.5'
    />
  </svg>
);

export const OpenCollectiveIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      fill='none'
      height={size || height}
      viewBox='0 0 24 24'
      width={size || width}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g
        clipPath='url(#a)'
        clipRule='evenodd'
        fill='currentColor'
        fillRule='evenodd'
      >
        <path d='M21.865 5.166A11.945 11.945 0 0 1 24 12.001c0 2.54-.789 4.895-2.135 6.834l-3.109-3.109A7.679 7.679 0 0 0 19.714 12a7.679 7.679 0 0 0-.958-3.725l3.109-3.109Z' />
        <path d='m18.834 2.135-3.108 3.109a7.714 7.714 0 1 0 0 13.513l3.108 3.108A11.946 11.946 0 0 1 12 24C5.373 24 0 18.627 0 12S5.373 0 12 0c2.54 0 4.895.789 6.834 2.135Z' />
      </g>
      <defs>
        <clipPath id='a'>
          <path d='M0 0h24v24H0z' fill='#fff' />
        </clipPath>
      </defs>
    </svg>
  );
};

export const PatreonIcon: React.FC<IconSvgProps> = ({
  size = 24,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      fill='none'
      height={size || height}
      viewBox='0 0 24 24'
      width={size || width}
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <g clipPath='url(#a)' fill='currentColor'>
        <path d='M15.294 17.986c4.766 0 8.63-4.026 8.63-8.993C23.923 4.026 20.06 0 15.293 0c-4.766 0-8.63 4.026-8.63 8.993 0 4.967 3.864 8.993 8.63 8.993ZM4.218 0H0v23.991h4.218V0Z' />
      </g>
      <defs>
        <clipPath id='a'>
          <path d='M0 0h24v24H0z' fill='#fff' />
        </clipPath>
      </defs>
    </svg>
  );
};

export const HeartBoldIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden='true'
    fill='none'
    focusable='false'
    height={size || height}
    role='presentation'
    viewBox='0 0 24 24'
    width={size || width}
    {...props}
  >
    <path
      d='M16.44 3.10156C14.63 3.10156 13.01 3.98156 12 5.33156C10.99 3.98156 9.37 3.10156 7.56 3.10156C4.49 3.10156 2 5.60156 2 8.69156C2 9.88156 2.19 10.9816 2.52 12.0016C4.1 17.0016 8.97 19.9916 11.38 20.8116C11.72 20.9316 12.28 20.9316 12.62 20.8116C15.03 19.9916 19.9 17.0016 21.48 12.0016C21.81 10.9816 22 9.88156 22 8.69156C22 5.60156 19.51 3.10156 16.44 3.10156Z'
      fill='currentColor'
    />
  </svg>
);
export const PlusLinearIcon = ({
  size = 24,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden='true'
    fill='none'
    focusable='false'
    height={size || height}
    role='presentation'
    viewBox='0 0 24 24'
    width={size || width}
    {...props}
  >
    <g
      fill='none'
      stroke='currentColor'
      strokeLinecap='round'
      strokeLinejoin='round'
      strokeWidth={1.5}
    >
      <path d='M6 12h12' />
      <path d='M12 18V6' />
    </g>
  </svg>
);

export const NoteLinearIcon = ({size = 24, width, height, ...props}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    fill="none"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <g
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
    >
      <path d="M8 2v3" />
      <path d="M16 2v3M7 13h8M7 17h5M16 3.5c3.33.18 5 1.45 5 6.15v6.18c0 4.12-1 6.18-6 6.18H9c-5 0-6-2.06-6-6.18V9.65c0-4.7 1.67-5.96 5-6.15z" />
    </g>
  </svg>
);

export const NextJsIcon: React.FC<IconSvgProps> = ({size = 24, width, height, ...props}) => {
  return (
    <svg
      aria-hidden="true"
      height={size || height}
      viewBox="0 0 256 256"
      width={size || width}
      {...props}
    >
      <path
        d="M119.617.069c-.55.05-2.302.225-3.879.35-36.36 3.278-70.419 22.894-91.99 53.044-12.012 16.764-19.694 35.78-22.597 55.922C.125 116.415 0 118.492 0 128.025c0 9.533.125 11.61 1.151 18.64 6.957 48.065 41.165 88.449 87.56 103.411 8.309 2.678 17.067 4.504 27.027 5.605 3.879.425 20.645.425 24.524 0 17.192-1.902 31.756-6.155 46.12-13.486 2.202-1.126 2.628-1.426 2.327-1.677-.2-.15-9.584-12.735-20.845-27.948l-20.47-27.648-25.65-37.956c-14.114-20.868-25.725-37.932-25.825-37.932-.1-.025-.2 16.84-.25 37.431-.076 36.055-.1 37.506-.551 38.357-.65 1.226-1.151 1.727-2.202 2.277-.801.4-1.502.475-5.28.475h-4.33l-1.15-.725a4.679 4.679 0 0 1-1.677-1.827l-.526-1.126.05-50.166.075-50.192.776-.976c.4-.525 1.251-1.2 1.852-1.526 1.026-.5 1.426-.55 5.755-.55 5.105 0 5.956.2 7.282 1.651.376.4 14.264 21.318 30.88 46.514 16.617 25.195 39.34 59.599 50.5 76.488l20.27 30.7 1.026-.675c9.084-5.905 18.693-14.312 26.3-23.07 16.191-18.59 26.626-41.258 30.13-65.428 1.026-7.031 1.151-9.108 1.151-18.64 0-9.534-.125-11.61-1.151-18.641-6.957-48.065-41.165-88.449-87.56-103.411-8.184-2.652-16.892-4.479-26.652-5.58-2.402-.25-18.943-.525-21.02-.325zm52.401 77.414c1.201.6 2.177 1.752 2.527 2.953.2.65.25 14.562.2 45.913l-.074 44.987-7.933-12.16-7.958-12.16v-32.702c0-21.143.1-33.028.25-33.603.4-1.401 1.277-2.502 2.478-3.153 1.026-.525 1.401-.575 5.33-.575 3.704 0 4.354.05 5.18.5z"
        fill="currentColor"
      />
    </svg>
  );
};

