import Link from 'next/link';
import React from 'react'
import product from '../fantezidunyamcom/schemas/product';
import { client, urlFor } from '../lib/client';

const urunler = ({ products }) => {

	return (
		<main className='urunlerP'>
			<div className="banner margin_bottom_150">
				<div className="container">
					<h1 className="title-font title-banner">Ürünler</h1>
					<ul className="breadcrumb des-font">
						<li><a href="Home1.html">Anasayfa</a></li>
						<li className="active">Ürünler</li>
					</ul>
				</div>
			</div>
			<div className="container shop-page margin_bottom_150">
				<div className="row">
					<div className="col-lg-12 col-md-12 col-sm-12 col-xs-12 content-shop full-shop">
						<div className="row btn-function-shop">
							<div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 margin_bottom_50">
								<button className="active" id="btn-grid"><i className="ti-layout-grid3-alt"></i></button>
								<button id="btn-list"><i className="ti-list"></i></button>
							</div>
							<div className="col-lg-6 col-md-6 col-sm-6 col-xs-6 margin_bottom_50 text-right select-view">
								<button><i className="ti-eye"></i></button>
							</div>
						</div>
						<div className="row">
							{products.map((product, index) => {
								const { name, price, slug, image } = product
								return (
									<Link href={`/product/${slug.current}`}>
										<div className="product col-lg-2 col-md-4 col-sm-6 col-xs-6 margin_bottom_50">
											<div className="img-product relative">
												<a href={slug}><img key={index} src={urlFor(image && image[0])} className="img-responsive" alt="" height={250} width={250} /></a>

												<figure className="absolute uppercase label-new title-font text-center">YENİ</figure>
												
											</div>
											<div className="product-info">
												<div className="info-product text-center">
													<h4 className="des-font capital title-product space_top_20"><a href="#">{name}</a></h4>
													<p className="number-font price-product"><span className="price">{price}  TL</span></p>
												</div>
											</div>
										</div>
									</Link>
								)
							})}
						</div>
					</div>
				</div>
			</div>
		</main>


	)
}

export const getServerSideProps = async () => {
	const query = '*[_type == "product"]';
	const products = await client.fetch(query);


	const categoryQuery = '*[_type == "category"]';
	const categoryData = await client.fetch(categoryQuery);

	const sizeQuery = '*[_type == "size"]';
	const sizeData = await client.fetch(sizeQuery);

	return {
		props: { products, categoryData, sizeData }
	}
}

export default urunler