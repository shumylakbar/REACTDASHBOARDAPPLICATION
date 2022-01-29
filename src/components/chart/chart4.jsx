import React, { Component} from 'react';
import ReactApexChart from 'react-apexcharts';

class PopChart2 extends Component {
    constructor(props) {
        super(props);
        this.state = {
           options: {
                chart: {                  
                    dropShadow: {
                      enabled: true,
                      color: '#000',
                      top: 18,
                      left: 7,
                      blur: 10,
                      opacity: 0.2
                    },
                    toolbar: {
                      show: false
                    }
                  },
                  colors: ['#77B6EA', '#ff0000'],
                  dataLabels: {
                    enabled: false,
                  },
                  stroke: {
                    curve: 'smooth'
                  },
                  title: {
                    text: 'Environmental Ratings',
                    align: 'left'
                  },
                  grid: {
                    borderColor: '#e7e7e7',
                    row: {
                      colors: ['#f3f3f3', 'transparent'], // takes an array which will be repeated on columns
                      opacity: 0.5
                    },
                  },
                  markers: {
                    size: 1
                  },
                  xaxis: {
                    categories: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                    title: {
                      text: 'Month'
                    }
                  },
                  yaxis: {
                    title: {
                      text: 'Temperature   -   Humidity'
                    },
                    min: 5,
                    max: 40
                  },
                  legend: {
                    position: 'top',
                    horizontalAlign: 'right',
                    floating: true,
                    offsetY: -25,
                    offsetX: -5
                  }

            },
            series: [ {
                name: "Temperature",
                data: [28, 29, 33, 36, 32, 32, 33]
              },
              {
                name: "Humidity",
                data: [12, 11, 14, 18, 17, 13, 13]
              }]
        }
    }

    render() {
        return (
        <ReactApexChart class
           options = {this.state.options}
           series = {this.state.series}
           type = 'line'          
           width = "75%"
           height = '450px' 
        />
      );
    }
}

export default PopChart2;