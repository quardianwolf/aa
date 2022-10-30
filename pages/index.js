import { client, urlFor } from '../lib/client';
import Link from 'next/link';



export default function Home({ products, bannerData, categoryData }) {
  return (
    <div title='Anasayfa'>
      <section id='hero' className='hero' >
        {bannerData.map((banner, index) => {
          return (
            <div className="slider-home2 container-fluid">
              <div className="row">
                <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                  <div className="text-slider-home2">
                    <p className="number-font uppercase number-year text-right delay2">{banner.tarih}</p>
                    <p className="number-font uppercase text-new relative text-right"><img src="/asset/img/%20slider-home2.png" className="img-responsive absolute delay1" alt="" />
                      <span className="delay2">{banner.slide_text1}</span>
                    </p>
                    <p className="menu-child-font uppercase text-collection text-left delay1_5">{banner.slide_text2} <span className="des-font">+</span></p>
                  </div>
                </div>
                <div className="col-lg-7 col-md-7 col-sm-7 col-xs-7 relative">
                  <div className="info-slider-home2 absolute">
                    <div className="flex">
                      <p className="number-font number-dot delay1_5">01<img src="/asset/img/line-slider-home2.jpg" className="img-responsive delay1_5 hidden-xs" alt="" /></p>
                    </div>
                    <h1 className="title-font capital title-slider-home2 delay1_5">{banner.slogan1}<br />{banner.slogan1_1}</h1>
                  </div>
                  <a href="#"><img key={index} src={urlFor(banner.image[0])} className="img-responsive img-slider-main delay1_5" alt="" /></a>
                </div>
              </div>
              <div className="row">
                <div className="col-lg-5 col-md-5 col-sm-5 col-xs-5">
                  <div className="text-slider-home2">
                    <p className="number-font uppercase number-year text-right delay2">{banner.tarih}</p>
                    <p className="number-font uppercase text-new relative text-right"><img src="asset/img/%20slider-home2.png" className="img-responsive absolute delay1" alt="" />
                      <span className="delay2">{banner.slide_text1}</span>
                    </p>
                    <p className="menu-child-font uppercase text-collection text-left delay1_5">{banner.slide_text2} <span className="des-font">+</span></p>
                  </div>
                </div>
                <div className="col-lg-7 col-md-7 col-sm-7 col-xs-7 relative">
                  <div className="info-slider-home2 absolute">
                    <div className="flex">
                      <p className="number-font number-dot delay1_5">02<img src="asset/img/line-slider-home2.jpg" className="img-responsive delay1_5 hidden-xs" alt="" /></p>
                    </div>
                    <h1 className="title-font capital title-slider-home2 delay1_5">{banner.slogan2} <br />{banner.slogan2_2}</h1>
                  </div>
                  <a href="#"><img src={urlFor(banner.image[1])} className="img-responsive img-slider-main delay1_5" alt="" /></a>
                </div>
              </div>
            </div>
          )
        })}
      </section>
      <div className="flex fixed right social-fixed delay03">
        <a href="https://www.instagram.com/fantezidunyam_/" className="delay03"><i className="ti-instagram"></i></a>
      </div>
      <section id='category' className='category'>
        <div class="show-banner-home2 container">
          <div class="row flex show-banner-2-home2">
            {categoryData.map((cat, index) => {
              return (
                <div class="banner-col-1 clear-space" key={index}>
                  <div class="relative text-comment">
                    <a href="#" class="over-hidden"><img src={urlFor(cat.image.asset._ref)} class="img-responsive hover-zoom-out" alt="" /></a>
                  </div>
                </div>
              )
            })}
          </div>
        </div>
      </section>
      <section id='products' className='products'>
        <div class="similar-home2 container container_180">
          <div class="row">
            <h1 class="title-font title-similar">Sizin için önerdiklerimiz</h1>
            <p class="des-font des-similar space_top_20 space_bot_60">Odanız geceleri cok mu karanlik, Fantezidunyam ile odanız alev alacak!</p>
            <div class="slick-similar">
              {products.map((product, index) => {
                const { image, slug, name, category } = product
                return (
                  <Link href={`/product/${slug.current}`}>
                    <div class="designer relative">
                      <a href={slug} class="inline-block"><img src={urlFor(image && image[0])} class="img-responsive" alt="" /></a>
                      <div class="overlay-mini absolute delay03"></div>
                      <div class="absolute button-animate delay03"><button class="text-center"><i class="ti-arrow-top-right delay03"></i></button></div>
                      <div class="info-similar absolute delay03">
                        <h3 class="name number-font uppercase text-center">{name}</h3>
                        <p class="des-font capital text-center">{category}</p>
                      </div>
                    </div>
                  </Link>
                )
              })}
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
export const getServerSideProps = async () => {
  const query = '*[_type == "product"]';
  const products = await client.fetch(query);

  const bannerQuery = '*[_type == "banner"]';
  const bannerData = await client.fetch(bannerQuery);

  const categoryQuery = '*[_type == "category"]';
  const categoryData = await client.fetch(categoryQuery);

  return {
    props: { products, bannerData, categoryData }
  }
}