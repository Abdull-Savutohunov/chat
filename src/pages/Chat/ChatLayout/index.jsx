
import { Routes , Route } from 'react-router-dom';
import { Notauth } from './../../../componente/NotAuth';
import { NotFound } from './../../../componente/NotFound';
import { MainChatPages } from './../pages';

export const ChatLayout = () => {
  const isAuth = localStorage.getItem('uid')

  if(!isAuth) return <Notauth/>


  return(
    <>
      <Routes>
        <Route index element={<MainChatPages/>}/>
        <Route path="*" element={<NotFound/>}/>
      </Routes>
    </>
  )
}