import React from "react";
import { StatisticsList } from "../helpers/StatisticsList";
import StatisticsItem from "../components/StatisticsItem";
import { SearchList } from "../helpers/SearchList";
import SearchItem from "../components/SearchItem";
import MyLinks from "../components/MyLinks";
function AdminDashboard() {
  return (
    <div className="adminMainBody">
      {StatisticsList.map((statisticsItem, key) => {
        return (
          <StatisticsItem
            key={key}
            title={statisticsItem.title}
            subTitle1={statisticsItem.subTitle1}
            subTitle2={statisticsItem.subTitle2}
            value1={statisticsItem.value1}
            value2={statisticsItem.value2}
          />
        );
      })}
      {SearchList.map((searchItem, key) => {
        return (
          <SearchItem
            key={key}
            title={searchItem.title}
            name={searchItem.name}
          />
        );
      })}
      <MyLinks />
    </div>
  );
}

export default AdminDashboard;
