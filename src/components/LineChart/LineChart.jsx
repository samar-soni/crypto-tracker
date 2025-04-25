import React, { useEffect, useState } from 'react'
import './LineChart.css'
import {Chart} from 'react-google-charts'

const LineChart = ({historicalData}) => {
    const [data, setData] = useState([["Data","Prices"]]);
    const [lineColor, setLineColor] = useState('#000000');

    useEffect(()=> {
        let dataCopy = [["Data","Prices"]];
        if(historicalData.prices){
            historicalData.prices.map((item)=>{
                // dataCopy.push([new Date(item[0]).toLocaleDateString(), item[1]])
                dataCopy.push([`${new Date(item[0]).toLocaleDateString().slice(0,-5)}`,item[1]])
            })
            
            // Determine if price is increasing or decreasing
            const firstPrice = historicalData.prices[0][1];
            const lastPrice = historicalData.prices[historicalData.prices.length - 1][1];
            setLineColor(lastPrice > firstPrice ? '#00FF00' : '#FF0000');
        }
        setData(dataCopy);
    },[historicalData])

    const options = {
        curveType: 'function',
        legend: { position: 'bottom' },
        colors: [lineColor],
        lineWidth: 2,
        pointSize: 0,
        chartArea: { width: '80%', height: '80%' }
    };

    return (
        <div className="chart-container">
            <Chart
                chartType='LineChart'
                data={data}
                height="330px"
                //  width="100%"
                options={options}
                legendToggle
            />
        </div>
    )
}

export default LineChart
