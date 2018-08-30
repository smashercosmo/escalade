import validateAllInput from './validate-all-input'
import errorCheck from './error-check'
import nextStage from './next-stage'

export default function attemptSubmitInfo() {
	validateAllInput(`info`)
	setTimeout(() => {
		if (errorCheck()) return
		nextStage()
	}, 1)
}