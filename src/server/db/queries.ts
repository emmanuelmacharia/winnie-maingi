import { db } from ".";
import { z } from "zod";
import { guest_feedback_table } from "./schema";
import type { DB_GuestFeedback } from "./schema";

const feedbackSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email(),
  message: z.string().trim().min(1).max(1_000),
});

export const MUTATIONS = {
  createGuestFeedback: async function (input: {
    name: string;
    email: string;
    message: string;
  }) {
    const parsedInput = feedbackSchema.safeParse(input);
    if (!parsedInput.success) {
      throw new Error(`Invalid input: ${parsedInput.error.message}`);
    }
    try {
      console.log("Creating guest feedback with input:", parsedInput.data);
      const query = await db.insert(guest_feedback_table).values({
        name: input.name,
        message: input.message,
        email: input.email,
      });

      const result: DB_GuestFeedback = query[0]!;
      console.log("Feedback created successfully:", result);
      return result;
    } catch (error) {
      console.error("Error creating guest feedback:", error);
      throw new Error("Failed to create guest feedback");
    }
  },
};
