import React, { useState } from "react"
import { useNavigate } from 'react-router-dom'
import { JobAddWrapper } from "./AddJob.styled"
import { Button, DatePicker, Form, Input, InputNumber } from "antd"
import dayjs from "dayjs"
import customParseFormat from "dayjs/plugin/customParseFormat"

const formItemLayout = {
  labelCol: {
    xs: { span: 24 },
    sm: { span: 6 },
  },
  wrapperCol: {
    xs: { span: 24 },
    sm: { span: 14 },
  },
};

const AddJob = () => {
dayjs.extend(customParseFormat)
const dateFormat = "YYYY-MM-DD"
const today = new Date().getDate()

  const CreateJobPayload = {
    description: "",
    requirement: "",
    posterName: "",
    posterContact: "",
    lowestBid: "",
    bidsCount: 0,
    expirationDate: "",
  };

  const [jobs, setAddJob] = useState([]);
  const [newJob, setNewJob] = useState(CreateJobPayload);
  const [editJob, setEditJob] = useState(null);
  const [editDescription, setEditDescription] = useState("");
  const [editRequirement, setEditRequirement] = useState("");
  const [editPosterName, setEditPosterName] = useState("");
  const [editPosterContact, setEditPosterContact] = useState("");
  const [editLowestBid, setEditLowestBid] = useState("");
  const [editBidsCount, setEditBidsCount] = useState("");
  const [editExpirationDate, setEditExpirationDate] = useState("");

  console.log(`${newJob.description}`);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    switch (name) {
      case "description":
        setEditDescription(value);
        break;
      case "requirement":
        setEditRequirement(value);
        break;
      case "posterName":
        setEditPosterName(value);
        break;
      case "posterContact":
        setEditPosterContact(value);
        break;
      case "lowestBid":
        setEditLowestBid(value);
        break;
      case "bidsCount":
        setEditBidsCount(value);
        break;
      case "expirationDate":
        setEditExpirationDate(value);
        break;
      default:
        break;
    }
  };

  const addJob = () => {
    setAddJob([...jobs, newJob]);
    setNewJob(CreateJobPayload);
    console.log(newJob)
  };

  const deleteJob = (index) => {
    setAddJob(jobs.filter((_, i) => i !== index));
  };

  const updateJob = (index) => {
    const updatedJobs = [...jobs];
    const updatedJob = {
      ...editJob,
      description: editDescription,
      requirement: editRequirement,
      posterName: editPosterName,
      posterContact: editPosterContact,
      lowestBid: editLowestBid,
      bidsCount: editBidsCount,
      expirationDate: editExpirationDate,
    };
    updatedJobs[index] = updatedJob;
    setAddJob(updatedJobs);
    setEditJob(null);
    // Clear edit fields
    setEditRequirement("");
    setEditDescription("");
    setEditPosterName("");
    setEditPosterContact("");
    setEditLowestBid("");
    setEditBidsCount("");
    setEditExpirationDate("");
  };

  const navigate = useNavigate();

  return (
    <JobAddWrapper data-testid="JobAdd">
      <Form {...formItemLayout} variant="filled" style={{ maxWidth: 600 }}>
        <div className="formHeader">Add New Job Form</div>
        <Form.Item
          label="Description"
          name="description"
          value={newJob.description}
          onChange={(e) =>
            setNewJob({ ...newJob, description: e.target.value })
          }
          rules={[{ required: true, message: "Enter job description" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Requirement"
          name="requirement"
          value={newJob.requirement}
          onChange={(e) =>
            setNewJob({ ...newJob, requirement: e.target.value })
          }
          rules={[{ required: true, message: "Enter job requirements" }]}
        >
          <Input.TextArea />
        </Form.Item>
        <Form.Item
          label="Poster Name"
          name="posterName"
          value={newJob.posterName}
          onChange={(e) => setNewJob({ ...newJob, posterName: e.target.value })}
          rules={[{ required: true, message: "Enter job poster name" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Poster Contact"
          name="posterContact"
          value={newJob.posterContact}
          onChange={(e) =>
            setNewJob({ ...newJob, posterContact: e.target.value })
          }
          rules={[{ required: true, message: "Enter job poster contact" }]}
        >
          <Input />
        </Form.Item>
        <Form.Item
          label="Lowest Bid"
          name="lowestBid"
          value={newJob.lowestBid}
          onChange={(e) => setNewJob({ ...newJob, lowestBid: e.target.value })}
        >
          <InputNumber
            precision={2}
            value={50}
            step={0.1}
            prefix="$"
            style={{ width: "100%" }}
          />
        </Form.Item>
        <Form.Item
          label="Bids Count"
          name="bidsCount"
          value={newJob.bidsCount}
          onChange={(e) => setNewJob({ ...newJob, bidsCount: e.target.value })}
        >
          <InputNumber value={0} disabled step={1} style={{ width: "100%" }} />
        </Form.Item>
        <Form.Item
          label="Expiration Date"
          name="expirationDate"
          value={newJob.expirationDate}
          onChange={(e) =>
            setNewJob({ ...newJob, expirationDate: e.target.value })
          }
        >
          <DatePicker
            style={{ width: "100%" }}
            initialValues={dayjs(`${today}`, dateFormat)}
            minDate={dayjs(`${today}`, dateFormat)}
            maxDate={dayjs(`2050-12-01`, dateFormat)}
          />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 14, span: 2 }}>
         <span className="buttonsSpan">
         <Button className="mrt" type="default" htmlType="submit" onClick={() => navigate('/')}>
            Cancel
          </Button>
          <Button type="primary" htmlType="submit" onClick={addJob}>
            Add
          </Button>
         </span>
          
        </Form.Item>
      </Form>
    </JobAddWrapper>
  );
};

export default AddJob;
