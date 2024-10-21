import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'; 
import Online from '../layout-component/online';
import All from '../layout-component/all';
import Pending from '../layout-component/pending';
import Blocked from '../layout-component/blocked';
import Dm from '../layout-component/dm';
import Help from '../help-component/help';
import Settings from '../settings-component/setting';
import Discover from '../Discover-component/Discover';
import Shop from '../Shop-Component/Shop';
import Nitroo from '../nitro-componet/nitro-main';
import Chat from '../chat-component/chat';

export default function RouterComponent() {
  return (
    <>

     <Routes>
         <Route path='/' element={<Dm/>}/>  
         <Route path='/help' element={<Help/>}/> 
         <Route path='/settings' element={<Settings/>}/>  
         <Route path='/discover' element={<Discover />}/> 
         <Route path='/shop' element={<Shop />}/> 
         <Route path='/nitro' element={<Nitroo/>}/>
         <Route path='/chat' element={<Chat />}/>
         {/* <Route path='/all' element={<All/>}/>
         <Route path='/pending' element={<Pending/>}/>
         <Route path='/blocked' element={<Blocked />}/> */}
       </Routes>
    </>
  )
}
