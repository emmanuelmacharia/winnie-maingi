"use server";

import { MUTATIONS } from "../db/queries";

export const createGuestFeedback = async (feedback: {
  name: string;
  email: string;
  message: string;
}) => {
  if (!feedback.name || !feedback.email || !feedback.message) {
    throw new Error("All fields are required");
  }

  try {
    const result = await MUTATIONS.createGuestFeedback(feedback);
    console.log("Feedback submitted successfully:", result);
    return result;
  } catch (error) {
    console.error("Error submitting feedback:", error);
    throw new Error("Failed to submit feedback");
  }
};
