import "./OrgChart.scss";
import { dummy_data } from "./dummy-data";

function OrgChart() {
  const colors = ["#8dccad", "#f5cc7f"];

  const recursiveRenderChart = (chartData, current_level) => {
    return (
      <ol
        className={"level-wrapper"}
        style={{
          gridTemplateColumns: `repeat(${chartData.children?.length}, 1fr)`,
        }}
      >
        {chartData.children &&
          chartData.children.length > 0 &&
          chartData.children.map((child, index) => {
            return (
              <li
                key={index}
                className={`${
                  chartData.children.length > 1
                    ? index === 0
                      ? "left-hr"
                      : chartData.children.length === index + 1
                      ? "right-hr"
                      : "center-hr"
                    : ""
                }`}
              >
                <div
                  draggable="true"
                  className={`${
                    !child.children || child.children?.length === 0
                      ? "level-no-child"
                      : "level"
                  }   rectangle
                  
                  `}
                  style={{
                    backgroundColor: current_level % 2 ? colors[0] : colors[1],
                  }}
                >
                  {child.arabicLabel}/{child.englishLabel}
                </div>
                {recursiveRenderChart(child, parseInt(current_level) + 1)}
              </li>
            );
          })}
      </ol>
    );
  };

  const renderChart = (chartData) => {
    return (
      chartData && (
        <div className={"org-chart"}>
          <div className={`level level-1 rectangle`}>
            <div>
              {chartData.arabicLabel}/{chartData.englishLabel}
            </div>
          </div>
          {recursiveRenderChart(chartData, 2)}
        </div>
      )
    );
  };

  return <div className="org-chart-container">{renderChart(dummy_data)}</div>;
}

export default OrgChart;
