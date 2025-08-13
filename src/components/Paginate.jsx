import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import Card from './Card';

import image from '../assets/12.png'

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function Items({ currentItems }) {
  return (
    <>
      <div className='flex gap-6 flex-wrap justify-center md:justify-start'>
        {currentItems &&
        currentItems.map((item) => (
          <div>
            <Card title='Nike Air Zoom Pegasus' category='bag' price='$ 12.99' src={image}/>
          </div>
        ))}
      </div>
    </>
  );
}

function Paginate({ itemsPerPage }) {

  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = items.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(items.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % items.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <div className='pt-12'>
        <ReactPaginate
        breakLabel="..."
        nextLabel=""
        onPageChange={handlePageClick}
        pageRangeDisplayed={5}
        pageCount={pageCount}
        previousLabel=""
        renderOnZeroPageCount={null}
        containerClassName="flex"
        pageLinkClassName="border border-[#0000001a] py-2 px-3 text-black mr-4"
        activeLinkClassName="bg-black text-white"
      />
      </div>
    </>
  );
}


export default Paginate