import React from 'react'
import { client, urlFor } from '../../lib/client';

const ProductDetails = ({ product:{image, name, details, price, color, categories, link }}) => {
  


  return (
    <div className='detailsP' >
      <main>
        <div className="banner margin_bottom_150">
          <div className="container">
            <h1 className="title-font title-banner banner-product-detail">{name}</h1>
            <ul className="breadcrumb des-font">
              <li><a href="/">Anasayfa</a></li>
              <li><a href="/urunler">Ürünler</a></li>
              <li className="active">{name}</li>
            </ul>
          </div>
        </div>
        <div className="container product-detail margin_bottom_150">
          <div className="row">
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 margin_bottom_50">
              <div className="slick-product-detail margin_bottom_20">
                {image?.map((item, i) => (
                  <div>
                    <img key={i} src={urlFor(item)} className="img-responsive" width="35%" alt="" />
                  </div>
                ))}
              </div>
              <div className="slick-nav-product-detail">
                {image?.map((item, i) => (
                  <div>
                    <img key={i} src={urlFor(item)} className="img-responsive" alt="" />
                  </div>
                ))}
              </div>
            </div>
            <div className="col-lg-6 col-md-6 col-sm-12 col-xs-12 info-product-detail">
              <h1 className="title-font title-product margin_bottom_30">{name}</h1>
              <p className="number-font price margin_bottom_40">{price}  TL</p>
              <p className="product-preview margin_bottom_50">
                <i className="ti-star"></i>
                <i className="ti-star"></i>
                <i className="ti-star"></i>
                <i className="ti-star"></i>
                <i className="ti-star"></i>
                <span className="relative line-space">__</span>
                <span className="des-font">(02) Yorumlar</span>
              </p>
              <div className="margin_bottom_30">
                <select className="menu-font">
                  <option className="uppercase">Renk</option>
                  {color?.map((item, i) => (
                    <option key={i} className="capital">{item}</option>
                  ))}
                </select>
              </div>
              <div className="flex margin_bottom_50 border-bot space_bot_50 btn-function">
                <div className="input-number-group">
                  <div className="relative input-number-custom">
                    <div className="input-group-button absolute down-btn">
                      <span className="input-number-decrement ti-angle-down"></span>
                    </div>
                  </div>
                </div>
                <form action={link} encType="multipart/form-data" className="inline-block icon-addcart">
                  <button className="enj-add-to-cart-btn btn-default menu-font uppercase">Amazon ile satin al</button>
                </form>
              </div>
              <div className="inline-block border-bot">
                <div className="inline-block margin_bottom_50">
                  <button className="accordion menu-font btn-tab">Ürün Aciklamalari</button>
                  <div className="panel">
                    <p className="des-font des-tab"><br /><br />{details}<br /><br /></p>
                    <ul className="space_left_20 des-font des-tab">
                      <li>Türkiyede üretilmistir.</li>
                    </ul>
                  </div>
                </div>
                <div className="inline-block margin_bottom_50">
                  <button className="accordion menu-font btn-tab">Kargo</button>
                  <div className="panel">
                    <p className="des-font des-tab"><br /><br />Amazon Kargo ile ayni gun teslim sansi.<br /><br /></p>

                  </div>
                </div>
              </div>
              <div className="info-more">
                <p className="margin_bottom_30">
                  <span className="menu-font margin_right_30">Share:</span>
                  <a href="https://www.instagram.com/fantezidunyam_/" className="delay03 margin_right_30"><i className="ti-instagram"></i></a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}

export const getStaticPaths = async () => {
  const query = `*[_type == "product"] {
      slug {
        current
      }
    }
    `;

  const products = await client.fetch(query);

  const paths = products.map((product) => ({
    params: {
      slug: product.slug.current
    }
  }));

  return {
    paths,
    fallback: 'blocking'
  }
}

export const getStaticProps = async ({ params: { slug } }) => {
  const query = `*[_type == "product" && slug.current == '${slug}'][0]`;
  const productsQuery = '*[_type == "product"]'

  const product = await client.fetch(query);
  const products = await client.fetch(productsQuery);



  console.log(product);

  return {
    props: { products, product }
  }
}

export default ProductDetails