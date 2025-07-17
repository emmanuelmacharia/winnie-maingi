"use server";

import { MUTATIONS } from "../db/queries";

export const createGuestFeedback = async (feedback: {
  name: string;
  email: string;
  message: string;
}) => {
  if (
    !feedback.name?.trim() ||
    !feedback.email?.trim() ||
    !feedback.message?.trim()
  ) {
    throw new Error("All fields are required");
  }

  // sanitize input
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(feedback.email)) {
    throw new Error("Please enter a valid email address");
  }

  // Validate input lengths
  if (feedback.name.length > 256 || feedback.email.length > 256) {
    throw new Error("Name and email must be less than 256 characters");
  }

  // message max length validation
  if (feedback.message.length > 1000) {
    throw new Error("Message must be less than 5000 characters");
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
