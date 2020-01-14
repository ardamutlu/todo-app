import React from 'react';
import posed from 'react-pose';

export const PosedDiv = posed.div({
  enter: {
    applyAtStart: { display: 'flex' },
    opacity: 1,
    transition: {
      default: { duration: 300 }
    }
  },
  exit: {
    applyAtEnd: { display: 'none' },
    delay: 500,
    opacity: 0,
    transition: {
      default: { duration: 300 }
    }
  }
});
