import { db } from ".";
import { guest_feedback_table } from "./schema";
import type { DB_GuestFeedback } from "./schema";

export const MUTATIONS = {
  createGuestFeedback: async function (input: {
    name: string;
    email: string;
    message: string;
  }) {
    try {
      console.log("Creating guest feedback with input:", input);
      const result = await db.insert(guest_feedback_table).values({
        name: input.name,
        message: input.message,
        email: input.email,
      });
      console.log("Feedback created successfully:", result);
      return result;
    } catch (error) {
      console.error("Error creating guest feedback:", error);
      throw new Error("Failed to create guest feedback");
    }
  },
};
