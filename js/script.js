fetch('https://loripsum.net/api')
    .then((response) => {
        return response.text()
    })
    .then((data) => {
        // API Container
        const cont = document.getElementById('api-cont')
            // Set Content to be retrieved data
        cont.innerHTML = data

    })
    .catch((err) => {
        console.log('error')
    })



