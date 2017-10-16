import React from 'react'
import Layout from 'components/_layout'
import Link from 'next/link'
import DealerLocator from 'components/dealer-locator/index'

export default class extends React.Component {
	render(){
		return(
			<Layout>
				<div>
					<Link href='/product?id=as825r10' as='/product/as825r10' prefetch>
						<a>Product</a>
					</Link>
				</div>
				<div>
					<Link href='/category?id=traditional' as='/category/traditional' prefetch>
						<a>Category</a>
					</Link>
				</div>
				<div>
					<Link href='/page?id=about' as='/about'>
						<a>About</a>
					</Link>
				</div>
				<div>
					<Link href='/contact?id=contact' as='/contact'>
						<a>Contact</a>
					</Link>
				</div>
				<section>
					<div>1</div>
					<div>2</div>
				</section>
				<style jsx>{`
					section{
						lost-utility: clearfix;
						div{
							lost-column: 1/2;
						}
					}
				`}</style>
			</Layout>
		)
	}
}
