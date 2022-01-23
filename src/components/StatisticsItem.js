import React from "react";
import BarChartIcon from "@material-ui/icons/BarChart";
function StatisticsItem({ title, subTitle1, subTitle2, value1, value2 }) {
  return (
    <div className="viewItem">
      <div className="itemTitle">
        <p>{title}</p>
      </div>
      <div className="itemContent">
        <div className="itemContentLeft">
          <p>{subTitle1}</p>
          <h3>{value1}</h3>
        </div>
        <div className="itemContentRight">
          <p>{subTitle2}</p>
          <h3>{value2}</h3>
        </div>
      </div>
      <div className="itemFooter">
        <div className="itemFooterTitle">
          <p>View Statistics</p>
        </div>
        <div className="itemFooterIcon">
          <BarChartIcon />
        </div>
      </div>
    </div>
  );
}

export default StatisticsItem;
