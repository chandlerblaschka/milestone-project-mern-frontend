import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import BlogNavBar from './components/BlogNavBar';
import Gallery from './components/Gallery';
import NewPost from './components/NewPost';
import ShowPost from './components/ShowPost';

function App() {

  let [data, setData] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:3000/posts`)
      const resData = await response.json()
      setData(resData)
    }
    fetchData()
  }, [])

  const deletePost = async (postId) => {
    await fetch(`http://localhost:3000/posts/${postId}`, {
      method: "DELETE",
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    window.location = "/"
  }

  return (
    <div className="App">
      <Router>
        <BlogNavBar />
        <Routes>
          <Route path="/" element={
            <Gallery data={data} />
          } />
          {/* NEW POST */}
          <Route path="/newPost" element={
            <NewPost />
          } />
          {/* EDIT POST */}
          {/* <Route path="/editPost" element={

          } /> */}
          {/* POST SHOW PAGE */}
          <Route path="/postShow/:postId" element={
            <ShowPost data={data} deletePost={deletePost} />
          } />
        </Routes>
      </Router>
    </div>
  );
}

export default App;