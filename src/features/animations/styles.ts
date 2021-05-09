import { css, keyframes } from "@emotion/react";

/**
 * Элемент выплывает сниху экрана, с небольшим отскоком
 */
const showFromBottomKeyframes = keyframes`
  0% {
    transform: translate(0, 500px);
  }

  50% {
    transform: translate(0, -80px);
  }

  80% {
    transform: translate(0, 25px);
  }

  100% {
    transform: translate(0, 0);
  }
`;
export const showFromBottom = () => css`
    animation-name: ${showFromBottomKeyframes};
    animation-duration: 1.5s;
    animation-timing-function: ease-in-out;
`;

/**
 * Элемент увеличивается и уменьшается, пытаясь обратить на себя внимания. При удержании клика анимация ставится на паузу
 */
const noticeMeKeyframes = keyframes`
  0% {
    transform: inherit;
  }

  100% {
    transform: scale(1.2);
  }
`;
export const noticeMe = () => css`
    animation-play-state: running;
    animation-name: ${noticeMeKeyframes};
    animation-duration: 1s;
    animation-timing-function: ease-in-out;
    animation-direction: alternate;
    animation-iteration-count: infinite;

    &:active {
        animation-play-state: paused;
    }
`;

/**
 * Элемент плавно появляется и исчезает
 */
const fadeInAndOutKeyframes = keyframes`
  0% {
    opacity: 0;
  }

  40% {
    opacity: 1;
  }

  70% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
`;
export const fadeInAndOut = (duration: number) => css`
    animation-name: ${fadeInAndOutKeyframes};
    animation-duration: ${duration}ms;
`;
