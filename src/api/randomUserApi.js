export const getRandomUsers = async (count = 1) => {
  const response = await fetch(`https://randomuser.me/api/?results=${count}`);
  const data = await response.json();
  return data.results;
};