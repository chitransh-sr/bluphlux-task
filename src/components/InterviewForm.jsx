import React, { useState } from 'react';
import { useInterviewContext } from '../context/InterviewContext';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
  max-width: 400px;
  margin: 0 auto;
  padding: 24px;
  background: #ffffff;
  border-radius: 8px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;

const Input = styled.input`
  padding: 12px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  font-size: 16px;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const Select = styled.select`
  padding: 12px;
  border: 1px solid #e0e0e0;
  border-radius: 6px;
  font-size: 16px;
  background: #ffffff;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #007bff;
    outline: none;
  }
`;

const Button = styled.button`
  padding: 12px;
  background-color: #007bff;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 16px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #0056b3;
  }

  &:focus {
    outline: none;
    box-shadow: 0 0 0 3px rgba(0, 123, 255, 0.5);
  }
`;

const InterviewForm = ({ interview }) => {
  const { dispatch } = useInterviewContext();
  const navigate = useNavigate();
  const [formData, setFormData] = useState(
    interview || {
      id: Date.now(),
      candidateName: '',
      interviewerName: '',
      date: '',
      time: '',
      type: 'Technical',
    }
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.candidateName || !formData.interviewerName || !formData.date || !formData.time) {
      toast.error('Please fill all fields');
      return;
    }

    if (interview) {
      dispatch({ type: 'UPDATE_INTERVIEW', payload: formData });
      toast.success('Interview updated successfully!');
    } else {
      dispatch({ type: 'ADD_INTERVIEW', payload: formData });
      toast.success('Interview scheduled successfully!');
    }
    navigate('/');
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Input
        type="text"
        placeholder="Candidate Name"
        value={formData.candidateName}
        onChange={(e) => setFormData({ ...formData, candidateName: e.target.value })}
      />
      <Input
        type="text"
        placeholder="Interviewer Name"
        value={formData.interviewerName}
        onChange={(e) => setFormData({ ...formData, interviewerName: e.target.value })}
      />
      <Input
        type="date"
        value={formData.date}
        onChange={(e) => setFormData({ ...formData, date: e.target.value })}
      />
      <Input
        type="time"
        value={formData.time}
        onChange={(e) => setFormData({ ...formData, time: e.target.value })}
      />
      <Select
        value={formData.type}
        onChange={(e) => setFormData({ ...formData, type: e.target.value })}
      >
        <option value="Technical">Technical</option>
        <option value="HR">HR</option>
        <option value="Behavioral">Behavioral</option>
      </Select>
      <Button type="submit">{interview ? 'Update' : 'Schedule'}</Button>
    </Form>
  );
};

export default InterviewForm;