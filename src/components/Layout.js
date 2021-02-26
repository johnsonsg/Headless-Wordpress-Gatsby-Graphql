import React from 'react';
import 'normalize.css';
import '../styles/global-reset.scss';

// import Header from "./header"
import MainMenu from './MainMenu';
import Footer from './Footer';

import styled, {createGlobalStyle} from 'styled-components';

const GlobalStyles = createGlobalStyle`
  
  body, html{
    margin: 0 !important;
    padding: 0 !important;
  }
`
const LayoutWrapper = styled.div`
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
`


const Layout = ({ children }) => (
 <>
   <GlobalStyles />
   <MainMenu />
   <LayoutWrapper>
    { children }
   </LayoutWrapper>
   <Footer />
   
 </>
);

export default Layout