import React from 'react';
import styled from 'styled-components';
import themeList from '../../data/themeList';

const TitleStyles = styled.h1`
  font-size: 6rem;
  color: ${({ theme: { theme } }) =>
    theme === themeList.light ? 'var(--darkBlue_2)' : 'var(--lightBlue_1)'};
  font-weight: 900;
  text-transform: capitalize; /* 控制单词首字母大小写 */
  @media only screen and (max-width: 768px) {
    font-size: 4rem;
  }
`;

function HeroTitle({ children, ...rest }) {
  return <TitleStyles {...rest}>{children}</TitleStyles>;
}

export default HeroTitle;
