import { Routes, Route } from 'react-router-dom';
import { MainPage } from '../pages/main';
import { NotFound } from '../pages/notFound';
import { Login } from '../pages/login';
import { Registration } from '../pages/signup';
import { CourseUnauth } from '../pages/course-unauth';
import { Proto2 } from '../pages/prototype2' 



export const AppRoutes = () => {
  
    return (
        <Routes>           
            <Route path="/" element={<MainPage/>}/>  
            <Route path="/login" element={<Login/>}/>
            <Route path="/registration" element={<Registration/>}/>
            <Route path="/course" element={<CourseUnauth/>}/>
            <Route path="/proto2" element={<Proto2/>}/>      
            <Route path="*" element={<NotFound />}/>          
        </Routes>
    );
};
