import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Charts = () => { // Simulated data fetch from a Fitbit API
     const [data, setData] = useState({ steps: { labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], data: [3000, 6000, 4500, 5000, 6500] }, sleep: { labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], data: [6, 7.5, 8, 5, 7] }, calories: { labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], data: [220, 300, 250, 280, 270] } }); 
          useEffect(() => { // Placeholder for actual data fetching setData
        // eslint-disable-next-line no-unused-expressions
        ({ steps: { labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], data: [3000, 6000, 4500, 5000, 6500] }, sleep: { labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], data: [6, 7.5, 8, 5, 7] }, calories: { labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], data: [220, 300, 250, 280, 270] } });
     }, []);
    

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top',
            },
            title: {
                display: true,
                text: 'Fitbit Activity Data'
            }
        },
        scales: {
            y: {
                beginAtZero: true
            }
        }
    };

    const createChartData = (label, color, data) => ({
        labels: data.labels,
        datasets: [{
            label: label,
            data: data.data,
            backgroundColor: color.background,
            borderColor: color.border,
            borderWidth: 1
        }]
    });

    const stepData = createChartData('Steps', { background: 'rgba(53, 162, 235, 0.5)', border: 'rgba(53, 162, 235, 1)' }, data.steps);
    const sleepData = createChartData('Sleep Hours', { background: 'rgba(255, 99, 132, 0.5)', border: 'rgba(255, 99, 132, 1)' }, data.sleep);
    const calorieData = createChartData('Calories Burned', { background: 'rgba(75, 192, 192, 0.5)', border: 'rgba(75, 192, 192, 1)' }, data.calories);

    return (
        <div style={styles.container}>
            <Bar data={stepData} options={options} />
            <Bar data={sleepData} options={options} />
            <Bar data={calorieData} options={options} />
        </div>
    );
};

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '20px',
        gap: '20px',
        backgroundColor: '#f4f4f4',
        color: '#333',
        minHeight: '100vh'
    }
};

export default Charts;
