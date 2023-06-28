import React, { useState } from 'react';
import { NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Button from './Button';

const NavbarComponent = () => {
  const [isMenuOpen, setMenuOpen] = useState(false);

  const handleMenuToggle = () => {
    setMenuOpen(!isMenuOpen);
  };

  return (
    <NavbarContainer>
      <LogoContainer>
        <img
          src='https://moonlightedu.com.np/uploads/company-profile/80_1679988352.png'
          alt='logo'
          className='navbar__logo__img'
        />
      </LogoContainer>
      <NavMenuContainer isOpen={isMenuOpen}>
        <NavMenu>
          <li>
            <NavLink to='/'>Home</NavLink>
          </li>
          <li>
            <NavLink to='/about'>About Us</NavLink>
          </li>
          <li>
            <NavLink to='/study-abroad'>Study Abroad</NavLink>
          </li>
          <li>
            <NavLink to='/language-preparation'>Language Preparation</NavLink>
          </li>
          <li>
            <NavLink to='/gallery'>Gallery</NavLink>
          </li>
          <li>
            <NavLink to='/contact'>Contact Us</NavLink>
          </li>
          <li>
            <Button title='Inquiry Now!' />
          </li>
        </NavMenu>
      </NavMenuContainer>
      <HamburgerMenu onClick={handleMenuToggle}>&#9776;</HamburgerMenu>
    </NavbarContainer>
  );
};

const NavbarContainer = styled.section`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
  background-color: #f0f0f0;

  @media (max-width: 768px) {
    position: relative;
    flex-wrap: wrap;
    justify-content: flex-start;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;

  .navbar__logo__img {
    width: 120px;
    height: auto;
  }

  @media (max-width: 768px) {
    .navbar__logo__img {
      width: 100%;
    }
  }
`;


const NavMenuContainer = styled.nav`
  display: flex;
  align-items: center;

  @media (max-width: 768px) {
    overflow: hidden;
    flex-direction: column;
    max-height: ${({ isOpen }) => (isOpen ? '300px' : '0')};
    transition: max-height 0.3s ease-in-out;
    width: 100%;
  }
`;

const NavMenu = styled.ul`
  display: flex;
  list-style: none;
  padding: 0;

  li {
    margin-left: 1rem;

    a {
      color: #000;
      text-decoration: none;

      &.active {
        font-weight: bold;
      }
    }
  }

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: flex-start;
    margin-top: 1rem;
    li{
    margin-bottom: 10px;
    font-size: 20px;
    }
  }
`;

const HamburgerMenu = styled.div`
  display: none;
  font-size: 50px;
  cursor: pointer;

  @media (max-width: 768px) {
    display: block;
  }
`;

export default NavbarComponent;
