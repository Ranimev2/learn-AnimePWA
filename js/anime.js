const base_url = "https://otakudesu-zeta.vercel.app/";
const base_url2 = "https://kumanimeapi.vercel.app/api/";

window.addEventListener("load", pageLoaded);

function pageLoaded() {
	const form = document.getElementById("search_form");
	form.addEventListener("submit",searchAnime);
}

function searchAnime(event) {

	event.preventDefault()

	const form = new FormData(this);
	const query = form.get("search");

	fetch(`${base_url2}/search/?${value}`)
	.then(res=>res.json())
	.then(updateDOM)
	.catch(err=>console.warn(err.message));
}

function updateDOM(data) {

	console.log(data.results);

	const searchResults = document.getElementById("search-results");

	searchResults.innerHTML = data.results
		.sort((a,b)=>a.episodes-b.episodes)
		.map(anime=>{
			return `
				<div class="card mx-auto my-2" style="width: 18rem;">
			    	<img class="card-img-top" src="${data.thumb}" alt="Card image cap">
			  		<div class="card-body">
				    	<h5 class="card-title">${data.title}</h5>
				    	<p class="card-text">${data.status}</p>
			  		</div>
				</div>	
			`
		});
}
