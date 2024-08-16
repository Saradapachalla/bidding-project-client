import React, { Suspense } from "react";
import { Button } from "antd";

import { Recent10JobsPostedWrapper } from "./Recent10JobsPosted.styled";
import { JOBS } from "../../data/jobs";

const Recent10JobsPosted = () => {
  const recent10JobsPostedList = (jobs) => {
    return jobs.toSorted((a,b) => new Date(b.expirationDate) - new Date(a.expirationDate)).slice(0, 10)
   }

   const dataSource = recent10JobsPostedList(JOBS)
   let bidOpen = false;

   const calcualteBidTimeLeft = (expDt) => {
    const today = Math.abs((new Date().getTime() / 1000).toFixed(0));
    const bidDt = Math.abs((new Date(expDt).getTime() / 1000).toFixed(0));
    const diff = bidDt - today;
    const days = Math.floor(diff / 86400);
    const hours = Math.floor(diff / 3600) % 24;
    const mins = Math.floor(diff / 60) % 60;
    const sec = diff % 60;
    bidOpen = days > 0 ? true : false
    return `Days: ${days} : Hours: ${hours} : Minutes : ${mins} : Seconds: ${sec}`  
}

   return (
    <Recent10JobsPostedWrapper data-testid="Recent10JobsPosted">
      <h3>Recent 10 Jobs Posted</h3>
    
    <Suspense fallback={<p>Loading...</p>}>
        {/* <Table dataSource={dataSource} columns={columns} /> */}
        {dataSource.map((item) => (
          <div className="jobCard-item" key={item.id}>
            <div className="jobCard-itemInner">
              <div className="jobCard-left">
                <p className="jobCard-title">{item.description}</p>
                <p>
                  <b>Expiration Date:</b> <span>{item.expirationDate}</span>{" "}
                  <br />
                  <b>Time remaing to bid:</b>{" "}
                  {calcualteBidTimeLeft(item.expirationDate)}
                </p>
                <p>{item.requirement}</p>
              </div>
              <div className="jobCard-right">
                <p>{item.bidsCount} bids</p>
                <p>{item.lowestBid}</p>
                {bidOpen && (
                  <Button
                    type="link"
                    className="plt0"
                    // onClick={() => showDrawer(item)}
                    onClick={() => alert('Bid button clicked...')}
                  >
                    Bid Now
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </Suspense>
  </Recent10JobsPostedWrapper>
   )
  
  }

export default Recent10JobsPosted;
