export const CHARTS_NAME = [
  { name: "Bar Charts", slug: "bar-chart", parent: null },
  { name: "Pie Charts", slug: "pie-chart", parent: null },
  { name: "Column Charts", slug: "column-chart", parent: null },
  //   Bar Chart
  {
    name: "Basic",
    slug: "basic",
    parent: "bar-chart",
    data: {
      series: [
        {
          data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
        },
      ],
      options: {
        chart: {
          type: "bar",
          height: 350,
        },
        plotOptions: {
          bar: {
            borderRadius: 4,
            borderRadiusApplication: "end",
            horizontal: true,
          },
        },
        dataLabels: {
          enabled: false,
        },
        xaxis: {
          categories: [
            "South Korea",
            "Canada",
            "United Kingdom",
            "Netherlands",
            "Italy",
            "France",
            "Japan",
            "United States",
            "China",
            "Germany",
          ],
        },
      },
    },
  },
  {
    name: "Grouped",
    slug: "grouped",
    parent: "bar-chart",
    data: {
      series: [
        {
          data: [44, 55, 41, 64, 22, 43, 21],
        },
        {
          data: [53, 32, 33, 52, 13, 44, 32],
        },
      ],
      options: {
        chart: {
          type: "bar",
          height: 430,
        },
        plotOptions: {
          bar: {
            horizontal: true,
            dataLabels: {
              position: "top",
            },
          },
        },
        dataLabels: {
          enabled: true,
          offsetX: -6,
          style: {
            fontSize: "12px",
            colors: ["#fff"],
          },
        },
        stroke: {
          show: true,
          width: 1,
          colors: ["#fff"],
        },
        tooltip: {
          shared: true,
          intersect: false,
        },
        xaxis: {
          categories: [2001, 2002, 2003, 2004, 2005, 2006, 2007],
        },
      },
    },
  },
  { name: "Grouped Stacked", slug: "grouped-stacked", parent: "bar-chart" },
  { name: "Patterned", slug: "patterned", parent: "bar-chart" },
  { name: "reversed", slug: "reversed", parent: "bar-chart" },
  { name: "Stacked", slug: "stacked", parent: "bar-chart" },
  { name: "Stacked 100", slug: "stacked-100", parent: "bar-chart" },
  {
    name: "With Negative",
    slug: "with-negative",
    parent: "bar-chart",
    data: {
      series: [
        {
          name: "Males",
          data: [
            0.4, 0.65, 0.76, 0.88, 1.5, 2.1, 2.9, 3.8, 3.9, 4.2, 4, 4.3, 4.1,
            4.2, 4.5, 3.9, 3.5, 3,
          ],
        },
        {
          name: "Females",
          data: [
            -0.8, -1.05, -1.06, -1.18, -1.4, -2.2, -2.85, -3.7, -3.96, -4.22,
            -4.3, -4.4, -4.1, -4, -4.1, -3.4, -3.1, -2.8,
          ],
        },
      ],
      options: {
        chart: {
          type: "bar",
          height: 440,
          stacked: true,
        },
        colors: ["#008FFB", "#FF4560"],
        plotOptions: {
          bar: {
            borderRadius: 5,
            borderRadiusApplication: "end", // 'around', 'end'
            borderRadiusWhenStacked: "all", // 'all', 'last'
            horizontal: true,
            barHeight: "80%",
          },
        },
        dataLabels: {
          enabled: false,
        },
        stroke: {
          width: 1,
          colors: ["#fff"],
        },

        grid: {
          xaxis: {
            lines: {
              show: false,
            },
          },
        },
        yaxis: {
          min: -5,
          max: 5,
          title: {
            // text: 'Age',
          },
        },
        tooltip: {
          shared: false,
          x: {
            formatter: function (val) {
              return val;
            },
          },
          y: {
            formatter: function (val) {
              return Math.abs(val) + "%";
            },
          },
        },
        title: {
          text: "Mauritius population pyramid 2011",
        },
        xaxis: {
          categories: [
            "85+",
            "80-84",
            "75-79",
            "70-74",
            "65-69",
            "60-64",
            "55-59",
            "50-54",
            "45-49",
            "40-44",
            "35-39",
            "30-34",
            "25-29",
            "20-24",
            "15-19",
            "10-14",
            "5-9",
            "0-4",
          ],
          title: {
            text: "Percent",
          },
          labels: {
            formatter: function (val) {
              return Math.abs(Math.round(val)) + "%";
            },
          },
        },
      },
    },
  },
  { name: "With Markers", slug: "with-markers", parent: "bar-chart" },
  { name: "With Images", slug: "with-images", parent: "bar-chart" },
  {
    name: "With Custom Data Labels",
    slug: "with-custom-data-labels",
    parent: "bar-chart",
  },
];
