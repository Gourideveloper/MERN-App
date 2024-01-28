import logo from './logo.svg';
import './App.css';
import { BrowserRouter , Routes , Route, Link} from 'react-router-dom';
import { MainComponent } from './components/main-component/main-component';
import { Unregistered } from './components/unregistered/unregistered';
import { Login } from './components/login/login';
import { Register } from './components/register/register';
import { VideosHome } from './components/videos-home/videos-home';
import { AdminLogin } from './components/admin-login/admin-login';
import { AdminHome } from './components/admin-home/admin-home';
import { AddVideo } from './components/add-video/add-video';
import { ViewVideo } from './components/view-video/view-video';
import { EditVideo } from './components/edit-video/edit-video';
import { DeleteVideo } from './components/delete-video/delete-video';
import { useCookies } from 'react-cookie';
import { useEffect } from 'react';

function App() {
  const [cookies,setCookie,removeCookie] = useCookies();
  


  function handleSignout(){
    removeCookie('user-id');
   

  }

  return (
    <div className="container-fluid">
      <BrowserRouter>
      <header className='d-flex justify-content-between p-2 bg-dark text-white'>
        <div>
        <h2><Link className=" text-white text-decoration-none" to="/">Tech-Videos</Link></h2>
        </div>
        <div>
          {
            cookies['user-id']==undefined?
            <div>
              <Link to="/login" className="btn btn-danger">User Sign In</Link>
          <Link to='/admin-login' className="btn btn-danger ms-2">Admin Sign In</Link>

            </div>:
            <div>
              {cookies['user-id']}
              <button onClick={handleSignout} className='btn btn-danger ms-2'> SignOut</button>
            </div>
          }
        </div>

        
      </header>
      <section className='d-flex ' style={{height:'100vh'}}>
       <div>
        <Routes>
          <Route path='/' element={<MainComponent />}/>
          <Route path='/login' element={<Login/>}/>
          <Route path='/unregister' element={<Unregistered />}/>
          <Route path='/register' element={<Register />} />
          <Route path='/videos' element={<VideosHome />} />
          <Route path='/admin-home' element={<AdminHome />} />
          <Route path='/admin-login' element={<AdminLogin />} />
          <Route path='/add-video' element={<AddVideo />} />
          <Route path='/view-video/:id' element={<ViewVideo/>} />
          <Route path='edit-video/:id' element={<EditVideo />} />
          <Route path='delete-video/:id' element={<DeleteVideo />} />

        </Routes>
         
       </div>
      </section>
      </BrowserRouter>
      
    </div>
  );
}

export default App;
