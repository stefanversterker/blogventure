import './App.css'

import {Routes, Route} from 'react-router-dom';
import Error from './pages/error/Error.jsx';
import Home from './pages/home/Home.jsx';
import NewPost from './pages/new-post/NewPost.jsx';
import Overview from './pages/overview/Overview.jsx';
import Navbar from "./components/navbar/Navbar.jsx";
import BlogPost from "./components/blogpost/BlogPost.jsx";
import BlogPage from "./components/blogpage/BlogPage.jsx";
import Footer from "./components/footer/Footer.jsx";
import SuccessPage from "./pages/SuccessPage/SuccessPage.jsx";




function App() {



    return (
        <div className="page-container">

            <Navbar/>

            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/new-post" element={<NewPost/>}/>
                <Route path="/overview" element={<Overview/>}/>
                <Route path="/404" element={<Error/>}/>
                <Route path="/success/:postID" element={<SuccessPage/>}/>
                <Route path="/blogpost/:postID" element={<BlogPost/>}/>
                <Route path="/blogpage/:postID" element={<BlogPage/>}/>
            </Routes>

            <Footer/>

        </div>
    )
}

export default App
