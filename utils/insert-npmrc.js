const { readdir, outputFile, readFile } = require(`fs-extra`)
const globby = require(`globby`).sync


const globPaths = (path) => {
	return globby([
		`${path}/*`,
	], {
		onlyDirectories: true, // only want to get directories not files
	})
}

// this function will go through the packages folder and insert .npmrc files for any packages
// the .npmrc file will contain: tag-version-prefix="package_name@"

const insertIntoDirs =  (parentPath) => {
	globPaths(parentPath).forEach(async childPath => {
		const paths = globPaths(childPath)
		const directory = await readdir(childPath)

		if(directory.includes(`package.json`)) {
			// if the dir has a package.json, it is considered a package and needs to insert an .npmrc
			const { name } = JSON.parse(await readFile(`${childPath}/package.json`, `utf8`))
			await outputFile(`${childPath}/.npmrc`, `tag-version-prefix="${name}@"`)
		} else if (Array.isArray(paths) && paths.length) {
			// directory with child packages
			insertIntoDirs(childPath)
		} else {
			// there are no more children for this directory and there is no package.json
			console.log(`Package Must include a package.json to be considered a package`)
		}
	})
}

try {
	insertIntoDirs(`packages`)
} catch(e) {
	console.error(e)
	process.exit(1)
}