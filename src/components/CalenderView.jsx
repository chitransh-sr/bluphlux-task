import React from 'react';
import { useInterviewContext } from '../context/InterviewContext';
import styled from 'styled-components';

const Container = styled.div`
  margin: 24px 0;
`;

const Title = styled.h2`
  font-size: 1.5rem;
  color: #333;
  margin-bottom: 16px;
  font-weight: 600;
`;

const Table = styled.table`
  width: 100%;
  border-collapse: separate;
  border-spacing: 0;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
`;

const Th = styled.th`
  background: #007bff;
  color: #ffffff;
  padding: 16px;
  text-align: left;
  font-weight: 600;
`;

const Td = styled.td`
  padding: 16px;
  border-bottom: 1px solid #e0e0e0;
  color: #333;
`;

const Tr = styled.tr`
  transition: background-color 0.2s ease;

  &:hover {
    background-color: #f8f9fa;
  }

  &:last-child {
    td {
      border-bottom: none;
    }
  }
`;

const CalendarView = () => {
  const { state } = useInterviewContext();

  return (
    <Container>
      <Title>Interview Schedule</Title>
      <Table>
        <thead>
          <tr>
            <Th>Candidate</Th>
            <Th>Interviewer</Th>
            <Th>Date</Th>
            <Th>Time</Th>
            <Th>Type</Th>
          </tr>
        </thead>
        <tbody>
          {state.interviews.map((interview) => (
            <Tr key={interview.id}>
              <Td>{interview.candidateName}</Td>
              <Td>{interview.interviewerName}</Td>
              <Td>{interview.date}</Td>
              <Td>{interview.time}</Td>
              <Td>{interview.type}</Td>
            </Tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};

export default CalendarView;