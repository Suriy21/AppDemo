import { useEffect } from 'react';

export default function useAgeEligibility(dob, setAge, setIsEligible) {
  useEffect(() => {

    // ✅ IMPORTANT: reset when no DOB
    if (!dob) {
      setAge('');
      setIsEligible(false);
      return;
    }

    const today = new Date();
    const birthDate = new Date(dob);

    let years = today.getFullYear() - birthDate.getFullYear();

    const monthDiff = today.getMonth() - birthDate.getMonth();

    if (
      monthDiff < 0 ||
      (monthDiff === 0 && today.getDate() < birthDate.getDate())
    ) {
      years--;
    }

    // ✅ SET VALUES PROPERLY
    if (years < 18) {
      setAge('below18');
      setIsEligible(false);
    } else {
      setAge('above18');
      setIsEligible(true);
    }

  }, [dob]); 
}