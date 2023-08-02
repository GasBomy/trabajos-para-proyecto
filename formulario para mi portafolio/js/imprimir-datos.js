let obtenerDatos = localStorage.getItem('datoss');
console.log(obtenerDatos);


const cargarDatos = ()=>{

	let informacion = document.getElementById('informacion')
	cargarDatos.innerText = '';

	let mismaInformacion = JSON.parse(localStorage.getItem('datoss'));

	for (let i = 0; i < mismaInformacion.length; i++) {

		let persona = document.createElement('div')

		let datoNombre = document.createElement('h2')
		let datoApellido = document.createElement('h2')
		let datoEdad = document.createElement('h2')
		let datoNacimiento = document.createElement('h2')
		let datoProvincia = document.createElement('h2')
		let datoGenero = document.createElement('h2')
		let datoEmail = document.createElement('h2')
		let datoComentario = document.createElement('h2')


		datoNombre.textContent = 'NOMBRE: '+ mismaInformacion[i].Name;
		datoApellido.textContent ='APELLIDO: ' + mismaInformacion[i].Surname;
		datoEdad.textContent ='EDAD: ' + mismaInformacion[i].Age;
		datoNacimiento.textContent ='FECHA DE NACIMIENTO: '+ mismaInformacion[i].Birthdate;
		datoProvincia.textContent ='PROVINCIA: '+ mismaInformacion[i].Province;
		datoGenero.textContent ='SEXO: '+ mismaInformacion[i].Gender;
		datoEmail.textContent ='CORREO ELECTRONICO: '+ mismaInformacion[i].Email;
		datoComentario.textContent ='INQUIETUDES: '+ mismaInformacion[i].Comments;

		persona.appendChild(datoNombre);
		persona.appendChild(datoApellido);
		persona.appendChild(datoEdad);
		persona.appendChild(datoNacimiento);
		persona.appendChild(datoProvincia);
		persona.appendChild(datoGenero);
		persona.appendChild(datoEmail);
		persona.appendChild(datoComentario);

		informacion.appendChild(persona);

	}

}
cargarDatos()