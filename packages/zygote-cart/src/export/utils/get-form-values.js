import formToObj from 'form-to-object'

export default function getFormValues(){
	let obj = {}
	const forms = document.querySelectorAll(`.zygoteCart form`)
	forms.forEach(form => {
		const formName = form.getAttribute(`data-form`)
		if(!formName) return
		obj[formName] = formToObj(form)
	})
	console.log(obj)
	return obj
}