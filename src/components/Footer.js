import React from 'react';
import styled from 'styled-components';

const FooterWrapper = styled.div`
  display: flex;
  background-color: rgb(3, 27, 77);
`
const FooterInner = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  width: 100%;
  height: 100%;
  color: white;
`

export default function Footer() {
  return (
    <>
      <FooterWrapper>
        <FooterInner>
          <footer>
            <p>&copy; Kinloch {new Date().getFullYear()}</p>
          </footer>
        </FooterInner>
      </FooterWrapper>
    </>
  );
}
