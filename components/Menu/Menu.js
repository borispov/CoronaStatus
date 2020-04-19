import { useContext } from 'react';
import { StyledMenu } from './Menu.styled';
import Link from 'next/link'
import { MoonIcon, SunIcon, WorldIcon } from '../Icons/ThemeIcon'

import { LocaleContext } from '../../context/LocaleContext'

const Menu = ({ children, open }) => {

  const { locale } = useContext(LocaleContext)

  const renderItems = children.map((x,i) => 
    <div className="divv" key={i}>
      {x}
    </div>
  )

  return (
    <StyledMenu open={open} locale={locale} >
        {renderItems}
    </StyledMenu>
  )
}
export default Menu
