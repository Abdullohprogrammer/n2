import { createContext, useContext, useEffect, useState } from 'react';

const ToursContext = createContext();

export const useToursContext = () => {
  return useContext(ToursContext);
};
const url = 'https://course-api.com/react-tours-project';
  
  export const ToursProvider = ({ children }) => {
      const [loading, setLoading] = useState(true);
      const [tours, setTours] = useState([]);
    
      const removeTour = (id) => {
          const newTours = tours.filter((tour) => tour.id !== id);
          setTours(newTours);
        };
      
        const fetchTours = async () => {
            setLoading(true);
      try {
          const response = await fetch(url);
          const tours = await response.json();
      setLoading(false);
      setTours(tours);
    } catch (error) {
        setLoading(false);
        console.log(error);
      }
    };
  
    useEffect(() => {
        fetchTours();
      }, []);
    
      return (
          <ToursContext.Provider value={{ loading, tours, removeTour, fetchTours }}>
            {children}
          </ToursContext.Provider>
        );
      };
      
      export default ToursContext;