import React from 'react'
import { Link } from 'react-router-dom'
import logo from 'assets/logo.svg'
import styled, { keyframes } from 'styled-components'

const rotate360 = keyframes`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`

const TopBar = styled.div`
  height: 45px;
  padding: 20px;
  color: #fff;

  .redux-logo {
    animation: ${rotate360} infinite 20s linear;
    height: 12px;
  }
`

const Header = () => (
  <TopBar>
    <img src={logo} className="redux-logo" alt="logo" />
    <Link to="/">Главная</Link>
    <Link to="/map">Карта</Link>
    <Link to="/vacancies">Вакансии</Link>
  </TopBar>
)

export default Header
