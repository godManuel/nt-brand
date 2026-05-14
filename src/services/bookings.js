import client from "./client";

export const getAvailableSlots = (appointmentTypeID, date) =>
  client.get(
    `/acuity/availability?appointmentTypeID=${appointmentTypeID}&date=${date}`,
  );

export const createBooking = (data) => client.post("/acuity/book", data);
