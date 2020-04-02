import { Button, Container} from './S'
import Coffee from '../public/coffee.svg'
import Link from 'next/link'

const Header = (props, { title, isHeb }) => {
  return (
    <div className="header__wrapper">
      <div style={{ maxWidth: '820px', margin: '0 auto' }}>
        <header className="header">
          <nav className="nav">
            <ul className="nav__list">
              <Link href="/">
                <a>
                  <h1 style={{cursor: 'pointer'}}>{props.title}</h1>
                </a>
              </Link>
              <li className="nav__item">
                <Link href='/Coffee'>
                  <a>
                    <Button small bgColor='#c82333' link>
                      <i> <Coffee /> </i>
                      Buy Me A Coffix
                    </Button>
                  </a>
                </Link>
              </li>
              <li className="nav__item">
                <Link href='/News'>
                  <a>
                    <Button bgColor='#c8233367' small link>
                      News
                    </Button>
                  </a>
                </Link>
              </li>

            </ul>

            <div className="nav__side"> 
              { props.children.map(each => ( <li className="nav__item" style={{marginLeft: '15px'}}>{each}</li> )) } 
            </div>

          </nav>
        </header>
      </div>
      <style jsx>{`
        i {
          width: 1.3rem;
          margin: 0px 6px 0 0;
          display: inline-block;
          vertical-align: middle;
          font-size: 14px;
        }

        .header__wrapper {
          direction: ltr;
          position: relative;
          height: 64px;
          width: 100%;
          background: linear-gradient(45deg, #5c0434, #000000d6);
          border-bottom: 1px solid darkblue;
          margin: 0 auto;
          margin-bottom: 48px;
        }

        .header {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        h1 {
          margin-top: 10px;
          color: #e6e6e6;
          font-size: 3.5rem;
          font-family: 'Montserrat';
          text-align: center;
          text-shadow: 0 1px 35px rgba(5, 35, 10, 0.2);
        }

        nav {
          display: flex;
          align-items: center;
          justify-content: space-around;
          width: 100%;
        }


        .nav__list {
          display: flex;
          align-items: center;
        }

        .nav__item {
          margin-top: 10px;
          margin-left: 40px;
          list-style: none;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .nav__side {
          display: flex;
        }

        @media (max-width: 768px) {
          .header {
            margin-left: 12px;
            margin-right: 12px;
          }
          h1 {
            font-size: 2.5rem;
          }
          .nav__item {
            margin-left: 12px;
          }
          nav {
            margin-top: 6px;
          }
        }

      `}</style>

    </div>
  )
}

export default Header
