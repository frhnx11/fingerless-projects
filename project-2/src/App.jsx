import React from 'react';
import styled from 'styled-components';

const AppContainer = styled.div`
  font-family: 'Roboto', sans-serif;
  background-color: #f0f8ff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const Header = styled.header`
  background-color: #ff6b6b;
  width: 100%;
  padding: 20px 0;
  text-align: center;
`;

const Logo = styled.h1`
  font-family: 'Pacifico', cursive;
  color: #fff;
  font-size: 3rem;
  margin: 0;
`;

const NavBar = styled.nav`
  background-color: #fff;
  width: 100%;
  padding: 15px 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
`;

const NavList = styled.ul`
  list-style-type: none;
  padding: 0;
  margin: 0;
  display: flex;
  justify-content: center;
`;

const NavItem = styled.li`
  margin: 0 15px;
`;

const NavLink = styled.a`
  text-decoration: none;
  color: #4169e1;
  font-weight: bold;
  font-size: 1.1rem;
  transition: color 0.3s;
  position: relative;

  &:hover {
    color: #ff6b6b;
  }

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 2px;
    bottom: -5px;
    left: 0;
    background-color: #ff6b6b;
    transform: scaleX(0);
    transition: transform 0.3s;
  }

  &:hover::after {
    transform: scaleX(1);
  }
`;

const MainContent = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px;
  text-align: center;
`;

const Headline = styled.h2`
  color: #4169e1;
  font-size: 2.5rem;
  margin-bottom: 20px;
`;

const Subheadline = styled.p`
  color: #333;
  font-size: 1.2rem;
  max-width: 600px;
  margin-bottom: 30px;
`;

const CTAButton = styled.button`
  background-color: #4169e1;
  color: #fff;
  border: none;
  padding: 15px 30px;
  font-size: 1.2rem;
  border-radius: 5px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: #1e90ff;
  }
`;

const App = () => {
  return (
    <AppContainer>
      <Header>
        <Logo>Merry Berry</Logo>
      </Header>
      <NavBar>
        <NavList>
          <NavItem><NavLink href="#">Home</NavLink></NavItem>
          <NavItem><NavLink href="#">About</NavLink></NavItem>
          <NavItem><NavLink href="#">Blog</NavLink></NavItem>
          <NavItem><NavLink href="#">Contact</NavLink></NavItem>
        </NavList>
      </NavBar>
      <MainContent>
        <Headline>Adorable Clothes for Your Little Ones</Headline>
        <Subheadline>
          Discover our colorful collection of comfortable and stylish baby clothes that will make your child stand out!
        </Subheadline>
        <CTAButton>Shop Now</CTAButton>
      </MainContent>
    </AppContainer>
  );
};

export default App;
