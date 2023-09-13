window.addEventListener('load', () => {
	try {
		let xhr = new XMLHttpRequest();

		xhr.addEventListener('readystatechange', () => {
			if ((xhr.readyState===4) && (xhr.status===200)) {
                //todo: Parse the JSON data and display it
			}
		});

		xhr.open('get', '../../files/movies.json');
		xhr.send();
	} catch (e) {
			console.error(`Error creating request: ${e}`);
	}
});