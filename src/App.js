import './App.css';
import BlogNavBar from './components/BlogNavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Gallery from './components/Gallery';
import NewPost from './components/NewPost';
import { useEffect, useState } from 'react';

function App() {

  let [data, setData] = useState({})

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetch(`http://localhost:3000/posts`)
      const resData = await response.json()
      setData(resData)
      console.log(resData)
    }
    fetchData()
  }, [])

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
          {/* <Route path="/postShow/:postId" element={

          } /> */}
        </Routes>
      </Router>
    </div>
  );
}

export default App;