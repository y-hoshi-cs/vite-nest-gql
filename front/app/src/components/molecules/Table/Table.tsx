import React, { useEffect, useMemo, useRef, useState } from 'react'
import './Table.css';

interface TableProps<T> {
  head: (keyof T)[];
  body: Record<keyof T, keyof any>[];
  currentIndex: number;
  countPerPage: number;
  onPageChange: (pagenum: number) => void;
}

const Table = <T,>(props: TableProps<T>) => {
  const tableRef = useRef<HTMLTableElement>(null);
  const [style, setStyle] = useState({ maxHeight: 0 });
  const { head, body, currentIndex, countPerPage, onPageChange } = props;

  const offset = useMemo(() => (currentIndex - 1) * countPerPage, [currentIndex, countPerPage]);

  const setHeight = (height: number) => {
    setStyle({ maxHeight: height });
  }

  const handlePageChange = (pageNum: number) => {
    const totalCount = body.length;
    const totalPage = Math.ceil(totalCount / countPerPage);
    const pages = [...Array(totalPage)].map((_, idx) => idx + 1);
    const emitNum = pages.includes(pageNum) ? pageNum : currentIndex;
    onPageChange(emitNum);
  }

  const outputRows = useMemo(() => {
    return body.slice(offset, offset + countPerPage);
  }, [body, countPerPage, offset]);

  const showPages = useMemo(() => {
    if (countPerPage <= 0) return [1];
    const totalCount = body.length;
    const totalPage = Math.ceil(totalCount / countPerPage);
    const pages = [...Array(totalPage)].map((_, idx) => idx + 1);
    return pages.slice((currentIndex - 1), 3);
  }, [body, countPerPage, currentIndex, offset])

  const isPrevDisable = useMemo(() => currentIndex === 1, [currentIndex]);
  const isNextDisable = useMemo(() => showPages.length <= 1, [showPages]);

  // コンポーネント初期化時スタイル調整
  useEffect(() => {
    const r = tableRef?.current
    let height = 0;
    if (r) {
      const rect = r.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      height = windowHeight - rect.top;
    }
    setHeight(height);
  }, [])

  return (
    <div ref={tableRef} style={style} className="table__wrapper">
      {/* table */}
      <table className='table'>
        <thead>
          <tr className='tr'>
            {head.map((th, idx) => (
              <th className='th' key={`th-${idx}`}>{th}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {outputRows.map((tr, idx) => (
            <tr className='tr' key={`tr-${idx}`}>
              {Object.values(tr).map((td, i) => (
                <td className='td' key={`td-${idx}-${i}`}>{td as string}</td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
      {/* pagenater */}
      <div className="table__footer">
        <div className="spacer"></div>
        <div className="table__pager">
          <div
            className={`pager-item pager-item--prev ${isPrevDisable ? 'pager-item--disabled' : ''}`}
            onClick={() => handlePageChange(currentIndex - 1)}
          >&lt;</div>
          {showPages.map((pagenum, idx) => (
            <div
              key={pagenum}
              className={`pager-item pager-item--page ${idx === 0 ? 'pager-item--active' : ''}`}
              onClick={() => handlePageChange(pagenum)}
            >{pagenum}</div>
          ))}
          <div
            className={`pager-item pager-item--next ${isNextDisable ? 'pager-item--disabled' : ''}`}
            onClick={() => handlePageChange(currentIndex + 1)}
          >&gt;</div>
        </div>
      </div>
    </div>
  );
}
export default React.memo(Table);