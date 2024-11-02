# React Chart Visualizer

![React](https://img.shields.io/badge/React-20232A?style=flat&logo=react&logoColor=fff&labelColor=grey&color=62d9fb)
[![License](https://img.shields.io/badge/License-MIT-blue.svg)](https://github.com/WoongyuChoi/react-chart-visualizer/blob/main/LICENSE)
![Platform](https://img.shields.io/badge/platform-web-blue)
![GitHub release (latest by date)](https://img.shields.io/github/v/release/WoongyuChoi/react-chart-visualizer)

<figure align="center">
    <img src="https://github.com/user-attachments/assets/fd4bb4dc-6221-4ec8-8e1a-5008d03e9126" width="80%"/>
</figure>

## Overview

This project is built using React, TypeScript, and Vite, with Chart.js for chart visualizations. It serves as a tool for visualizing data using interactive charts.

## Features

- **React**: A JavaScript library for building user interfaces.
- **TypeScript**: Typed superset of JavaScript that provides static typing.
- **Vite**: A fast build tool for modern web projects.
- **Chart.js**: A powerful JavaScript library used to create beautiful charts.
- **react-chartjs-2**: React wrapper for Chart.js, making it easier to integrate charts within React components.

## Setup

1. Clone the repository:
    ```bash
    https://github.com/WoongyuChoi/react-chart-visualizer.git
    ```

2. Navigate into the project directory:
    ```bash
    cd react-chart-visualizer
    ```

3. Install dependencies:
    ```bash
    npm install
    ```

4. Start the development server:
    ```bash
    npm run dev
    ```

5. To build for production:
    ```bash
    npm run build
    ```

## Usage

This project uses `react-chartjs-2` to integrate Chart.js charts into React components. You can create various types of charts like bar, line, pie, and more.

Example of how to use a bar chart in the project:

```tsx
import { Bar } from 'react-chartjs-2';

const data = {
  labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
  datasets: [
    {
      label: '# of Votes',
      data: [12, 19, 3, 5, 2, 3],
      backgroundColor: 'rgba(75, 192, 192, 0.2)',
      borderColor: 'rgba(75, 192, 192, 1)',
      borderWidth: 1,
    },
  ],
};

const options = {
  scales: {
    y: {
      beginAtZero: true,
    },
  },
};

export function BarChart() {
  return <Bar data={data} options={options} />;
}
```

## License

This project is licensed under the MIT License.
