"use client";

import React from "react";
import { useState } from "react";
import { Label } from "./ui/label";
import { Input } from "./ui/input";
import { Textarea } from "./ui/textarea";
import { createGuestFeedback } from "~/server/actions/actions";
import { toast } from "sonner";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

const FeedbackForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: "",
    followUp: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    console.log("Submitting feedback with form data:", form);
    const submitted = await createGuestFeedback(form);
    console.log("Feedback submitted:", submitted);
    if (submitted.success === false) {
      setLoading(false);
      console.log("Feedback submission failed:", submitted.message);
      toast.error(submitted.message, {
        style: {
          background: "#651211",
          color: "#fff",
        },
      });
    } else {
      setLoading(false);
      toast.success(submitted.message, {
        style: {
          background: "#0D1F08",
          color: "#fff",
        },
      });
    }
    setForm({ name: "", email: "", message: "", followUp: "" });
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
        <Select
          required
          name="followUp"
          value={form.followUp}
          onValueChange={(value) => setForm({ ...form, followUp: value })}
        >
          <SelectTrigger className="w-full">
            <SelectValue placeholder="Select follow up option" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Are you interested in a 1 on 1 session?</SelectLabel>
              <SelectItem value="yes">Yes</SelectItem>
              <SelectItem value="no">No</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
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
          className="h-32 resize-none"
        />
        <div className="flex justify-start py-3">
          <button
            disabled={loading}
            type="submit"
            className="bg-yellow hover:bg-yellow/80 focus:ring-yellow/50 rounded-4xl px-6 py-4 text-white hover:cursor-pointer focus:ring-2 focus:outline-none disabled:opacity-40"
          >
            Submit Feedback
          </button>
        </div>
      </form>
    </div>
  );
};

export default FeedbackForm;
