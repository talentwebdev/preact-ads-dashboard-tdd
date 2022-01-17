import React from 'react'
import { StatisticsList }  from '../helpers/StatisticsList';
import StatisticsItem from '../components/StatisticsItem';
function AdminDashboard() {
    return (
        <div className="adminMainBody">
            {StatisticsList.map((statisticsItem, key) =>{
                return (
                    <StatisticsItem
                        key = {key}
                        title={statisticsItem.title}
                        subTitle1={statisticsItem.subTitle1}
                        subTitle2={statisticsItem.subTitle2}
                        value1={statisticsItem.value1} 
                        value2={statisticsItem.value2}
                    />
                )
            })}
            {/* <div className="items">Item 1</div>
            <div className="items">Item 2</div>
            <div className="items">Item 3</div> */}
            <div className="items">Item 4</div>
            <div className="items">Item 5</div>
            <div className="items">Item 6</div>
        </div>
    )
}

export default AdminDashboard;
