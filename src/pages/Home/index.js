import React, { Suspense, useState } from "react";
// import { useQuery, gql } from "@apollo/client";
// import { Table } from "antd";
import { Button, Drawer, Space, Form, InputNumber, Input } from "antd";

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

  const [open, setOpen] = useState(false);
  const [drawerTitle, setDrawerTitle] = useState('');
  const [lowestBid, setLowestBid] = useState(50);
  let bidOpen = false
  
  const dataSource = JOBS; 
  const navigate = useNavigate();

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
  const showDrawer = (item) => {
    setDrawerTitle(item.description)
    setLowestBid(parseFloat(item.lowestBid.replace('$', '')))
    setOpen(true)
  };

  const onClose = () => {
    setDrawerTitle('')
    setLowestBid('')
    setOpen(false);
  };

  const onOK = () => {
    console.log(lowestBid)
    console.log("Bidding completed successfully!!")
    onClose()
  };

  // if (loading) return <h1>Loading...</h1>;

  return (
    <HomeWrapper data-testid="Home">
      <Button type="primary" onClick={() => navigate("/job/add")} className="mrt20">
        Add Job
      </Button>

      <Button type="primary" onClick={() => navigate("/jobs/top10bids")} className="mrt20">
        Top 10 bids
      </Button>

      <Button type="primary" onClick={() => navigate("/jobs/recent10Jobs")}>
        Recent 10 jobs posted
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
                    onClick={() => showDrawer(item)}
                  >
                    Bid Now
                  </Button>
                )}
              </div>
            </div>
          </div>
        ))}
      </Suspense>

      <Drawer
        title={drawerTitle}
        placement={"right"}
        width={500}
        onClose={onClose}
        open={open}
      >
        <h3>Place your Bid</h3>
        <Form>
          <Form.Item
            label="Bid Amount"
            name="lowestBid"
            initialValue={lowestBid}
            onChange={(e) => setLowestBid(e.target.value)}
            rules={[{ required: true, message: "Enter your bid amount" }]}
          >
            <InputNumber
              precision={2}
              value={lowestBid}
              step={0.1}
              prefix="$"
              style={{ width: "100%" }}
            />
          </Form.Item>
          <Form.Item
            label="Email address"
            name="email"
            rules={[
              {
                type: "email",
                message: "Input is not valid Email",
              },
              {
                required: true,
                message: "Enter your Email",
              },
            ]}
          >
            <Input />
          </Form.Item>
        </Form>

        <Space>
            <Button onClick={onClose}>Cancel</Button>
            <Button type="primary" onClick={onOK}>
              Bid on the project
            </Button>
          </Space>

      </Drawer>
    </HomeWrapper>
  );
};

export default Home;
