import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { Provider } from 'react-redux';
import store from './app/store.tsx';
import { BrowserRouter, Routes, Route } from "react-router";
import NewPost from './Components/Posts/NewPost.tsx';
import NewComment from './Components/Comments/newComment.tsx';
import PostPage from './Components/Posts/PostPage.tsx';
import EditPost from './Components/Posts/EditPost.tsx';


createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Provider store={store}><App /></Provider>} />
        <Route path="/:author/post" element={<Provider store={store}><NewPost /></Provider>}></Route>
        <Route path="/post/:id" element={<Provider store={store}><PostPage /></Provider>}></Route>
        <Route path="/edit/post/:id" element={<Provider store={store}><EditPost /></Provider>}></Route>
        <Route path="/comment/:id" element={<Provider store={store}><NewComment /></Provider>}></Route>
      </Routes>

    </BrowserRouter>
  </StrictMode>,
)
