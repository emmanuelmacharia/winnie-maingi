"use client";

import React from "react";
import { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { createGuestFeedback } from "~/server/actions/actions";

const FeedbackForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [error, setError] = useState<boolean>(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Here you can send the form data to an API or service
    const submitted = await createGuestFeedback(form);
    console.log("Feedback submitted:", submitted);
    // Reset the form
    setForm({ name: "", email: "", message: "" });
  };

  return (
    <div className="w-full max-w-md p-4">
      <form onSubmit={handleSubmit} className="flex flex-col gap-4">
        <Label className="pb-1" htmlFor="name">
          Name
        </Label>
        <Input
          type="text"
          name="name"
          id="name"
          placeholder="Your name"
          value={form.name}
          onChange={handleChange}
          required
          maxLength={256}
        />
        <Label className="pb-1" htmlFor="email">
          Email
        </Label>
        <Input
          type="email"
          name="email"
          id="email"
          placeholder="Your email address"
          value={form.email}
          onChange={handleChange}
          required
          maxLength={256}
        />
        <Label className="pb-1" htmlFor="message">
          Message
        </Label>
        <Textarea
          name="message"
          id="message"
          placeholder="Your message"
          value={form.message}
          onChange={handleChange}
          required
          maxLength={1000}
        />
        <div className="flex justify-start py-3">
          <button
            type="submit"
            className="bg-yellow hover:bg-yellow/80 focus:ring-yellow/50 rounded-4xl px-6 py-4 text-white hover:cursor-pointer focus:ring-2 focus:outline-none"
          >
            Submit Feedback
          </button>
        </div>
      </form>
    </div>
  );
};

export default FeedbackForm;
