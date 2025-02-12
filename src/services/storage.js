export const saveInterviews = (interviews) => {
    localStorage.setItem('interviews', JSON.stringify(interviews));
  };
  
  export const getInterviews = () => {
    return JSON.parse(localStorage.getItem('interviews')) || [];
  };