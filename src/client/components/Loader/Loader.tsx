import React from 'react';
import ReactLoading from 'react-loading';
import { IProps } from './constants';
import { PosedDiv } from './pose';

export const Loader: React.FunctionComponent<IProps> = ({ visible }) => {
  return (
    <PosedDiv className="todo-loader" key="loader" pose={visible ? 'enter' : 'exit'}>
      <ReactLoading type="spin" color="#2C2F33" height={40} width={40} />
    </PosedDiv>
  );
};
