import React from 'react';
import './Pagination.css'

const Pagination = ({ count, changeClick, nowPage }) => {
  let pages = Math.ceil(count / 12)

  return (
    <ul className="pagination">
      <li className="page-item"><a className="page-link" href="#first" onClick={() => changeClick(1)}><i className="fas fa-angle-double-left"></i></a></li>
      <li className="page-item"><a className="page-link" href="#prev" onClick={() => changeClick(nowPage - 1)}><i className="fas fa-angle-left"></i></a></li>
      {
        [...Array(pages).keys()].map((page, idx) => {
          return (
            <li key={idx} className={`page-item ${nowPage === page + 1 ? "active" : ""}`}><a className="page-link" href={`#${page + 1}`} onClick={() => changeClick(idx + 1)}>{page + 1}</a></li>
          )
        })
      }
      <li className="page-item"><a className="page-link" href="#next" onClick={() => changeClick(nowPage + 1)}><i className="fas fa-angle-right"></i></a></li>
      <li className="page-item"><a className="page-link" href="#last" onClick={() => changeClick(pages)}><i className="fas fa-angle-double-right"></i></a></li>
    </ul>
  )
}

export default Pagination