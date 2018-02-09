<template>
  <div>
    <div ref="pieChart"></div>
  </div>
</template>

<script>
import Highcharts from 'highcharts';

export default {
  name: 'dashboard',

  mounted() {
    Highcharts.chart(this.$refs.pieChart, {
      chart: {
        type: 'pie',
      },
      title: {
        text: 'Global status',
      },
      tooltip: {
        pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>',
      },
      plotOptions: {
        pie: {
          allowPointSelect: true,
          cursor: 'pointer',
          dataLabels: {
            enabled: true,
            format: '<b>{point.name}</b>: {point.percentage:.1f} %',
          },
        },
      },
      series: [{
        name: 'Status',
        data: this.tasksDoneChart,
      }],
    });
  },

  computed: {
    tasksDoneChart() {
      return this.$store.getters['tasks/tasksDoneChart'];
    },
  },
};
</script>
