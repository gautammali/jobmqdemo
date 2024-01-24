import React, { useEffect } from 'react';
import Highcharts from 'highcharts';
// import exporting from 'highcharts/modules/exporting';
// import exportData from 'highcharts/modules/export-data';

// // Initialize the required modules
// exporting(Highcharts);
// exportData(Highcharts);

function PieChart({ info,title,id }) {

    useEffect( () => {
        const data = info?.map((item) => [item?.status, item?.statusCount]);
        // Chart options
        const options = {
            chart: {
                type: 'pie',
            },
            title: {
                text: title,
            },
            // Add your data and other chart configuration here
            series: [
                {
                    name: 'Total',
                    data,
                },
            ],
        };

        // Render the chart
        Highcharts.chart(id, options);
    }, [id, info, title]);

    return <div id={id}></div>;
}

export default PieChart;
