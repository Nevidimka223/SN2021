import './Articles.css'

import Article from './Article/Article'
import { articles } from '../../data/articles'

function Articles() {
    return (
        <div className='article'>
            {articles.map(article => <Article author={article.author} title={article.title}/>)}
        </div>
    )
}

export default Articles;