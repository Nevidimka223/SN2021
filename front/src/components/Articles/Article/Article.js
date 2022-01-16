import React from 'react'

 function Article({title, author}) {
    return (
      <div>
          <div> Title: {title} </div>
          <div> Author: {author} </div>
          <br/>
      </div>
    )
}

export default Article;