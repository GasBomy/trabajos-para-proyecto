let form = document.getElementById('formulario');
let info =[];

const enviar=(e)=>{
	e.preventDefault()
	console.log(form.name.value);


	const datos={
		Name: form.name.value,
		Surname: form.surname.value,
		Age: form.age.value,
		Birthdate: form.date.value,
		Province: form.province.value,
		Gender: form.gender.value,
		Email: form.email.value,
		Comments: form.coment.value,

	}

	info.push(datos)
	console.log(info)


	let datoSto = JSON.stringify(info);
	localStorage.setItem('datoss', datoSto) 


		
	

}
form.onsubmit = enviar;
