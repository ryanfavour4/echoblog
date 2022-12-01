import React from 'react';
import Blog from '../Components/Home/Blog'
import Loadscreen from '../Reusables/Loadscreen';
import "./Home.style.css"

function Home({ data }) {

  // condition ? " do for true" : "do if false"

  // () parenthesis == mostly used in methods of functions
  //  {} curly braces == used to input javascript syntax inside jsx elements
  // [] Bracket

  return (
    <div className='parent_box'>

      {
        data ? data.map((blog) => {
          return <Blog key={blog.id} blog={blog} />
        }) : <Loadscreen />
      }
    </div>
  )
}

export default Home