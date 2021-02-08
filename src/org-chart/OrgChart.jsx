import { Fragment } from "react";
import "./OrgChart.scss";

const dummy_data = [
  {
    arabicLabel: "مدير",
    englishLabel: "Manager",
    id: 3,
    key: 3,
    parents: [],
    children: [
      {
        arabicLabel: "موظف",
        englishLabel: "Employee",
        id: 2,
        key: 2,
        parents: [],
        children: [
          {
            arabicLabel: "2موظف",
            englishLabel: "Employee2",
            id: 5,
            key: 5,
            parents: [],
            children: [
              {
                arabicLabel: "3موظف",
                englishLabel: "Employee4",
                id: 6,
                key: 6,
                parents: [],
              },
            ],
          },
        ],
      },
      {
        id: 1,
        key: 1,
        parents: [],
        children: [
          {
            arabicLabel: "3موظف",
            englishLabel: "Employee4",
            id: 6,
            key: 6,
            parents: [],
          },
        ],
        arabicLabel: "تيست",
        englishLabel: "test",
      },
      {
        id: 1,
        key: 1,
        parents: [],
        children: [
          {
            arabicLabel: "5موظف",
            englishLabel: "Employee5",
            id: 6,
            key: 6,
            parents: [],
          },
          {
            arabicLabel: "6موظف",
            englishLabel: "Employee6",
            id: 6,
            key: 6,
            parents: [],
          },
          {
            arabicLabel: "7موظف",
            englishLabel: "Employee7",
            id: 6,
            key: 6,
            parents: [],
          },
        ],
        arabicLabel: "2تيست",
        englishLabel: "test2",
      },
      {
        id: 1,
        key: 1,
        parents: [],
        children: [
          {
            arabicLabel: "5موظف",
            englishLabel: "Employee5",
            id: 6,
            key: 6,
            parents: [],
          },
          {
            arabicLabel: "6موظف",
            englishLabel: "Employee6",
            id: 6,
            key: 6,
            parents: [],
          },
          {
            arabicLabel: "7موظف",
            englishLabel: "Employee7",
            id: 6,
            key: 6,
            parents: [],
          },
        ],
        arabicLabel: "2تيست",
        englishLabel: "test2",
      },
      {
        id: 1,
        key: 1,
        parents: [],
        children: [
          {
            arabicLabel: "5موظف",
            englishLabel: "Employee5",
            id: 6,
            key: 6,
            parents: [],
            children: [
              {
                id: 1,
                key: 1,
                parents: [],
                children: [],
                arabicLabel: "hamo",
                englishLabel: "hamo",
              },
            ],
          },
          {
            arabicLabel: "6موظف",
            englishLabel: "Employee6",
            id: 6,
            key: 6,
            parents: [],
          },
          {
            arabicLabel: "7موظف",
            englishLabel: "Employee7",
            id: 6,
            key: 6,
            parents: [],
          },
        ],
        arabicLabel: "hamo",
        englishLabel: "hamo",
      },
    ],
  },
];

function OrgChart() {
  const colors = ["#8dccad", "#f5cc7f"];

  const recursiveRenderChart = (chartData, level) => {
    let current_level = level ? level : 1;
    return (
      <ol
        className={`${"level-wrapper"} level-${current_level}-wrapper ${
          chartData.children && chartData.children.length > 1
            ? "horizontal-line"
            : ""
        } 
        
        `}
        style={{
          position: "relative",
          display: "grid",
          gridTemplateColumns: `repeat(${chartData.children?.length}, 1fr)`,
          gridColumnGap: `${current_level * 3}px`,
          margin: "0 auto",
          // minWidth:
        }}
      >
        {chartData.children &&
          chartData.children.length > 0 &&
          chartData.children.map((chart_lvl_1, index) => {
            return (
              <li key={index}>
                <div
                  className={`${
                    !chart_lvl_1.children ||
                    (chart_lvl_1.children && chart_lvl_1.children.length) === 0
                      ? "level-no-child "
                      : "level"
                  }  level-${parseInt(current_level)} rectangle`}
                  style={{
                    backgroundColor: current_level % 2 ? colors[0] : colors[1],
                  }}
                >
                  {chart_lvl_1.arabicLabel}/{chart_lvl_1.englishLabel}
                </div>

                {recursiveRenderChart(chart_lvl_1, parseInt(current_level) + 1)}
              </li>
            );
          })}
      </ol>
    );
  };

  const renderChart = (chartData) => {
    return (
      chartData &&
      chartData.length > 0 &&
      chartData.map((head, index) => {
        return (
          <div className={"level-0"}>
            <div key={index} className={`level level-${1} rectangle`}>
              <div>
                {head.arabicLabel}/{head.englishLabel}
              </div>
            </div>
            {recursiveRenderChart(head, 2)}
          </div>
        );
      })
    );
  };

  return <div className="org-chart">{renderChart(dummy_data)}</div>;
}

export default OrgChart;
