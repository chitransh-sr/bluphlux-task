import React from "react";
import { useInterviewContext } from "../context/InterviewContext";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import styled from "styled-components";

const List = styled.ul`
  list-style: none;
  padding: 0;
  max-width: 800px;
  margin: 0 auto;
`;

const ListItem = styled.li`
  background: #ffffff;
  padding: 16px;
  margin: 12px 0;
  border-radius: 8px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  transition: box-shadow 0.3s ease;

  &:hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  }
`;

const Button = styled.button`
  padding: 8px 16px;
  margin-left: 10px;
  border: none;
  border-radius: 6px;
  cursor: pointer;
  font-size: 14px;
  font-weight: 500;
  transition: background-color 0.3s ease, transform 0.2s ease;
  background-color: ${(props) => (props.delete ? "#ff4d4d" : "#007bff")};
  color: white;

  &:hover {
    background-color: ${(props) => (props.delete ? "#e60000" : "#0056b3")};
    transform: translateY(-1px);
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
  }
`;

const Title = styled.h2`
  font-size: 1.75rem;
  color: #333;
  margin-bottom: 20px;
  font-weight: 600;
`;

const NoInterviews = styled.p`
  font-size: 16px;
  color: #666;
  text-align: center;
  margin-top: 20px;
`;

const InterviewList = () => {
  const { state, dispatch } = useInterviewContext();
  const navigate = useNavigate();

  const handleDelete = (id) => {
    dispatch({ type: "DELETE_INTERVIEW", payload: id });
    toast.success("Interview deleted successfully!");
  };

  return (
    <List>
      <Title>Scheduled Interviews</Title>
      {state.interviews.length === 0 ? (
        <NoInterviews>No interviews scheduled.</NoInterviews>
      ) : (
        state.interviews.map((interview) => (
          <ListItem key={interview.id}>
            <div>
              <strong>{interview.candidateName}</strong> with{" "}
              <strong>{interview.interviewerName}</strong> on {interview.date}{" "}
              at {interview.time} ({interview.type})
            </div>
            <div>
              <Button onClick={() => navigate(`/edit/${interview.id}`)}>
                Edit
              </Button>
              <Button delete onClick={() => handleDelete(interview.id)}>
                Delete
              </Button>
            </div>
          </ListItem>
        ))
      )}
    </List>
  );
};

export default InterviewList;