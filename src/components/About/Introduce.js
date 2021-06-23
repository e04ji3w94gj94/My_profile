import React from 'react';
import { Link } from 'react-router-dom';
import './Introduce.css'

const Introduce = () => {
  return (
    <div className='introduce-container'>
      <p>Hello</p>
      <p>Here's who I am & what I do</p>
      <Link to='/resume'>
        RESUME
      </Link>

      <Link to='/projects'>
        PROJECTS
      </Link>
      <p className="introduce-content">
        您好，我是陳嘉銘，目前為研發替代役，並在台新金控擔任<strong>數據規劃師</strong>，運用 python 進行數據清理(ETL)與分析，也因為實習的關係接觸到前端網頁開發，就此進入了前端世界的不歸路.....便開始自學<strong>JavaScript</strong>、<strong>React</strong>等，期許自己能夠在役期結束後，踏入前端工作，並夢想成為全端工程師！！！
      </p>
    </div>
  );
}
export default Introduce;
