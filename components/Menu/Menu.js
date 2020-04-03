import React from 'react';
import { StyledMenu } from './Menu.styled';
import Link from 'next/link'
import { MoonIcon, SunIcon, WorldIcon } from '../Icons/ThemeIcon'

const Menu = ({ children, open }) => {
  const renderItems = children.map((x,i) => 
    <div className="divv" key={i}>
      {x}
    </div>
  )
  return (
    <StyledMenu open={open}>
      {renderItems}
    </StyledMenu>
  )
}
export default Menu
