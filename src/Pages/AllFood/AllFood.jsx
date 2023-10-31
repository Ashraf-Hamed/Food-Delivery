import React from 'react'
import CommonSection from '../../Components/UI/CommonSection'
import { Helmet } from 'react-helmet'
import products from '../../assets/data/products';
import { useState } from 'react';
import PopularFood from '../../Components/UI/PopularFood';
import ReactPaginate from 'react-paginate';
import FixedElement from '../../Components/FixedElement/FixedElement';

export default function AllFood() {

  const [pageNumber, setPageNumber] = useState(0);
  const [searchTerm, setSearchTerm] = useState("");

  const searchedProduct = products.filter((item) => {
    if (searchTerm.value === "") {
      return item;
    }
    if (item.title.toLowerCase().includes(searchTerm.toLowerCase())) {
      return item;
    } else {
      return console.log("not found");
    }
  });

  const productPerPage = 12;
  const visitedPage = pageNumber * productPerPage;

  const displayPage = searchedProduct.slice(
    visitedPage,
    visitedPage + productPerPage
  );

  const pageCount = Math.ceil(searchedProduct.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };
  return (
    <>

    <Helmet>
    
      <meta charSet="utf-8" />
      <title>All-Food</title>    
   </Helmet>

   <CommonSection title = 'All Food'/>
  <section >

   <div className="container">
      <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 mb-5 ">
              <div className='search__widget d-flex align-items-center justify-content-between w-50 mx-auto'>
                  <input type="text" placeholder='Search Now ... '    value={searchTerm}  onChange={(e)=>  setSearchTerm(e.target.value)}  />
                  <span><i className="ri-search-line"></i></span>
              </div>
          </div>

        


          {displayPage.map((item) => (
            <div className ="col-lg-3 col-md-4 col-sm-6 mt-5"  key={item.id} >
              <PopularFood item={item} />
            </div>
          ))}

          <div>
          <ReactPaginate
            pageCount={pageCount}
            onPageChange={changePage}
            previousLabel={"Prev"}
            nextLabel={"Next"}
            containerClassName=" paginationBttns "
            
          />
        </div>

      </div>
   </div>
  </section>

  <FixedElement/>
    
    </>
  )
}
