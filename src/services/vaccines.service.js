import Axios from "axios";

let baseUrl = "http://localhost:5000/api/vaccines/";

export const addVaccine = async (vaccine) => {
  const result = await Axios.post(baseUrl, vaccine);
  console.log(result);
  return result.data.newVaccine;
};

export const updateVaccine = async (vaccine) => {
  const result = await Axios.put(baseUrl + vaccine.id, vaccine);
  return result.data.updatedVaccine;
};

export const deleteVaccine = async (id) => {
  const result = await Axios.delete(baseUrl + id);
  return result.data.vaccine;
};

export const fetchVaccines = async () => {
  const result = await Axios.get(baseUrl + "all");
  return result.data.vaccines;
};

export const getVaccineById = async (id) => {
  const result = await Axios.get(baseUrl + id);
  return result.data.vaccine;
};
