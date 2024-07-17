
var dom1 = document.getElementById("chart-container");
var myChart1 = echarts.init(dom1, null, {
  renderer: "canvas",
  useDirtyRect: false,
});

var option1 = {
  title: {
    text: "Publications in Scopus",
    subtext: "Data from 2019 to 2024",
    left: "center",
    top: "top",
    textStyle: {
      fontSize: 20,
      fontWeight: "bold",
      color: "#333",
    },
  },
  xAxis: {
    type: "category",
    data: ["2019", "2020", "2021", "2022", "2023", "2024"],
  },
  yAxis: {
    type: "value",
  },
  series: [
    {
      data: [
        { value: 120, itemStyle: { color: "#402E7A" } }, // สีของแท่งปี 2019
        { value: 200, itemStyle: { color: "#4C3BCF" } }, // สีของแท่งปี 2020
        { value: 150, itemStyle: { color: "#4B70F5" } }, // สีของแท่งปี 2021
        { value: 80, itemStyle: { color: "#3DC2EC" } }, // สีของแท่งปี 2022
        { value: 70, itemStyle: { color: "#478CCF" } }, // สีของแท่งปี 2023
        { value: 110, itemStyle: { color: "#36C2CE" } }, // สีของแท่งปี 2024
        { value: 130, itemStyle: { color: "#ba55d3" } }, // สีของแท่งปี 2025
      ],
      type: "bar",
    },
  ],
};

if (option1 && typeof option1 === "object") {
  myChart1.setOption(option1);
}
window.addEventListener("resize", myChart1.resize);

// Chart 2
var dom2 = document.getElementById("chart-container-2");
var myChart2 = echarts.init(dom2, null, {
  renderer: "canvas",
  useDirtyRect: false,
});

var option2 = {
  title: {
    text: "Department Overview",
    // subtext: 'Fake Data',
    left: "center",
  },
  tooltip: {
    trigger: "item",
  },
  legend: {
    orient: "vertical",
    left: "",
    show: false,
  },
  series: [
    {
      name: "Access From",
      type: "pie",
      radius: "50%",
      data: [
        { value: 1048, name: "A" },
        { value: 735, name: "B" },
        // { value: 580, name: "C" },
        // { value: 484, name: "D" },
        // { value: 300, name: "E" },
      ],
      emphasis: {
        itemStyle: {
          shadowBlur: 10,
          shadowOffsetX: 0,
          shadowColor: "rgba(0, 0, 0, 0.5)",
        },
      },
    },
  ],
};

if (option2 && typeof option2 === "object") {
  myChart2.setOption(option2);
}

window.addEventListener("resize", myChart2.resize);

// chart 3
var dom3 = document.getElementById("chart-container-3");
var myChart3 = echarts.init(dom3, null, {
  renderer: "canvas",
  useDirtyRect: false,
});

var option3 = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  legend: {
    data: ["Department 1", "Department 2"],
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: [
    {
      type: "value",
    },
  ],
  yAxis: [
    {
      type: "category",
      axisTick: {
        show: false,
      },
      data: ["", "", "", "", "", "", ""],
    },
  ],
  series: [
    {
      name: "Department 1",
      type: "bar",
      stack: "Total",
      label: {
        show: true,
        position: "center",
      },
      emphasis: {
        focus: "series",
      },
      data: [320, 302, 341, 374, 390, 450, 420],
    },
    {
      name: "Department 2",
      type: "bar",
      stack: "Total",
      label: {
        show: true,
        position: "center",
      },
      emphasis: {
        focus: "series",
      },
      data: [320, 302, 341, 374, 390, 450, 420],
    },
  ],
};

if (option3 && typeof option3 === "object") {
  myChart3.setOption(option3);
}

window.addEventListener("resize", myChart3.resize);

/// chart 4
var dom4 = document.getElementById("chart-container-4");
var myChart4 = echarts.init(dom4, null, {
  renderer: "canvas",
  useDirtyRect: false,
});

var option4 = {
  tooltip: {
    trigger: "axis",
    axisPointer: {
      type: "shadow",
    },
  },
  legend: {
    data: ["Department 1", "Department 2"],
  },
  grid: {
    left: "3%",
    right: "4%",
    bottom: "3%",
    containLabel: true,
  },
  xAxis: [
    {
      type: "value",
    },
  ],
  yAxis: [
    {
      type: "category",
      axisTick: {
        show: false,
      },
      data: ["", "", "", "", "", "", ""],
    },
  ],
  series: [
    {
      name: "Department 1",
      type: "bar",
      stack: "Total",
      label: {
        show: true,
        position: "center",
      },
      emphasis: {
        focus: "series",
      },
      data: [320, 302, 341, 374, 390, 450, 420],
    },
    {
      name: "Department 2",
      type: "bar",
      stack: "Total",
      label: {
        show: true,
        position: "center",
      },
      emphasis: {
        focus: "series",
      },
      data: [320, 302, 341, 374, 390, 450, 420],
    },
  ],
};

if (option4 && typeof option4 === "object") {
  myChart4.setOption(option4);
}

window.addEventListener("resize", myChart4.resize);
