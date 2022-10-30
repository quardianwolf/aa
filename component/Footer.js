import React from 'react'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 space_bot_40 logo-footer-home2">
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 text-left logo-footer clear-space-left">
              <a href="#" className="inline-block"><img src="/asset/img/logo2.png" height="160px" width="280px" className="img-responsive" alt="" /></a>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 text-right newsletter clear-space-right">
              <a href="https://www.instagram.com/fantezidunyam_/" className="des-font delay03 inline-block"><span>Bizi Instagramda Takip Et.</span> <i className="ti-instagram delay03"></i></a>
            </div>
            
          </div>
          <div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 space_bot_40 copy-footer-home2">

            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 text-left copy clear-space">
              <p className="des-font copy-text space_top_40">Copyright © 2022 FanteziDunyam.com  | Tüm haklari saklidir.</p>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 text-right social-footer clear-space">
              <div className="social-home2 space_top_40">
              <a href="#" className="delay03 inline-block space_left_40"><i className="ti-facebook delay03"></i></a>
              <a href="#" className="delay03 inline-block space_left_40"><i className="ti-twitter-alt delay03"></i></a>
              <a href="#" className="delay03 inline-block space_left_40"><i className="ti-pinterest delay03"></i></a>
              <a href="#" className="delay03 inline-block space_left_40"><i className="ti-linkedin delay03"></i></a>
              </div>
            </div> 
          </div>
        </div>
      </div>
</footer>
  )
}

export default Footer