const path = require(`path`)
const select = require(`unist-util-select`)
const makeRelative = require(`./make-relative`)

module.exports = async ({ markdownNode, markdownAST, getNode }, options) => {
	const imgs = select(markdownAST, `image`)
	const extensions = options && options.extensions && new Set(options.extensions)
	if(imgs.length){
		const { absolutePath } = getNode(markdownNode.parent)
		const newPaths = await Promise.all(imgs.map(({ url }) => {
			return makeRelative(absolutePath, url, options)
		}))
		imgs.forEach((img, key) => {
			if (!extensions || extensions.has(path.extname(img.url))) {
				img.url = newPaths[key]
			}
		})
	}
}