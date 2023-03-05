import React from "react";
import { Link } from "react-router-dom";
import "./Introduce.css";

const Introduce = () => {
  return (
    <div className="introduce-container">
      <p>Hello</p>
      <p>Here's who I am & what I do</p>
      <Link to="/resume">RESUME</Link>

      <Link to="/projects">PROJECTS</Link>
      <p className="introduce-content">
        您好，我是陳嘉銘，目前在大猩猩科技擔任
        <strong>軟體工程師</strong>，主要負責前端網頁開發(系統平台)，運用
        <strong>React</strong>、<strong>Material UI</strong>
        呈現設計畫面、製作可共用的<strong>UI or Page Components</strong>
        ，以及 API 串接後端資料、進行單元測試等，本身熱愛 Coding 與學習新技術！
      </p>
    </div>
  );
};
export default Introduce;
