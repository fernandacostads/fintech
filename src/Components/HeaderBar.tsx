import { FaUser } from 'react-icons/fa'; 

function HeaderBar() {
  return (
    <header className="header">
      <div className="logo">Fintech Dashboard</div>
      <nav className="nav">
        <ul>
          <li><a href="/">Dashboard</a></li>
          <li><a href="/profile">Perfil</a></li>
         
        </ul>
      </nav>
      <div className="user">
        <span >Admin</span>
        <a><FaUser /></a>
      </div>
    </header>
  );
}

export default HeaderBar;
