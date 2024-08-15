import React, { Suspense } from "react";
// import { useQuery, gql } from "@apollo/client";
// import { Table } from "antd";
import { Button } from "antd";
import { HomeWrapper } from "./Home.styled";
import { useNavigate } from "react-router-dom";
import { JOBS } from "../../data/jobs";

// const query = gql`
//   query GetAllJobs {
//     getJobs {
//       id
//       description
//       requirement
//       posterName
//       posterContact
//       bidsCount
//       expirationDate
//     }
//   }
// `;

const Home = () => {
  //graphql issue in fetching data, so commented temporarily
  // const { data, loading } = useQuery(query);
  // const dataSource = data?.getJobs;

  // commented out as gql is messed up
  // const columns = [
  //   {
  //     title: "ID",
  //     dataIndex: "id",
  //     key: "id",
  //   },
  //   {
  //     title: "Description",
  //     dataIndex: "description",
  //     key: "description",
  //   },
  //   {
  //     title: "Requirement",
  //     dataIndex: "requirement",
  //     key: "requirement",
  //   },
  //   {
  //     title: "Poster Name",
  //     dataIndex: "posterName",
  //     key: "posterName",
  //   },
  //   {
  //     title: "Poster Contact",
  //     dataIndex: "posterContact",
  //     key: "posterContact",
  //   },
  //   {
  //     title: "Bids Count",
  //     dataIndex: "bidsCount",
  //     key: "bidsCount",
  //     defaultSortOrder: "descend",
  //     sorter: (a, b) => b.bidsCount - a.bidsCount,
  //   },
  //   {
  //     title: "Expiration Date",
  //     dataIndex: "expirationDate",
  //     key: "expirationDate",
  //     defaultSortOrder: "descend",
  //     sorter: (a, b) => new Date(a.expirationDate) - new Date(b.expirationDate),
  //   },
  // ];

  const dataSource = JOBS;
  const navigate = useNavigate();

  const biddingTimeCalc = (expDt) => {
    const today = Math.abs((new Date().getTime() / 1000).toFixed(0));
    const bidDt = Math.abs((new Date(expDt).getTime() / 1000).toFixed(0));
    const diff = bidDt - today;
    const days = Math.floor(diff / 86400);
    const hours = Math.floor(diff / 3600) % 24;
    const mins = Math.floor(diff / 60) % 60;
    const sec = diff % 60;
    return `Days: ${days} : Hours: ${hours} : Minutes : ${mins} : Seconds: ${sec}`;
  };

  // if (loading) return <h1>Loading...</h1>;

  return (
    <HomeWrapper data-testid="Home">
      <Button type="primary" onClick={() => navigate("/job/add")}>
        Add Job
      </Button>

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
                  {biddingTimeCalc(item.expirationDate)}
                </p>

                <p>{item.requirement}</p>
              </div>
              <div className="jobCard-right">
                <p>{item.bidsCount} bids</p>
                <p>{item.lowestBid}</p>
              </div>
            </div>
          </div>
        ))}
      </Suspense>
    </HomeWrapper>
  );
};

export default Home;
