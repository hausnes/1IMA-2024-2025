async function hentPerson() {
    const res = await fetch('https://randomuser.me/api/?results=5');
    const data = await res.json();
    
    console.log(data.results[0]);
    console.log(data.results[0].gender);
    console.log(data.results[0].name.first);
    console.log(data.results[0].picture.thumbnail);

    for (let i = 0; i < data.results.length; i++) {
        let infoOmPerson = document.createElement('div');
        infoOmPerson.innerText = data.results[i].name.first + " (" + data.results[i].gender + ")";
        document.body.appendChild(infoOmPerson);

        let bildeAvPerson = document.createElement('img');
        bildeAvPerson.src = data.results[i].picture.thumbnail;
        document.body.appendChild(bildeAvPerson);
    }
}

hentPerson(); // Slik at me får ein vits med ein gong me lastar sida