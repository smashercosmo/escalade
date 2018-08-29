import React from "react"
import Img from "gatsby-image"
import { css } from "emotion"

import {
	ReviewSnippet,
	ReviewDisplay,
	ReviewSnapshot,
	ReviewList,
} from "../components/power-reviews"
import buttonStyles from "../styles/mixins/button"
import Layout from "../components/layouts/default"
import Meta from "../components/meta"
import Modal from "../components/modal"

export default class HomePage extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			open: false,
		}
	}
	render() {
		const { html, frontmatter } = this.props.data.markdownRemark
		const { headerImage } = frontmatter
		return (
			<Layout>
				<Meta />
				<div dangerouslySetInnerHTML={{ __html: html }} />
				<Img
					className={imageStyles}
					sizes={headerImage.childImageSharp.sizes}
					alt="Escalade Sports"
				/>
				<button
					onClick={() => this.setState({ open: true })}
					className={buttonStyles}
				>
					Test
				</button>
				<ReviewSnippet
					apiKey={`736c8245-31c3-4d28-918c-00c67e4b1d76`}
					merchantGroupId={`78902`}
					merchantId={`362623`}
					pageId={`b6101w`}
					wrapperUrl={`https://goalrilla.com/write-review/`}
				/>
				<ReviewDisplay
					apiKey={`736c8245-31c3-4d28-918c-00c67e4b1d76`}
					merchantGroupId={`78902`}
					merchantId={`362623`}
					pageId={`b6101w`}
					wrapperUrl={`https://goalrilla.com/write-review/`}
				/>
				<ReviewSnapshot
					apiKey={`736c8245-31c3-4d28-918c-00c67e4b1d76`}
					merchantGroupId={`78902`}
					merchantId={`362623`}
					pageId={`b6101w`}
					wrapperUrl={`https://goalrilla.com/write-review/`}
				/>
				<ReviewList
					apiKey={`736c8245-31c3-4d28-918c-00c67e4b1d76`}
					merchantGroupId={`78902`}
					merchantId={`362623`}
					pageId={`b6101w`}
					wrapperUrl={`https://goalrilla.com/write-review/`}
				/>
				<Modal
					open={this.state.open}
					onClose={() => this.setState({ open: false })}
				>
					<div>Modal content</div>
				</Modal>
			</Layout>
		)
	}
}

const imageStyles = css({
	marginBottom: 30,
})

export const query = graphql`
	query HomePage {
		markdownRemark(fileAbsolutePath: { regex: "/src/markdown/index.md/" }) {
			html
			frontmatter {
				headerImage {
					childImageSharp {
						sizes(maxWidth: 1600, quality: 100) {
							...GatsbyImageSharpSizes_withWebp
						}
					}
				}
			}
		}
	}
`
