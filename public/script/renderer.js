const datasets = [
    {
        label: 'Gründe',
        data: [33, 33, 33],
        backgroundColor: ['#eb5156', '#8d7400', '#880808'],
        font: 'Troy Sans Regular',
    },
    {
        label: 'Unfallgründe',
        data: [31.6, 18.9, 8.7, 3.1, 4.2],
        backgroundColor: ['#eb5156', '#8d7400', '#880808', '#CC5500', '#36454F'],
    }
];
const labels = [
    ['Persönliche Gründe (Eile)', 'Organisatorische Gründe\n(Gegenstände auf der Treppe)', 'Technische Gründe\n(fehlerhafte Treppe)'],
    ['Bauliche Anlagen (darunter Treppen)', 'Stoffe', 'Werkzeuge', 'Handwerkzeuge', 'Maschinen']
];

function dynamicFontSize(size) {
    return window.innerWidth / 1920 * 1.333333 * size;
}

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
            maintainAspectRatio: true,
            plugins: {
                legend: {
                    position: 'top',
                    labels: {
                        font: {
                            size: dynamicFontSize(14)
                        },
                        color: '#333'        // Font color
                    }
                },
                datalabels: {
                    color: '#ffffff',
                    font: {
                        weight: 'bold',
                        size: dynamicFontSize(16),
                    },
                    formatter: (value) => `${value}%`,
                    anchor: 'right',
                    align: 'center'
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

window.addEventListener('resize', () => {
    myChart.options.plugins.datalabels.font.size = dynamicFontSize(16);
    myChart.options.plugins.legend.labels.font.size = dynamicFontSize(14);

    myChart.update();
});


setInterval(switchChartData, 20000);
})


function openModal() {
    document.getElementById('infoModal').style.display = 'block';
    document.getElementById('modalOverlay').style.display = 'block';
}

function closeModal() {
    document.getElementById('infoModal').style.display = 'none';
    document.getElementById('modalOverlay').style.display = 'none';
}

const images = ["res/Laufhantel.webp", "res/Handy.webp"];
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