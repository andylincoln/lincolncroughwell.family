import React from 'react';

export default class MenuIcon extends React.Component {
	render() {
		const styleObject = {
			'shapeRendering':'geometricPrecision',
			'textRendering':'geometricPrecision',
			'imageRendering': 'optimizeQuality'
		}
		return (
			<svg
				className="icon icon-close"
				xmlns="http://www.w3.org/2000/svg" style={styleObject} viewBox="0 0 233 291.25" x="0px" y="0px" fillRule="evenodd" clip-rule="evenodd">
			<g transform="translate(-30 15)">
				<polygon fill="white" points="233,22 211,0 117,94 22,0 0,22 94,117 0,211 22,233 117,139 211,233 233,211 139,117 "/>
			</g>
			</svg>
		);
	}
}
