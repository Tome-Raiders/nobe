import React from 'react';
// import { io, Socket } from 'socket.io-client';
import { SvgIcon } from '@material-ui/core';

function TrashIcon(): JSX.Element {
  return (
    <SvgIcon
      xmlns="http://www.w3.org/2000/svg"
      x="0px"
      y="0px"
      width="100"
      height="100"
      viewBox="0 0 48 48"
    >
      <path fill="#35c1f1" d="M34.764,4H13.236c-0.758,0-1.45,0.428-1.789,1.106L10,8h28l-1.447-2.894 C36.214,4.428,35.521,4,34.764,4z" />
      <path fill="#50e6ff" d="M38,8H10c-1.105,0-2,0.895-2,2v1h32v-1C40,8.895,39.105,8,38,8z" />
      <linearGradient id="QG8kOj0EenHemW7zXJvfba_x4eY9knZ24Hv_gr1" x1="14.976" x2="30.049" y1="43.459" y2="11.831" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#2aa4f4" />
        <stop offset="1" stopColor="#007ad9" />
      </linearGradient>
      <path fill="url(#QG8kOj0EenHemW7zXJvfba_x4eY9knZ24Hv_gr1)" d="M38.5,11l-0.81,15.01l-0.82,15.1C36.82,42.17,35.94,43,34.88,43H13.12 c-1.06,0-1.94-0.83-1.99-1.89L9.5,11H38.5z" />
      <radialGradient id="QG8kOj0EenHemW7zXJvfbb" cx="37.995" cy="38.007" r="12.041" gradientUnits="userSpaceOnUse">
        <stop offset=".348" />
        <stop offset=".936" stopOpacity=".098" />
        <stop offset="1" stopOpacity="0" />
      </radialGradient>
      <path fill="url(#undefined)" d="M37.69,26.01l-0.82,15.1 C36.82,42.17,35.94,43,34.88,43h-7.8C26.39,41.48,26,39.79,26,38C26,31.47,31.2,26.17,37.69,26.01z" opacity=".3" />
      <linearGradient id="QG8kOj0EenHemW7zXJvfbc_x4eY9knZ24Hv_gr2" x1="28" x2="48" y1="384" y2="384" gradientTransform="translate(0 -346)" gradientUnits="userSpaceOnUse">
        <stop offset="0" stopColor="#f44f5a" />
        <stop offset=".443" stopColor="#ee3d4a" />
        <stop offset="1" stopColor="#e52030" />
      </linearGradient>
      <circle cx="38" cy="38" r="10" fill="url(#QG8kOj0EenHemW7zXJvfbc_x4eY9knZ24Hv_gr2)" />
      <path fill="#fff" d="M41.536,33.757l0.707,0.707c0.195,0.195,0.195,0.512,0,0.707l-7.071,7.071 c-0.195,0.195-0.512,0.195-0.707,0l-0.707-0.707c-0.195-0.195-0.195-0.512,0-0.707l7.071-7.071 C41.024,33.562,41.34,33.562,41.536,33.757z" />
      <path fill="#fff" d="M42.243,41.536l-0.707,0.707c-0.195,0.195-0.512,0.195-0.707,0l-7.071-7.071 c-0.195-0.195-0.195-0.512,0-0.707l0.707-0.707c0.195-0.195,0.512-0.195,0.707,0l7.071,7.071 C42.438,41.024,42.438,41.34,42.243,41.536z" />
    </SvgIcon>
  );
}
export default TrashIcon;
