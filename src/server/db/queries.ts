import { db } from ".";
import { desc } from "drizzle-orm";
import { z } from "zod";
import { guest_feedback_table } from "./schema";
import type { DB_GuestFeedback } from "./schema";

const feedbackSchema = z.object({
  name: z.string().trim().min(1).max(100),
  email: z.string().trim().email(),
  message: z.string().trim().min(1).max(1_000),
});

export const QUERIES = {
  getLatestGuestFeedback: async function (): Promise<
    DB_GuestFeedback[] | null
  > {
    try {
      const result = await db
        .select()
        .from(guest_feedback_table)
        .orderBy(desc(guest_feedback_table.createdAt))
        .limit(1);
      return result.length > 0 ? result : null;
    } catch (error) {
      console.error("Error fetching guest feedback:", error);
      throw new Error("Failed to fetch guest feedback");
    }
  },
};

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
      await db.insert(guest_feedback_table).values({
        name: parsedInput.data.name,
        message: parsedInput.data.message,
        email: parsedInput.data.email,
      });

      const result = await QUERIES.getLatestGuestFeedback();
      console.log("Feedback created successfully:", result);
      return result;
    } catch (error) {
      console.error("Error creating guest feedback:", error);
      throw new Error("Failed to create guest feedback");
    }
  },
};
