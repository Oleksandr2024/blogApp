import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import './App.css'
import {Layout} from "./components/Layout"
import About from "./components/About"
import Blog from "./components/Blog"
import NotFound from "./components/NotFound"
import SinglePage from "./components/SinglePage"
import {EditPost} from "./components/EditPost"
import { RequireAuth } from "./hoc/RequireAuth"
import {CreatePost} from "./components/CreatePost"
import { LoginPage } from "./components/LoginPage"
import { AuthProvider } from "./hoc/AuthProvider"

const App = () => {
  return (
    <AuthProvider>
      <div className="wrapper">
          <Routes>
              <Route path="/" element={<Layout/>}>
                <Route index element={<Home/>} />
                <Route path="about/*" element={<About/>}>
                    <Route path="contacts" element={<p>Our contacts</p>} /> {/* nested routes */}
                    <Route path="team" element={<p>Our team</p>} />         {/* nested routes */}
                </Route>
                <Route path="blogs" element={<Blog/>} />
                <Route path="blogs/:id" element={<SinglePage/>} />
                <Route path="blogs/:id/edit" element={<EditPost/>} />
                <Route path="blogs/new" element={            
                    <RequireAuth>
                        <CreatePost/>
                    </RequireAuth>
                  } />
                <Route path="login" element={<LoginPage/>} />
                <Route path="*" element={<NotFound/>} />
              </Route>
          </Routes>
      </div>
    </AuthProvider>
  )
}

export default App
