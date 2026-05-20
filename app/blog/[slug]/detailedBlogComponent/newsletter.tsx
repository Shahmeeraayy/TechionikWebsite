"use client";
import Button from "@/components/Button";
import { useState } from "react";

interface NewsletterProps {
  heading: string;
  description: string;
  label: string;
  placeholder: string;
  buttonText: string;
  // onSubmit: (email: string) => void;
}

const NewsLetter = ({
  heading,
  description,
  label,
  placeholder,
  buttonText,
}: NewsletterProps) => {
  const [email, setEmail] = useState("");
  return (
    <div className="space-y-3 h-73 w-[100%] border border-[--color-muted] bg-[#FFFFFF12] flex flex-col justify-center px-10 rounded-lg">
      <h4>{heading}</h4>
      <p className="caption text-muted">{description}</p>
      <form className="flex flex-col gap-2" action={() => {}}>
        <label className="caption text-muted" htmlFor="">
          {label}
        </label>
        <input
          className=" bg-[#26262B] text-white rounded-2xl p-2"
          placeholder={placeholder}
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Button
          className="inline-flex w-auto"
          onClick={() => {}}
          text={buttonText}
          size="medium"
          variant="gradient"
        />
      </form>
    </div>
  );
};
export default NewsLetter;
