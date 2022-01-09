import './Header.css';
import { ADD_ARTICLE_PAGE, ARTICLES_PAGE, PROFILE_PAGE } from '../../constant/pages';

function Header({setActivePage}) {
    const setArticlePage = () => setActivePage(ARTICLES_PAGE)
    const setAddArticlePage = () => setActivePage(ADD_ARTICLE_PAGE)
    const setProfilePage = () => setActivePage(PROFILE_PAGE)
    
    return (
        <div className="header">
            <button onClick={setArticlePage}>Articles</button>
            <button onClick={setAddArticlePage}>Add Article</button>
            <button onClick={setProfilePage}>Profile</button>
        </div>
    );
}

export default Header;