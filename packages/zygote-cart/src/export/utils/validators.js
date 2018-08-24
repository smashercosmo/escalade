const validators = []

function addValidator(fn){
	validators.push(fn)
}

function removeValidator(fn){
	const index = validators.indexOf(fn)
	if(index > -1){
		validators.splice(index, 1)
	}
}

function triggerValidators(){
	for(let i = validators.length; i--;){
		validators[i]()
	}
}

export {
	addValidator,
	removeValidator,
	triggerValidators,
}