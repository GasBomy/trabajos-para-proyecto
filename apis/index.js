function getCharacter(done){
	const results = fetch("https://rickandmortyapi.com/api/character?page=2")

	results
	.then(response=>response.json())
	.then(data=>{
		done(data)
	})
}

getCharacter(data=>{
	data.results.forEach(personaje=>{
		

		const article = document.createRange().createContextualFragment(/*html*/`

			
		       <article>
			        <div>
				       <img src="${personaje.image}">
			         </div>
			         <h2>${personaje.name}</h2>
			         <span>${personaje.status}</span>
		        </article>

		`)

		const main = document.querySelector('main');
		main.appendChild(article)

	})
	
})




const meteorito = document.getElementById('meteoros')


function caida (){

	let bolas =document.createElement('div')
	let sizeW= Math.random()* 12
	let timeAnimation= Math.random()*5
	bolas.setAttribute('class', 'circulos')
	meteorito.appendChild(bolas)
	bolas.style.width = 5 + sizeW + 'px'
	bolas.durationAnimation= 5+ timeAnimation + 's'
	bolas.style.left= Math.random()* + innerWidth +'px'



setTimeout(function(){
	meteorito.removeChild(bolas)
},5000)

}
setInterval(function(){ 
	caida()
	},200)