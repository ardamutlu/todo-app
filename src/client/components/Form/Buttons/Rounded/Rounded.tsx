import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { IconDefinition } from '@fortawesome/fontawesome-common-types';
import { SizeProp } from '@fortawesome/fontawesome-svg-core';
import { StyledRoundedButton } from './styles';

// eslint-disable-next-line @typescript-eslint/interface-name-prefix
interface IProps {
  backgroundColor?: string;
  shadowShow?: boolean;
  className?: string;
  fontColor: string;
  size?: SizeProp;
  icon: IconDefinition;
  onClick?: () => void;
}

export const RoundedButton = (props: IProps) => {
  return (
    <StyledRoundedButton
      variant="link"
      backgroundColor={props.backgroundColor}
      shadowShow={props.shadowShow}
      className={`p-0 ${props.className}`}
      onClick={props.onClick}
    >
      <FontAwesomeIcon
        icon={props.icon}
        color={props.fontColor}
        size={props.size ? props.size : 'sm'}
      />
    </StyledRoundedButton>
  );
};
