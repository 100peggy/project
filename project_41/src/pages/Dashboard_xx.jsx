// import HomeTable from '../features/homes/HomeTable';
import { useHomesOpen } from './open/features/homes/useHomesOpen';
import './Dashboard.css';
import Row from '../ui/Row';
import React, { useState } from 'react';

const Dashboard_xx = () => {
  const { make, isLoading } = useHomesOpen();
  console.log('home make', make);

  const [listVisible, setListVisible] = useState([]);

  const toggleList = (index) => {
    const newListVisible = [...listVisible];
    newListVisible[index] = !newListVisible[index];
    setListVisible(newListVisible);
  };
  return (
    <>
      <div className='hero_area'>
        {/* <!-- header section strats --> */}
        <header className='header_section'>
          <nav className='navbar navbar-expand-lg custom_nav-container'>
            <a className='navbar-brand' href='index.html'>
              <span> Giftos </span>
            </a>
            <button
              className='navbar-toggler'
              type='button'
              data-toggle='collapse'
              data-target='#navbarSupportedContent'
              aria-controls='navbarSupportedContent'
              aria-expanded='false'
              aria-label='Toggle navigation'
            >
              <span className=''></span>
            </button>
          </nav>
        </header>
        {/* <!-- end header section -->
      <!-- slider section --> */}

        <section className='slider_section'>
          <div className='slider_container'>
            <div
              id='carouselExampleIndicators'
              className='carousel slide'
              data-ride='carousel'
            >
              <div className='carousel-inner'>
                <div className='carousel-item active'>
                  <div className='container-fluid'>
                    <div className='row'>
                      <div className='col-md-7'>
                        <div className='detail-box'>
                          <h1>
                            Welcome To Our <br />
                            Gift Shop
                          </h1>
                          <p>
                            Sequi perspiciatis nulla reiciendis, rem, tenetur
                            impedit, eveniet non necessitatibus error distinctio
                            mollitia suscipit. Nostrum fugit doloribus
                            consequatur distinctio esse, possimus maiores
                            aliquid repellat beatae cum, perspiciatis enim,
                            accusantium perferendis.
                          </p>
                          <a href=''> Contact Us </a>
                        </div>
                      </div>
                      <div className='col-md-5'>
                        <div className='img-box'>
                          <img src='images/slider-img.png' alt='' />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* <!-- end slider section --> */}
      </div>
      {/* <!-- end hero area -->

    <!-- shop section --> */}

      <section className='shop_section layout_padding'>
        <div className='container'>
          <div class='flex justify-between'>
            <div className='btn-box  m-8'>
              <a href=''> salty </a>
            </div>{' '}
            <div className='btn-box m-8'>
              <a href=''> sweet </a>
            </div>
          </div>

          <div className='heading_container heading_center m-8'>
            <h2>Latest Products</h2>
          </div>
          <div className='row'>
            {make?.map((data, index) => {
              const { id, img, name, steps, Ingredients } = data;
              return (
                <div className='col-sm-6 col-md-4 col-lg-3'>
                  <div className='box'>
                    {/* <a href=""> */}
                    <button id='test01' onClick={() => toggleList(index)}>
                      {/* 點擊後顯示/隱藏ul */}
                      <div className='img-box'>
                        <div class='mainPro-img'>
                          <img class='qqq' src={img} alt='' />{' '}
                        </div>
                      </div>
                      <div className='detail-box'>
                        <h6>
                          <span> {name}</span>
                        </h6>
                      </div>
                    </button>
                    {listVisible[index] && (
                      <ul>
                        {/* ul的內容 */}
                        <h6>
                          <br></br>
                          <br></br>
                          <span> {Ingredients}</span>
                        </h6>{' '}
                        <br></br>
                        <p> {steps}</p>
                      </ul>
                    )}

                    <div className='new'>
                      <span> {id} </span>
                    </div>
                    <ul style={{ display: 'none' }}>{/* 隱藏所有li */}</ul>
                    {/* </a> */}
                  </div>
                  <div class='popup-container' id='popupContainer'>
                    <div class='popup'>
                      {/* <!-- 這裡放置彈出視窗的內容 --> */}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Dashboard_xx;
