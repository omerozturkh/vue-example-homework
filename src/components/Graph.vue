<template>
    <div>
        <highcharts :options="chartOptions"></highcharts>
    </div>
</template>

<script>
    import json from '@/json/drilldown-column-chart.json'
    import {Chart} from 'highcharts-vue'

    export default {
        name: 'Header',
        props: ['hasLogin'],
        highcharts: Chart,

        data() {
            return {
                title: '',
                exampleData:[],
                chartOptions: {
                    chart: {
                        type: 'spline'
                    },
                    title: {
                        text: 'Rem Product Chart'
                    },
                    series: [

                    ]
                }
            }
        },


        mounted() {

            let series = [];
            json.data.forEach(function(element) {
                series.push({name:element.name,data:element.data});
            });

            this.chartOptions.series = series;

        }

    }
</script>
