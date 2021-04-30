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

$(document).ready(function() {

    var $window = $(window);

    function checkWindowWidth() {

        var windowsize = $window.width();

        if (windowsize > 1000) {

            $('#navbar').css('display', 'block');

        } else {

            $('#navbar').css('display', 'none');

        }
    }

    checkWindowWidth();

    $(window).resize(checkWindowWidth);

});


$('#navbar-btn').click(function() {
    
    $('#navbar').toggle();
});
