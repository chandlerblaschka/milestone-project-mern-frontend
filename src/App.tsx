import { useEffect, useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './css/style.css';
import BlogNavBar from './components/BlogNavBar';
import EditPost from './components/EditPost';
import Footer from './components/Footer';
import Gallery from './components/Gallery';
import NewPost from './components/NewPost';
import ShowPost from './components/ShowPost';
import React from 'react';

function App() {

  let [data, setData] = useState<any>({})

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`https://blogit-csb.herokuapp.com/posts`)
      const resData = await response.json()
      setData(resData)
    }
    fetchData()
  }, [])

  const deletePost = async (postId: any) => {
    await fetch(`https://blogit-csb.herokuapp.com/posts/${postId}`, {
      method: "DELETE",
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    window.location.href = "/"
  }

  const deleteComment = async (commentId: any) => {
    await fetch(`https://blogit-csb.herokuapp.com/comments/${commentId}`, {
      method: "DELETE",
      mode: 'cors',
      headers: {
        'Content-Type': 'application/json'
      }
    })
    window.location.reload()
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
          <Route path="/editPost/:postId" element={
            <EditPost />
          } />
          {/* POST SHOW PAGE */}
          <Route path="/postShow/:postId" element={
            <ShowPost data={data} deletePost={deletePost} deleteComment={deleteComment} />
          } />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;