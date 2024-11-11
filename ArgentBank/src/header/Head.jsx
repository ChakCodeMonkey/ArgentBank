import './header.css'
import logo from '../../../Frontend/img/argentBankLogo.png'

export default function Header() {
    return (
      <header className='main-nav'>
        <a href="">
          <img 
          className='main-nav-logo-image'
          src={logo} 
          alt="Argent Bank Logo" />
        <h1 className='sr-only'>Argent Bank</h1>
        </a>
        <div>
          <a href="" className='main-nav-item'>
          <i className='fa-solid fa-circle-user'></i>
          Sign In
          </a>
        </div>
      </header>
    );
  }