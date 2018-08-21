import React from 'react'
import { css } from 'emotion'

export default class SecurityIcon extends React.Component {
	render() {
		return (
			<svg
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 12.19 11.04"
				className={svgStyles}
			>
				<g id="Layer_2" data-name="Layer 2">
					<g id="Layer_1-2" data-name="Layer 1">
						<rect className="cls-1" x="0.16" y="0.16" width="11.86" height="7.2" />
						<rect className="cls-2" x="0.16" y="1.55" width="11.86" height="0.72" />
						<rect className="cls-2" x="0.16" y="3.12" width="11.86" height="0.34" />
						<path className="cls-3" d="M8.15,9.94H4v-5a2.09,2.09,0,0,1,4.17,0ZM4.73,9.2H7.4V4.92a1.34,1.34,0,1,0-2.67,0Z" />
						<rect className="cls-4" x="3.49" y="5.72" width="5.15" height="5.15" />
						<polyline className="cls-5" points="4.5 8.34 5.91 9.61 7.63 6.61" />
					</g>
				</g>
			</svg>
		)
	}
}

const svgStyles = css({
	transform: `translateY(30%)`,
	'.cls-1, .cls-5': {
		fill: `none`,
	},
	'.cls-1, .cls-3, .cls-4, .cls-5': {
		stroke: `#666667`,
		strokeMiterlimit: 10,
	},
	'.cls-1, .cls-4': {
		strokeWidth: `0.33px`,
	},
	'.cls-2': {
		fill: `#bfbebe`,
	},
	'.cls-3, .cls-4': {
		fill: `#fff`,
	},
	'.cls-3': {
		strokeWidth: `0.37px`,
	},
	'.cls-5': {
		strokeWidth: `0.65px`,
	},
})