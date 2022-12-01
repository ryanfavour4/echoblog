import React from 'react';
import Blog from '../Components/Home/Blog'
import Loadscreen from '../Reusables/Loadscreen';
import "./Home.style.css"

function Home({ data }) {

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