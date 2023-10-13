import './App.css'
import {Home,Login,CreatePost,EditPost,Myblog, PostDetail,Profile,Signup } from './pages/index'
import {Header,Footer} from "./component/index"
import {BrowserRouter, Routes,Route} from "react-router-dom"
 
function App() {

  return (
    <BrowserRouter>
    <Header/>
        <Routes>
        <Route exact path="/" element={<Home/>}/>
      <Route exact path="/login" element={<Login/>}/>
      <Route exact path="/register" element={<Signup/>}/>
      <Route exact path="/write" element={<CreatePost/>}/>
      <Route exact path="/posts/post/:id" element={<PostDetail/>}/>
      <Route exact path="/edit/:id" element={<EditPost/>}/>
      <Route exact path="/myblogs/:id" element={<Myblog/>}/>
      <Route exact path="/profile/:id" element={<Profile/>}/>
        </Routes>
      <Footer/>
    </BrowserRouter>
  )
}

export default App
