import './App.css';
import BlogNavBar from './components/BlogNavBar';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Gallery from './components/Gallery';
import NewPost from './components/NewPost';

function App() {
  return (
    <div className="App">
      <Router>
        <BlogNavBar />
        <Routes>
          <Route path="/" element={
            <Gallery />
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