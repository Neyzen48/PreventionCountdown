let countdown = 20;
renderCountdown(countdown);
console.log('test')

function renderCountdown(number) {
    let n1 = Math.floor(number/100);
    number = number-(n1*100);
    let n2 = Math.floor(number/10);
    number = number-(n2*10);
    let n3 = number;
    const digit1 = document.getElementById('digit1');
    const digit2 = document.getElementById('digit2');
    const digit3 = document.getElementById('digit3');
    digit1.innerText = `${n1}`;
    digit2.innerText = `${n2}`;
    digit3.innerText = `${n3}`;
}
function decreaseCountdown() {
    if(countdown===0) return resetCountdown();
    renderCountdown(--countdown);
}

function resetCountdown() {
    renderCountdown(countdown=100);
}

const datasets = [
    {
        label: 'Günde',
        data: [33, 33, 33],
        backgroundColor: ['#eb5156', '#8d8d8d', '#880808'],
        font: 'Troy Sans Regular',
    },
    {
        label: 'Unfallgründe',
        data: [31.6, 18.9, 8.7, 3.1, 4.2],
        backgroundColor: ['#eb5156', '#8d8d8d', '#880808', '#CC5500', '#36454F'],
    }
];
const labels = [
    ['Persönliche Gründe (Eile)', 'Organisatorische Gründe (Gegenstände auf der Treppe)', 'Technische Gründe (fehlerhafte Treppe)'],
    ['Bauliche Anlagen (darunter Treppen)', 'Stoffe', 'Werkzeuge', 'Handwerkzeuge', 'Maschinen']
];

document.addEventListener('DOMContentLoaded', function() {
    const ctx = document.getElementById('myPieChart').getContext('2d');
    
    let currentDatasetIndex = 0;

    const myChart = new Chart(ctx, {
        type: 'doughnut',
        data: {
            labels: labels[currentDatasetIndex],
            datasets: [datasets[currentDatasetIndex]]
        },
        options: {
            responsive: true,
            plugins: {
                legend: {
                    position: 'top'
                },
                datalabels: {
                    color: '#ffffff',
                    font: {
                        weight: 'bold',
                        size: 14
                    },
                    formatter: (value) => `${value}%`,
                    anchor: 'right',
                    align: 'right'
                }
            }
        },
        plugins: [ChartDataLabels]
    });

    
    function switchChartData() {
        
        currentDatasetIndex = (currentDatasetIndex + 1) % datasets.length;
        
        myChart.data.labels = labels[currentDatasetIndex];
        myChart.data.datasets[0] = datasets[currentDatasetIndex];
        
        
        myChart.update();
    }

    setInterval(switchChartData, 15000);
});


    function openModal() {
        document.getElementById('infoModal').style.display = 'block';
        document.getElementById('modalOverlay').style.display = 'block';
    }

    function closeModal() {
        document.getElementById('infoModal').style.display = 'none';
        document.getElementById('modalOverlay').style.display = 'none';
    }

    const images = ["Laufhantel.webp", "Handy.webp"];
    const captions = [
        "Achte beim Treppensteigen darauf, dass du die Laufhantel benutzt.",
        "Vermeide Ablenkungen, wie das Benutzen eines Handys, während du die Treppe nutzt."
    ];
    let currentImageIndex = 0;

    function updateImage() {
        document.getElementById('infoImage').src = images[currentImageIndex];
        document.getElementById('imageCaption').innerText = captions[currentImageIndex];
    }

    function nextImage() {
        currentImageIndex = (currentImageIndex + 1) % images.length;
        updateImage();
    }

    function prevImage() {
        currentImageIndex = (currentImageIndex - 1 + images.length) % images.length;
        updateImage();
    }

    setInterval(nextImage, 5000);