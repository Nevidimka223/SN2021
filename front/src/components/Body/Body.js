import { ARTICLES_PAGE, ADD_ARTICLE_PAGE, PROFILE_PAGE } from '../../constant/pages';
import { AddArticle } from '../ArticleButton';
import { Articles } from '../Articles';
import { Profile } from '../Profle';
import './Body.css';

function Body({activePage}) {
    return (
        <div className="BodyContent">
            {activePage === ARTICLES_PAGE && <Articles />}
            {activePage === ADD_ARTICLE_PAGE && <AddArticle />}
            {activePage === PROFILE_PAGE && <Profile />}
        </div>
    );
}

export default Body;