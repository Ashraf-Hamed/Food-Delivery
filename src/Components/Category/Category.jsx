import React from 'react'

import cat1 from '../../assets/images/category-01.png'
import cat2 from '../../assets/images/category-02.png'
import cat3 from '../../assets/images/category-03.png'
import cat4 from '../../assets/images/category-04.png'

export default function Category() {
  return (
    <>

    <div className="container category">
            <div className="row gy-3">
                    <div className="col-lg-3 col-md-4">
                            <div className="category__item d-flex align-items-center gap-3">
                                    <div className="category__img">
                                            <img src={cat1} alt="category" />
                                    </div>

                                    <h6>Fastfood</h6>
                            </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                            <div className="category__item d-flex align-items-center gap-3">
                                    <div className="category__img">
                                            <img src={cat2} alt="category" />
                                    </div>

                                    <h6>Pizza</h6>
                            </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                            <div className="category__item d-flex align-items-center gap-3">
                                    <div className="category__img">
                                            <img src={cat3} alt="category" />
                                    </div>

                                    <h6>Asian Food</h6>
                            </div>
                    </div>
                    <div className="col-lg-3 col-md-4">
                            <div className="category__item d-flex align-items-center gap-3 ">
                                    <div className="category__img">
                                            <img src={cat4} alt="category" />
                                    </div>

                                    <h6>Row Meat</h6>
                            </div>
                    </div>
            </div>
    </div>
      
    </>
  )
}
