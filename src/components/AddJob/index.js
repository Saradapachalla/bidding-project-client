import React, { useState } from "react";
import { JobAddWrapper } from './AddJob.styled';

const AddJob = () => {  
  const CreateJobPayload = {
   description: '',
   requirement: '',
   posterName: '',
   posterContact: '',
   lowestBid: 0,
   bidsCount: 0,
   expirationDate: '',
  };

  const [jobs, setAddJob] = useState([])
  const [newJob, setNewJob] = useState(CreateJobPayload)
  const [editJob, setEditJob] = useState(null)
  const [editDescription, setEditDescription] = useState('')
  const [editRequirement, setEditRequirement] = useState('')
  const [editPosterName, setEditPosterName] = useState('')
  const [editPosterContact, setEditPosterContact] = useState('')
  const [editLowestBid, setEditLowestBid] = useState('')
  const [editBidsCount, setEditBidsCount] = useState('')
  const [editExpirationDate, setEditExpirationDate] = useState('')


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
    setAddJob(updatedJobs)
    setEditJob(null)
    // Clear edit fields
    setEditRequirement('')
    setEditDescription('')
   setEditPosterName('')
    setEditPosterContact('')
    setEditLowestBid('')
    setEditBidsCount('')
    setEditExpirationDate('')
  };

  return (
   <JobAddWrapper data-testid="JobAdd">
      <div
      style={{
        fontFamily: "Arial, sans-serif",
        maxWidth: "800px",
        margin: "0 auto",
      }}
    >
      <h2 style={{ textAlign: "center", marginBottom: "20px" }}>Jobs</h2>
      <div>
        <h3>Add New Job</h3>
        <div style={{ marginBottom: "10px" }}>
          <input
            type="text"
            name="description"
            placeholder="Description"
            value={newJob.description}
            onChange={(e) =>
              setNewJob({ ...newJob, description: e.target.value })
            }
            style={{ marginRight: "10px", padding: "5px" }}
          />
           <input
            type="text"
            name="requirement"
            placeholder="Requirement"
            value={newJob.requirement}
            onChange={(e) =>
              setNewJob({ ...newJob, requirement: e.target.value })
            }
            style={{ marginRight: "10px", padding: "5px" }}
          />
          <input
            type="text"
            name="posterName"
            placeholder="Poster Name"
            value={newJob.posterName}
            onChange={(e) =>
              setNewJob({ ...newJob, posterName: e.target.value })
            }
            style={{ marginRight: "10px", padding: "5px" }}
          />
          <input
            type="text"
            name="posterContact"
            placeholder="Poster Contact"
            value={newJob.posterContact}
            onChange={(e) =>
              setNewJob({ ...newJob, posterContact: e.target.value })
            }
            style={{ marginRight: "10px", padding: "5px" }}
          />
          <input
            type="text"
            name="lowestBid"
            placeholder="Lowest Bid"
            value={newJob.lowestBid}
            onChange={(e) =>
              setNewJob({ ...newJob, lowestBid: e.target.value })
            }
            style={{ marginRight: "10px", padding: "5px" }}
          />
          <input
            type="number"
            name="bidsCount"
            placeholder="Bids Count"
            value={newJob.bidsCount}
            onChange={(e) =>
              setNewJob({ ...newJob, bidsCount: e.target.value })
            }
            style={{ marginRight: "10px", padding: "5px" }}
          />
          <input
            type="text"
            name="expirationDate"
            placeholder="Expiration Date"
            value={newJob.expirationDate}
            onChange={(e) =>
              setNewJob({ ...newJob, expirationDate: e.target.value })
            }
            style={{ marginRight: "10px", padding: "5px" }}
          />
          <button
            onClick={addJob}
            style={{ padding: "5px 10px", marginLeft: "10px" }}
          >
            Add Job
          </button>
        </div>
      </div>
      <div>
        <h3>Preview Job Details</h3>
        <ul style={{ listStyleType: "none", padding: 0 }}>
          {jobs.map((job, index) => (
            <li
              key={index}
              style={{
                marginBottom: "20px",
                border: "1px solid #ccc",
                padding: "10px",
                borderRadius: "5px",
                boxShadow: "0 0 5px rgba(0, 0, 0, 0.1)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  marginBottom: "10px",
                }}
              >
                <div>
                  <strong>Description:</strong> {job.description}
                  <br />
                  <strong>Requirment:</strong> {job.requirement}
                  <br />
                  <strong>Poster Name:</strong> ${job.posterName}
                  <br />
                  <strong>Poster Contact:</strong> {job.posterContact}
                  <br />
                  <strong>Lowest Bid:</strong> {job.lowestBid}
                  <br />
                  <strong>Bids Count:</strong> {job.bidsCount}
                  <br />
                  <strong>Expiration Date:</strong> {job.expirationDate}
                  <br />
                </div>
              </div>
              <div>
                {editJob === job ? (
                  <>
                    <input
                      type="text"
                      name="description"
                      value={editDescription}
                      onChange={handleInputChange}
                      style={{ marginRight: "10px", padding: "5px" }}
                    />
                    <input
                      type="text"
                      name="requirement"
                      value={editRequirement}
                      onChange={handleInputChange}
                      style={{ marginRight: "10px", padding: "5px" }}
                    />
                    <input
                      type="number"
                      name="posterName"
                      value={editPosterName}
                      onChange={handleInputChange}
                      style={{ marginRight: "10px", padding: "5px" }}
                    />
                    <input
                      type="text"
                      name="posterContact"
                      value={editPosterContact}
                      onChange={handleInputChange}
                      style={{ marginRight: "10px", padding: "5px" }}
                    />
                    <input
                      type="text"
                      name="lowestBid"
                      value={editLowestBid}
                      onChange={handleInputChange}
                      style={{ marginRight: "10px", padding: "5px" }}
                    />
                     <input
                      type="text"
                      name="bidsCount"
                      value={editBidsCount}
                      onChange={handleInputChange}
                      style={{ marginRight: "10px", padding: "5px" }}
                    />
                    <input
                      type="text"
                      name="expirationDate"
                      value={editExpirationDate}
                      onChange={handleInputChange}
                      style={{ marginRight: "10px", padding: "5px" }}
                    />
                    <button
                      onClick={() => updateJob(index)}
                      style={{ padding: "5px 10px", marginLeft: "10px" }}
                    >
                      Update
                    </button>
                    <button
                      onClick={() => setEditJob(null)}
                      style={{ padding: "5px 10px", marginLeft: "10px" }}
                    >
                      Cancel
                    </button>
                  </>
                ) : (
                  <>
                    <button
                      onClick={() => {
                        setEditJob(job);
                        setEditRequirement(job.requirement);
                        setEditDescription(job.description);
                        setEditPosterName(job.posterName);
                        setEditPosterContact(job.posterContact);
                        setEditLowestBid(job.lowestBid);
                        setEditBidsCount(job.bidsCount);
                        setEditExpirationDate(job.expirationDate);
                      }}
                    >
                      Edit
                    </button>
                    <button
                      onClick={() => deleteJob(index)}
                      style={{ marginLeft: "10px" }}
                    >
                      Delete
                    </button>
                  </>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
   </JobAddWrapper>
    
  );
}

export default AddJob;
