const getData = input => {
	// make an http get request
	// using axios 
	// axios.get(`https://rickandmortyapi.com/api/character?name=${input}`)
	// 	.then(response => {
	// 		console.log(response)
	// 		const character = response.data.results[0]
	// 		// update the dom
	// 		document.querySelector('h3').innerText = character.name
	// 		document.querySelector('img').setAttribute('src', character.image)
	// 	})
	// 	.catch(err => console.log(err))

	// using the fetch api
	fetch(`https://rickandmortyapi.com/api/character?name=${input}`)
		.then(response => response.json())
		.then(data => {
			console.log(data)
		})
}

console.log('rick')

document.querySelector('button').addEventListener('click', () => {
	const input = document.querySelector('input').value
	console.log(input)
	// get the data from the rick and morty api
	getData(input)
})