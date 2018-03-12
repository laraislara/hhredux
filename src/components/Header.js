import React from 'react'
import { Link } from 'react-router-dom'
import styled from 'styled-components'

const TopBar = styled.div`
  padding: 20px;
  font-size: 20px; 
`
const StyledLink = styled(Link)`
  text-decoration: none;
  margin: 40px;
  color: black;
  
  &:hover {
    color: blue;
  }
`

const Description = () => (
      <p>Для поиска вакансий на карте выберите ветку метро, станцию и введите должность</p>
)

const Header = () => (
    <div>
      <TopBar>
        <StyledLink to="/">Главная</StyledLink>
        <StyledLink to="/map">Карта</StyledLink>
        <StyledLink to="/vacancies">Вакансии</StyledLink>
      </TopBar>
      <Description/>
    </div>

)

export default Header
