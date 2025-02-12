import React from 'react';
import { useNavigate } from 'react-router-dom';
import InterviewList from '../components/InterviewList';
import CalendarView from '../components/CalenderView';
import styled from 'styled-components';

const Container = styled.div`
  padding: 20px;
`;

const Button = styled.button`
  margin-bottom: 20px;
  padding: 10px 15px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 5px;
  cursor: pointer;
  font-size: 16px;

  &:hover {
    background-color: #0056b3;
  }
`;

const Dashboard = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <h1>Interview Dashboard</h1>
      <Button onClick={() => navigate('/schedule')}>New Interview</Button>
      <InterviewList />
      <CalendarView />
    </Container>
  );
};

export default Dashboard;
