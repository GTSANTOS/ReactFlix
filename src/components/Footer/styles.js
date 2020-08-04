import styled from 'styled-components';

const FooterStyle = styled.footer`
  background: var(--black);
  border-top: 2px solid var(--primary);
  padding-left: 16px;
  padding-right: 16px;
  padding-top: 32px;
  padding-bottom: 32px;
  color: var(--white);
  text-align: center;
  @media (max-width: 800px) {
    margin-bottom: 50px;
    padding-top: 16px;
    padding-bottom: 16px;
  }
`;

FooterStyle.Anchor = styled.a`
  color: var(--primary);
  &:hover {
    opacity: 0.5;
  }
`;

export default FooterStyle;