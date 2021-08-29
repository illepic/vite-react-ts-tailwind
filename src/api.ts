const API_URL =
  "https://my-json-server.typicode.com/illepic/vite-react-ts-tailwind";
const API_HEADERS = {};

const APPOINTMENTS_URL = [API_URL, "appointments"].join("/");

interface ApiAppointment {
  id: number;
  title: string;
  branch: string;
  phase: string;
}
export interface Appointment extends ApiAppointment {}

export const fetchAllAppointments = async (): Promise<Appointment[]> => {
  const response = await fetch(APPOINTMENTS_URL, API_HEADERS);
  const apiAppointments: ApiAppointment[] = await response.json();

  // Process appointments here
  const appointments = apiAppointments.map((appointment) => appointment);

  return appointments;
};
