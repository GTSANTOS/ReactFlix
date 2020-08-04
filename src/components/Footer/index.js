import React from 'react';
import FooterStyle from './styles';

function Footer() {
  return (
    <FooterStyle>
      <p>&copy; Gabriel Teixeira dos Santos</p>
      <p>
        Desenvolvido na Imersão React da{' '}
        <FooterStyle.Anchor href="https://www.alura.com.br">
          Alura
        </FooterStyle.Anchor>
      </p>
    </FooterStyle>
  );
}

export default Footer;
