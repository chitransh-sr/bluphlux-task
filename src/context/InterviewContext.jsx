import React, { createContext, useContext, useReducer } from 'react';
import { saveInterviews, getInterviews } from '../services/storage.js';

const InterviewContext = createContext();

const interviewReducer = (state, action) => {
  switch (action.type) {
    case 'ADD_INTERVIEW':
      const newInterviews = [...state.interviews, action.payload];
      saveInterviews(newInterviews);
      return { ...state, interviews: newInterviews };
    case 'UPDATE_INTERVIEW':
      const updatedInterviews = state.interviews.map(interview =>
        interview.id === action.payload.id ? action.payload : interview
      );
      saveInterviews(updatedInterviews);
      return { ...state, interviews: updatedInterviews };
    case 'DELETE_INTERVIEW':
      const filteredInterviews = state.interviews.filter(
        interview => interview.id !== action.payload
      );
      saveInterviews(filteredInterviews);
      return { ...state, interviews: filteredInterviews };
    default:
      return state;
  }
};

export const InterviewProvider = ({ children }) => {
  const [state, dispatch] = useReducer(interviewReducer, {
    interviews: getInterviews(),
  });

  return (
    <InterviewContext.Provider value={{ state, dispatch }}>
      {children}
    </InterviewContext.Provider>
  );
};

export const useInterviewContext = () => useContext(InterviewContext);