import React from 'react'

const Navbar = () => {
  return (
    <div>

    {/* end push menu*/}
    <header className="full-width fixed header-home2">
      <div className="container space_top_bot_55 delay03" id="menu-header">
        <div className="row flex">
          <div className="col-lg-1 col-md-2 col-sm-6 col-xs-5">
            <a href="/"><img src="/asset/img/logo2.png" height="160px" width="320px" alt="" className='logoresim' /></a>
          </div>
          <div className="col-lg-8 col-md-7 hidden-sm hidden-xs">
            <ul className="nav navbar-nav menu-font menu-main menu-home2">
              <li className="relative dropdown">
                <a href="/" className="link-menu delay03 uppercase">ANASAYFA</a>
                <figure className="line active_line absolute delay03" />
              </li>
              <li className="relative dropdown">
                <a href="/urunler" className="link-menu delay03 uppercase">ÜRÜNLER</a>
                <figure className="line absolute delay03" />
              </li>
             
              <li className="relative">
                <a href="" className="link-menu delay03 uppercase"></a>
                <figure className="line absolute delay03" />
              </li>
            </ul>
          </div>
          <div className="col-lg-3 col-md-3 col-sm-6 col-xs-7 text-right icon-main">
            {/* <a href="#" className="link-menu delay03 container_20 inline-block hidden-xs hidden-sm" id="btn-search"><i className="ti-search" /></a> */}
            <a href="#" className="link-menu delay03 inline-block hidden-md hidden-lg space_left_10 btn-push-menu">
              <svg width={26} height={16} version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" viewBox="0 0 66 41" xmlnsXlink="http://www.w3.org/1999/xlink" xmlSpace="preserve">
                <g>
                  <line className="st0" x1="1.5" y1="1.5" x2="64.5" y2="1.5" />
                  <line className="st0" x1="1.5" y1="20.5" x2="64.5" y2="20.5" />
                  <line className="st0" x1="1.5" y1="39.5" x2="64.5" y2="39.5" />
                </g>
              </svg>
            </a>
          </div>
        </div>
      </div>
    </header>
  </div>
  )
}

export default Navbar