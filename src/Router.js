import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

// 김현주
import LoginHj from './pages/hyeonjooKim/Login/LoginHj';
import MainHj from './pages/hyeonjooKim/Main/MainHj';

// 노해리
import LoginHr from './pages/haeriRoh/Login/LoginHr';
import MainHr from './pages/haeriRoh/Main/MainHr';

// 윤경연
import LoginKy from './pages/kyeongyeon/Login/LoginKy';
import MainKy from './pages/kyeongyeon/Main/MainKy';

// 김슬비
import LoginSb from './pages/seulbiKim/Login/LoginSb';
import MainSb from './pages/seulbiKim/Main/MainSb';

// 안수정
import LoginSj from './pages/soojungAn/Login/LoginSj';
import MainSj from './pages/soojungAn/Main/MainSj';

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login-hyeonjoo" element={<LoginHj />} />
        <Route path="/main-hyeonjoo" element={<MainHj />} />

        <Route path="/login-haeriRoh" element={<LoginHr />} />
        <Route path="/main-haeriRoh" element={<MainHr />} />

        <Route path="/login-kyeongyeon" element={<LoginKy />} />
        <Route path="/main-kyeongyeon" element={<MainKy />} />

        <Route path="/login-seulbiKim" element={<LoginSb />} />
        <Route path="/main-seulbiKim" element={<MainSb />} />

        <Route path="/login-soojungAn" element={<LoginSj />} />
        <Route path="/main-soojungAn" element={<MainSj />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
