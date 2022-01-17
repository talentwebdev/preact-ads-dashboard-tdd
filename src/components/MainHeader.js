import React from 'react'
import '../styles/MainHeader.css';
import BannerImg from '../assets/banner3.jpg';
import BannerImg2 from '../assets/banner5.jpg';
import SubLogo from '../assets/logo6.png';
import {Grid} from '@material-ui/core';
function MainHeader() {
    return (
        <div className="mainHeader">
            <div className="topSide" style={{background: `url(${BannerImg})`, height: '15vh'}}>
                <h1>BHHS The Preferred Realty Dashboard</h1>
            </div>
            <div className="bottomSide">
            <Grid item lg={12} container spacing={2}>
                <Grid item lg={3} md={4} sm={5} xs={12}>
                    <div className="btLeftSide">
                        <div className="subLeft">
                            <div className="subLeftTop">
                                <h5>BERKSHIRE</h5>
                                <h5>HATHAWAY</h5>
                            </div>
                            <div className="subLeftBottom">
                                <p>HomeServices</p>
                            </div>
                        </div>
                        <div className="subRight">
                            <p>The preferred<br />Realty</p>
                        </div>
                    </div>
                </Grid>
                <Grid item lg={9} md={8} sm={7} xs={12}>
                    <div className="btRightSide" style={{background: `url(${BannerImg2})`}} >
                        <div id="leftSide">
                            <img src={SubLogo} alt="" />
                        </div>
                        <div id="rightSide">
                            <h2>Expend Your Reach With Boost Agent Recruitment Campains</h2>
                        </div>
                    </div>
                </Grid>
            </Grid>
            </div>
        </div>
    )
}

export default MainHeader;
