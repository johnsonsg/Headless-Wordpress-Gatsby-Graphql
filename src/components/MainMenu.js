import React from 'react';
import {graphql, StaticQuery, Link} from 'gatsby';
import styled from 'styled-components';

const MainMenuWrapper = styled.div`
  display: flex;
  background-color: rgb(3, 27, 77);
`

const MainMenuInner = styled.div`
  max-width: 1440px;
  margin: 0 auto;
  display: flex;
  width: 100%;
  height: 100%;
`

const MenuItem = styled(Link)`
  color: white;
  display: block;
  padding: 12px 30px 12px 0px;
`

const MainMenu = () => (
  <StaticQuery 
  query={graphql`
  {
  allWpMenu(filter: {
    name: {
      eq: "Main Menu"
      }
    }) {
    edges {
      node {
        name
        menuItems {
          nodes {
            label
            url
          }
        }
      }
    }
  }
}
`} render={data => (
    <MainMenuWrapper>
      <MainMenuInner>
        {data.allWpMenu.edges[0].node.menuItems.nodes.map(node => (
          <MenuItem to={`${node.url}`} key={node.label}>
            {node.label}
          </MenuItem>
        ))}
      </MainMenuInner>
    </MainMenuWrapper>
  )} />
);

export default MainMenu;