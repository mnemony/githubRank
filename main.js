function warmia() {

    document.getElementById('chart-area').innerHTML = "";
    const selector = document.querySelector('select').value;
    const request = new XMLHttpRequest();
    const canvasGen = document.getElementById('chart-area');

    const names = [];
    const stars = [];

    request.open('GET', `https://api.github.com/search/repositories?q=language:${selector}&sort=stars`, true)
    request.onload = function () {
        // Begin accessing JSON data here

        var data = JSON.parse(this.response)

        var dateeert = data['items'];

        if (request.status >= 200 && request.status < 400) {
            dateeert.forEach(movie => {
                names.push(movie.name)
                stars.push(movie.stargazers_count)

            })
        } else {
            console.log('error')
        }

        const task = document.createElement('canvas');
        task.id = 'myChart';
        canvasGen.appendChild(task);


        var ctx = document.getElementById('myChart').getContext('2d');
        var chart = new Chart(ctx, {
            // The type of chart we want to create
            type: 'bar',


            // The data for our dataset
            data: {
                labels: [names[0], names[1], names[2], names[3], names[4], names[5], names[6]],
                datasets: [{
                    label: 'My First dataset',
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: [stars[0], stars[1], stars[2], stars[3], stars[4], stars[5], stars[6]]
                }]
            },

            // Configuration options go here
            options: {}
        });

    }
    request.send()

}