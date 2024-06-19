import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';

// Agrega todos los iconos sólidos a la biblioteca
library.add(fas);

const ReusableIcon = ({ iconName, color, text = "" }) => {
  const StyledIcon = styled(FontAwesomeIcon)`
    color: ${color};
    transition: color 0.2s ease;
  `;

  const StyledLink = styled.a`
    margin: 5px;
    display: inline-flex;
    align-items: center;
    text-decoration: none;
    border: 1px solid ${color};
    padding: 0.5rem;
    border-radius: 0.5rem;
    cursor: pointer;
    

    &:hover {
      background-color: ${color};

      & > svg {
        color: #fff;
      }

      & > span {
        color: #fff; 
      }
    }
  `;
  const Text = styled.span`
  margin-left: 0.5rem; 
  color: ${color}; 
`;
  return (
    <StyledLink>
      <StyledIcon icon={['fas', iconName]} />
      {text && <Text>{text}</Text>}
    </StyledLink>
  );
};

export default ReusableIcon;