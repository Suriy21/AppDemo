import { useEffect } from 'react';
export default function useAgeEligibility(dob, setAge, setIsEligible) {
  useEffect(() => {

    if (!dob) {
      setAge('default');     
      setIsEligible(false);  
      return;
    }
    const today = new Date();
    let calculatedAge = today.getFullYear() - dob.getFullYear();
    const monthDiff = today.getMonth() - dob.getMonth();
    const dayDiff = today.getDate() - dob.getDate();
    if (monthDiff < 0 || (monthDiff === 0 && dayDiff < 0)) {
      calculatedAge--;
    }
    if (calculatedAge < 18) {
      setAge('below18');
      setIsEligible(false);
    } else {
      setAge('above18');
      setIsEligible(true);
    }

  }, [dob]);
}