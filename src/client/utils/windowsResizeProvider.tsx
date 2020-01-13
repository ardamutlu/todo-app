import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setIsMobile } from '../actions/app';

export default function WindowResizeProvider({ children }: any) {
  const isMobile = useSelector(({ app }: any) => app.isMobile);
  const [mobile, setMobile] = useState(isMobile);
  const dispatch = useDispatch();

  useEffect(() => {
    const handleResize = () => {
      if (!mobile && window.innerWidth < 992) {
        setMobile(true);
        dispatch(setIsMobile(true));
      }
      if (mobile && window.innerWidth > 992) {
        setMobile(false);
        dispatch(setIsMobile(false));
      }
    };
    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [mobile]);

  return children;
}
