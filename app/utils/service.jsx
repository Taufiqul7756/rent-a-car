export const baseURL = "https://exam-server-7c41747804bf.herokuapp.com";

export const fetchCars = async () => {
  const response = await fetch(`${baseURL}/carsList`);
  const result = await response.json();
  return result;
};
