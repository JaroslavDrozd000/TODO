import { useContext } from 'react';
import { AppContext } from '../providers/AppProvider';

const useAppContext = () => {
  const context = useContext(AppContext);

  if (context === null) throw Error('AppContext is null.');
  return context;
};

export default useAppContext;
