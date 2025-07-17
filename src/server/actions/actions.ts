"use server";

import { MUTATIONS } from "../db/queries";

export const createGuestFeedback = async (feedback: {
  name: string;
  email: string;
  message: string;
  followUp?: string;
}) => {
  console.log("Creating guest feedback with data:", feedback);
  if (
    !feedback.name?.trim() ||
    !feedback.email?.trim() ||
    !feedback.message?.trim()
  ) {
    return {
      message: "All fields are required",
      data: null,
      success: false,
    };
  }

  // sanitize input
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(feedback.email)) {
    return {
      message: "Please enter a valid email address",
      data: null,
      success: false,
    };
  }

  // Validate input lengths
  if (feedback.name.length > 256 || feedback.email.length > 256) {
    return {
      message: "Name and email must be less than 256 characters",
      data: null,
      success: false,
    };
  }

  if (
    feedback.followUp &&
    feedback.followUp.toLowerCase() !== "yes" &&
    feedback.followUp?.toLowerCase() !== "no"
  ) {
    feedback.followUp = "no"; // Default to "No" if not provided or invalid
  }
  feedback.followUp = feedback.followUp?.trim() ?? "no";

  // message max length validation
  if (feedback.message.length > 1000) {
    return {
      message: "Message must be less than 1000 characters",
      data: null,
      success: false,
    };
  }

  try {
    const result = await MUTATIONS.createGuestFeedback(feedback);
    console.log("Feedback submitted successfully:", result);
    return {
      success: true,
      message: "Feedback submitted successfully",
      data: result,
    };
  } catch (error) {
    console.error("Error submitting feedback:", error);
    return {
      message: "Failed to submit feedback. Please try again later.",
      data: error instanceof Error ? error.message : "Unknown error",
      success: false,
    };
  }
};
