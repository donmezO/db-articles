// XHR
/*let xhr = new XMLHttpRequest();
	//xhr.open('GET','https://my-json-server.typicode.com/donmezO/db-articles/articles');
	xhr.open('GET', 'article.html.tpl');
	xhr.onload = function() {
		// template article.html
		let parserHTML = new DOMParser();
		let template = parserHTML.parseFromString(xhr.response, 'text/html')
		console.log(xhr.response);


		let xhrJSON = new XMLHttpRequest();
			xhrJSON.open('GET','https://my-json-server.typicode.com/donmezO/db-articles/articles');
			xhrJSON.onload = function() {
				// articles JSON
				let articles;
				try{
					articles = JSON.parse(xhrJSON.response);
				} catch(e){}
				
				if (articles) {
					for (let article of articles){
						document.querySelector('#articles').appendChild(template.body.first);
					}
				}
			}
			xhrJSON.send();
	}
	xhr.send();
	*/

// FETCH

fetch('article.html.tpl')
	.then( response => response.text() )
	.then( templateString => {
		let parserHTML = new DOMParser();
		let template   = parserHTML.parseFromString(templateString,'text/html').body.firstChild;

		console.log(template);
		fetch('https://my-json-server.typicode.com/donmezO/db-articles/articles')
			.then( response => response.json() )
			.then( articles => {
				if (articles){
					console.log(articles)
					for (let article of articles){
						let clone = template.cloneNode(true);
							clone.querySelector('[article-content]').innerText = article.content;
						document.querySelector(#articles).appendChild(clone);
					}
				}
			});
	});