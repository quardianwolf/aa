import React from 'react'
import { client, urlFor } from '../../lib/client';

const ProductDetails = ({ product}) => {
  const { image, name, details, price, color, categories, link } = product;
  console.log(categories)

  return (
    <div className='detailsP' >
      <main>
        <div class="banner margin_bottom_150">
          <div class="container">
            <h1 class="title-font title-banner banner-product-detail">{name}</h1>
            <ul class="breadcrumb des-font">
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
            <div class="col-lg-6 col-md-6 col-sm-12 col-xs-12 info-product-detail">
              <h1 class="title-font title-product margin_bottom_30">{name}</h1>
              <p class="number-font price margin_bottom_40">{price}  TL</p>
              <p class="product-preview margin_bottom_50">
                <i class="ti-star"></i>
                <i class="ti-star"></i>
                <i class="ti-star"></i>
                <i class="ti-star"></i>
                <i class="ti-star"></i>
                <span class="relative line-space">__</span>
                <span class="des-font">(02) Yorumlar</span>
              </p>
              <div class="margin_bottom_30">
                <select class="menu-font">
                  <option class="uppercase">Renk</option>
                  {color?.map((item, i) => (
                    <option key={i} class="capital">{item}</option>
                  ))}
                </select>
              </div>
              <div class="flex margin_bottom_50 border-bot space_bot_50 btn-function">
                <div class="input-number-group">
                  <div class="relative input-number-custom">
                    <div class="input-group-button absolute down-btn">
                      <span class="input-number-decrement ti-angle-down"></span>
                    </div>
                  </div>
                </div>
                <form action={link} enctype="multipart/form-data" class="inline-block icon-addcart">
                  <button class="enj-add-to-cart-btn btn-default menu-font uppercase">Amazon ile satin al</button>
                </form>
              </div>
              <div class="inline-block border-bot">
                <div class="inline-block margin_bottom_50">
                  <button class="accordion menu-font btn-tab">Ürün Aciklamalari</button>
                  <div class="panel">
                    <p class="des-font des-tab"><br /><br />{details}<br /><br /></p>
                    <ul class="space_left_20 des-font des-tab">
                      <li>Türkiye'de üretilmistir.</li>
                    </ul>
                  </div>
                </div>
                <div class="inline-block margin_bottom_50">
                  <button class="accordion menu-font btn-tab">Kargo</button>
                  <div class="panel">
                    <p class="des-font des-tab"><br /><br />Amazon Kargo ile ayni gun teslim sansi.<br /><br /></p>

                  </div>
                </div>
              </div>
              <div class="info-more">
                <p class="margin_bottom_30">
                  <span class="menu-font margin_right_30">Share:</span>
                  <a href="https://www.instagram.com/fantezidunyam_/" class="delay03 margin_right_30"><i class="ti-instagram"></i></a>
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