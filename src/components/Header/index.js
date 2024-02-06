import {Link} from 'react-router-dom'

import Popup from 'reactjs-popup'

import {GiHamburgerMenu} from 'react-icons/gi'

import {AiFillHome} from 'react-icons/ai'

import {BsInfoCircleFill} from 'react-icons/bs'

import {IoMdClose} from 'react-icons/io'

import './index.css'

const overlayStyles = {
  backgroundColor: '#ffff',
}

const Header = () => (
  <div className="navbar-container">
    <div>
      <Link to="/" className="link-item">
        <img
          src="https://assets.ccbp.in/frontend/react-js/hamburger-menu-website-logo.png"
          alt="website logo"
          className="website-logo"
        />
      </Link>
    </div>
    <div className="routes-container ">
      <Popup
        modal
        trigger={
          <button
            data-testid="hamburgerIconButton"
            type="button"
            className="hamburgerbutton"
          >
            <GiHamburgerMenu className="hamburgericon" />.
          </button>
        }
        overlayStyle={overlayStyles}
      >
        {close => (
          <>
            <div className="container">
              <button
                className="icon-container "
                type="button"
                onClick={() => close()}
                data-testid="closeButton"
              >
                <IoMdClose className="close-icon" />.
              </button>
              <ul className="new-container">
                <div>
                  <Link to="/" className="link-item">
                    <div className="link-container">
                      <AiFillHome className="icon-image" />
                      <li className="list-item">Home</li>
                    </div>
                  </Link>

                  <Link to="/about" className="link-item">
                    <div className="link-container">
                      <BsInfoCircleFill className="icon-image" />
                      <li className="list-item">About</li>
                    </div>
                  </Link>
                </div>
              </ul>
            </div>
          </>
        )}
      </Popup>
    </div>
  </div>
)

export default Header
