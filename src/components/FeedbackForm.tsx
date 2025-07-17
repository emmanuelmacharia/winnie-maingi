import React from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";

const FeedbackForm = () => {
  return (
    <div className="w-full max-w-md rounded-lg p-4 shadow-md">
      <form action="" className="flex flex-col gap-4">
        <Label className="pb-1" htmlFor="name">
          Name
        </Label>
        <Input type="text" name="name" id="name" placeholder="Your name" />
        <Label className="pb-1" htmlFor="email">
          Email
        </Label>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Your email address"
        />
        <Label className="pb-1" htmlFor="message">
          Message
        </Label>
        <Textarea name="name" id="message" placeholder="Your message" />
        <div className="flex justify-start py-3">
          <button
            type="submit"
            className="bg-yellow hover:bg-emerald/80 focus:ring-emerald/50 rounded-4xl px-6 py-4 text-white focus:ring-2 focus:outline-none"
          >
            Submit Feedback
          </button>
        </div>
      </form>
    </div>
  );
};

export default FeedbackForm;
