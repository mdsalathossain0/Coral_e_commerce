import React, { useEffect, useState } from 'react';
import ReactDOM from 'react-dom';
import ReactPaginate from 'react-paginate';
import Card from './Card';

import image from '../assets/12.png'
import axios from 'axios';

const items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14];

function Items({ currentItems }) {
  return (
    <>
      <div className='flex gap-6 flex-wrap justify-center md:justify-start'>
        {currentItems &&
        currentItems.map((item) => (
          <div>
            <Card title={item.title} category={item.category} price='$ 12.99' src={item.thumbnail}/>
          </div>
        ))}
      </div>
    </>
  );
}

function Paginate({ itemsPerPage }) {

  let [allitem, setAllitem]=useState([])

  useEffect(()=>{
   async function alldata(){
      let data =await axios.get('https://dummyjson.com/products')
      setAllitem(data.data.products)
    }
    alldata()
  },[])
 

  const [itemOffset, setItemOffset] = useState(0);

  const endOffset = itemOffset + itemsPerPage;
  console.log(`Loading items from ${itemOffset} to ${endOffset}`);
  const currentItems = allitem.slice(itemOffset, endOffset);
  const pageCount = Math.ceil(allitem.length / itemsPerPage);

  const handlePageClick = (event) => {
    const newOffset = (event.selected * itemsPerPage) % allitem.length;
    console.log(
      `User requested page number ${event.selected}, which is offset ${newOffset}`
    );
    setItemOffset(newOffset);
  };

  return (
    <>
      <Items currentItems={currentItems} />
      <div className='flex flex-col lg:flex-row justify-start lg:justify-between pt-12'>
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
      <p className='text-sm lg:text-base text-black font-normal font-san leading-6'>Products from {itemOffset + 1} to {endOffset>allitem.length ? allitem.length : endOffset } of {allitem.length}</p>
      </div>
    </>
  );
}


export default Paginate