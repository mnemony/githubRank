//Main functrion

function runChart() {

    document.getElementById('chart-area').innerHTML = "";
    let selector = document.querySelector('select').value;
    const request = new XMLHttpRequest();
    const canvasGen = document.getElementById('chart-area');

    const names = [];
    const stars = [];

    request.open('GET', `https://api.github.com/search/repositories?q=language:${selector}&sort=stars`, true)
    request.onload = function () {
        // Begin accessing JSON data here

        let data = JSON.parse(this.response)

        let dateeert = data['items'];

        //Collect data from API
        if (request.status >= 200 && request.status < 400) {
            dateeert.forEach(rep => {
                names.push(rep.name)
                stars.push(rep.stargazers_count)

            })
        } else {
            console.log('error')
        }

        const task = document.createElement('canvas');
        task.id = 'myChart';
        canvasGen.appendChild(task);

        if (selector === 'Cpp') {
            selector = 'C++'
        }

        if (selector === 'Csharp') {
            selector = 'C#'
        }


        let ctx = document.getElementById('myChart').getContext('2d');
        let chart = new Chart(ctx, {
            type: 'bar',


            // The data for dataset
            data: {
                labels: [names[0], names[1], names[2], names[3], names[4], names[5], names[6]],
                datasets: [{
                    label: `${selector} top repos`,
                    backgroundColor: 'rgb(255, 99, 132)',
                    borderColor: 'rgb(255, 99, 132)',
                    data: [stars[0], stars[1], stars[2], stars[3], stars[4], stars[5], stars[6]]
                }]
            },


        });

    }
    request.send()

}