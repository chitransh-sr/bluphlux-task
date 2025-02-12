import React from 'react';
import { useParams } from 'react-router-dom';
import { useInterviewContext } from '../context/InterviewContext';
import InterviewForm from '../components/InterviewForm';

const EditInterview = () => {
  const { id } = useParams();
  const { state } = useInterviewContext();
  const interview = state.interviews.find((interview) => interview.id === parseInt(id));

  return (
    <div>
      <h1>Edit Interview</h1>
      {interview ? <InterviewForm interview={interview} /> : <p>Interview not found</p>}
    </div>
  );
};

export default EditInterview;