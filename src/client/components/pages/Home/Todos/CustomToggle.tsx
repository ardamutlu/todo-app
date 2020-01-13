import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faEllipsisV } from '@fortawesome/free-solid-svg-icons';

export const CustomToggle = React.forwardRef(({ children, onClick }: any, ref) => (
  <a
    href=""
    ref={ref as any}
    onClick={(e) => {
      e.preventDefault();
      onClick(e);
    }}
  >
    {children}
    <FontAwesomeIcon icon={faEllipsisV} color="#9E9E9E" />
  </a>
));
