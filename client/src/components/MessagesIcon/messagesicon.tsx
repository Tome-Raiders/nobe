import React from 'react';
 import { Counter } from './style'


const MessageIcon: React.FC = ({ }) => {
  return (
    <div className="MessageIcon">
      <Counter> 1 </Counter>
     <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px"
      width="30" height="30"
      viewBox="0 0 80 80">
      <path d="M 18 10 C 13.593562 10 10 13.593562 10 18 L 10 62 C 10 66.406438 13.593562 70 18 70 L 62 70 C 66.406438 70 70 66.406438 70 62 L 70 18 C 70 13.593562 66.406438 10 62 10 L 18 10 z M 18 12 L 62 12 C 65.325562 12 68 14.674438 68 18 L 68 62 C 68 65.325562 65.325562 68 62 68 L 18 68 C 14.674438 68 12 65.325562 12 62 L 12 18 C 12 14.674438 14.674438 12 18 12 z M 18 15 C 17.448 15 17 15.448 17 16 C 17 16.552 17.448 17 18 17 C 18.552 17 19 16.552 19 16 C 19 15.448 18.552 15 18 15 z M 22 15 C 21.448 15 21 15.448 21 16 C 21 16.552 21.448 17 22 17 C 22.552 17 23 16.552 23 16 C 23 15.448 22.552 15 22 15 z M 26 15 C 25.448 15 25 15.448 25 16 C 25 16.552 25.448 17 26 17 C 26.552 17 27 16.552 27 16 C 27 15.448 26.552 15 26 15 z M 30 15 C 29.448 15 29 15.448 29 16 C 29 16.552 29.448 17 30 17 C 30.552 17 31 16.552 31 16 C 31 15.448 30.552 15 30 15 z M 34 15 C 33.448 15 33 15.448 33 16 C 33 16.552 33.448 17 34 17 C 34.552 17 35 16.552 35 16 C 35 15.448 34.552 15 34 15 z M 38 15 C 37.448 15 37 15.448 37 16 C 37 16.552 37.448 17 38 17 C 38.552 17 39 16.552 39 16 C 39 15.448 38.552 15 38 15 z M 42 15 C 41.448 15 41 15.448 41 16 C 41 16.552 41.448 17 42 17 C 42.552 17 43 16.552 43 16 C 43 15.448 42.552 15 42 15 z M 46 15 C 45.448 15 45 15.448 45 16 C 45 16.552 45.448 17 46 17 C 46.552 17 47 16.552 47 16 C 47 15.448 46.552 15 46 15 z M 50 15 C 49.448 15 49 15.448 49 16 C 49 16.552 49.448 17 50 17 C 50.552 17 51 16.552 51 16 C 51 15.448 50.552 15 50 15 z M 54 15 C 53.448 15 53 15.448 53 16 C 53 16.552 53.448 17 54 17 C 54.552 17 55 16.552 55 16 C 55 15.448 54.552 15 54 15 z M 58 15 C 57.448 15 57 15.448 57 16 C 57 16.552 57.448 17 58 17 C 58.552 17 59 16.552 59 16 C 59 15.448 58.552 15 58 15 z M 62 15 C 61.448 15 61 15.448 61 16 C 61 16.552 61.448 17 62 17 C 62.552 17 63 16.552 63 16 C 63 15.448 62.552 15 62 15 z M 40 22 C 28.421 22 19 29.626 19 39 C 19 45.067 22.958812 50.387484 28.882812 53.396484 C 28.374813 57.000484 25 59 25 59 C 29.682 58.725 32.689172 56.933906 34.451172 55.378906 C 36.222172 55.772906 38.077 56 40 56 C 51.579 56 61 48.374 61 39 C 61 29.626 51.579 22 40 22 z M 40 24 C 50.477 24 59 30.729 59 39 C 59 47.271 50.477 54 40 54 C 38.319 54 36.597766 53.806781 34.884766 53.425781 L 33.890625 53.205078 L 33.128906 53.878906 C 32.452906 54.475906 31.527359 55.137219 30.318359 55.699219 C 30.568359 55.079219 30.760281 54.404781 30.863281 53.675781 L 31.0625 52.261719 L 29.789062 51.613281 C 24.285062 48.817281 21 44.102 21 39 C 21 30.729 29.523 24 40 24 z M 18 63 C 17.448 63 17 63.448 17 64 C 17 64.552 17.448 65 18 65 C 18.552 65 19 64.552 19 64 C 19 63.448 18.552 63 18 63 z M 22 63 C 21.448 63 21 63.448 21 64 C 21 64.552 21.448 65 22 65 C 22.552 65 23 64.552 23 64 C 23 63.448 22.552 63 22 63 z M 26 63 C 25.448 63 25 63.448 25 64 C 25 64.552 25.448 65 26 65 C 26.552 65 27 64.552 27 64 C 27 63.448 26.552 63 26 63 z M 30 63 C 29.448 63 29 63.448 29 64 C 29 64.552 29.448 65 30 65 C 30.552 65 31 64.552 31 64 C 31 63.448 30.552 63 30 63 z M 34 63 C 33.448 63 33 63.448 33 64 C 33 64.552 33.448 65 34 65 C 34.552 65 35 64.552 35 64 C 35 63.448 34.552 63 34 63 z M 38 63 C 37.448 63 37 63.448 37 64 C 37 64.552 37.448 65 38 65 C 38.552 65 39 64.552 39 64 C 39 63.448 38.552 63 38 63 z M 42 63 C 41.448 63 41 63.448 41 64 C 41 64.552 41.448 65 42 65 C 42.552 65 43 64.552 43 64 C 43 63.448 42.552 63 42 63 z M 46 63 C 45.448 63 45 63.448 45 64 C 45 64.552 45.448 65 46 65 C 46.552 65 47 64.552 47 64 C 47 63.448 46.552 63 46 63 z M 50 63 C 49.448 63 49 63.448 49 64 C 49 64.552 49.448 65 50 65 C 50.552 65 51 64.552 51 64 C 51 63.448 50.552 63 50 63 z M 54 63 C 53.448 63 53 63.448 53 64 C 53 64.552 53.448 65 54 65 C 54.552 65 55 64.552 55 64 C 55 63.448 54.552 63 54 63 z M 58 63 C 57.448 63 57 63.448 57 64 C 57 64.552 57.448 65 58 65 C 58.552 65 59 64.552 59 64 C 59 63.448 58.552 63 58 63 z M 62 63 C 61.448 63 61 63.448 61 64 C 61 64.552 61.448 65 62 65 C 62.552 65 63 64.552 63 64 C 63 63.448 62.552 63 62 63 z"></path>
</svg>
    </div>
  );
}

export default MessageIcon