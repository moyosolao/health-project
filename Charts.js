import { BarElement, CategoryScale, Chart as ChartJS, Legend, LinearScale, Title, Tooltip } from 'chart.js';
import React, { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const Charts = () => {
    const [data, setData] = useState({
        steps: { labels: [], data: [] },
        sleep: { labels: [], data: [] },
        calories: { labels: [], data: [] }
    });

    useEffect(() => {
        const fetchData = async () => {
            const token = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyM1MyNzkiLCJzdWIiOiI0TVlOV0MiLCJpc3MiOiJGaXRiaXQiLCJ0eXAiOiJhY2Nlc3NfdG9rZW4iLCJzY29wZXMiOiJyaHIgcmFjdCBybnV0IHJzbGUiLCJleHAiOjE3MTQxMjQ1MzAsImlhdCI6MTcxNDA5NTczMH0.1kwwzSHxG6x3Zi4vHQgdR2fpSrEz1UlpZg576hwFaac'; 

            const headers = {
                'Authorization': `Bearer ${token}`
            };

            try {
                const stepResponse = await fetch('https://api.fitbit.com/1/user/-/activities/steps/date/today/1w.json', { headers });
                const sleepResponse = await fetch('https://api.fitbit.com/1/user/-/sleep/date/today/1w.json', { headers });
                const caloriesResponse = await fetch('https://api.fitbit.com/1/user/-/activities/calories/date/today/1w.json', { headers });

                // Check response status for each fetch call.
                if (!stepResponse.ok) {
                    console.error(`Error fetching steps data: HTTP status ${stepResponse.status}`);
                }
                if (!sleepResponse.ok) {
                    console.error(`Error fetching sleep data: HTTP status ${sleepResponse.status}`);
                }
                if (!caloriesResponse.ok) {
                    console.error(`Error fetching calories data: HTTP status ${caloriesResponse.status}`);
                }

                const stepsData = await stepResponse.json();
                const sleepData = await sleepResponse.json();
                const caloriesData = await caloriesResponse.json();

                setData({
                    steps: {
                        labels: stepsData['activities-steps'] ? stepsData['activities-steps'].map(entry => entry.dateTime) : [],
                        data: stepsData['activities-steps'] ? stepsData['activities-steps'].map(entry => entry.value) : []
                    },
                    sleep: {
                        labels: sleepData['sleep'] ? sleepData['sleep'].map(entry => entry.dateOfSleep) : [],
                        data: sleepData['sleep'] ? sleepData['sleep'].map(entry => entry.minutesAsleep / 60) : [] // converting minutes to hours
                    },
                    calories: {
                        labels: caloriesData['activities-calories'] ? caloriesData['activities-calories'].map(entry => entry.dateTime) : [],
                        data: caloriesData['activities-calories'] ? caloriesData['activities-calories'].map(entry => entry.value) : []
                    }
                });
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
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
