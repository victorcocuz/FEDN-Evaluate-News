function handleSubmit(event) {
    event.preventDefault()

    // Check if url provided is valid
    let formText = document.getElementById('name').value
   if (!Client.validateUrl(formText)) {
       console.log('URL is not valid');
       alert("Please provide a valid url!");
   }

    console.log("::: Form Submitted :::")
    console.log(JSON.stringify(formText))
    fetch('//localhost:8082/test', {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({'url': formText})
    })
    .then(res => res.json())
    .then(function(res) {
        console.log('res is ' + res.polarity);
        document.getElementById('polarity').innerHTML = `Polarity: ${res.polarity}`;
        document.getElementById('subjectivity').innerHTML = `Subjectivity: ${res.subjectivity}`;
        document.getElementById('polarity-confidence').innerHTML = `Polarity Confidence: ${res.polarity_confidence}`;
        document.getElementById('subjectivity-confidence').innerHTML = `Subjectivity Confidence: ${res.subjectivity_confidence}`;
    })
}

export { handleSubmit }
