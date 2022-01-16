import './Header.css';
import { Link } from 'react-router-dom'

function Header() {    
    return (
        <div className="header">
            <Link to = '/articles'>
                <button className='buttons'>Articles</button>
            </Link>
            <Link to = '/article'>
                <button className='buttons'>Add Article</button>
            </Link>
            <Link to = '/profile'>
                <button className='buttons'>Profile</button>
            </Link>
        </div>
    );
}

export default Header;