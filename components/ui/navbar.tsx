"use client";

import { cn } from "@/lib/utils";
import { NFLogo } from "../icons";
import { Button } from "./button";

import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Textarea } from "./textarea";
import { Ratings } from "./rating";
import { useState } from "react";
import { sendBetaFeedback } from "@/packages/notification";

interface Props extends React.HTMLAttributes<HTMLDivElement> {}

export function Navbar({ className, ...props }: Props) {
  const [rating, setRating] = useState(0);
  const [feedback, setFeedback] = useState("");
  const handleFeedback = () => {
    sendBetaFeedback({
      stars: rating,
      feedback,
      email: "sks@devflex.co.in",
      name: "SKS",
    });
  };
  return (
    <div
      {...props}
      className={cn(
        "flex w-full fixed top-0 py-5 px-8 justify-between z-50",
        className,
      )}
    >
      <div className="flex gap-3 items-center">
        <NFLogo />
        <p className="text-sm py-0.5 px-2 font-medium bg-[#EA580C]/20 rounded-md">
          v0.1.1 Beta
        </p>
      </div>
      <AlertDialog>
        <AlertDialogTrigger className="border-2 border-black bg-white py-2 px-4 rounded-md font-medium hover:bg-secondary">
          Feedback
          {/* <Button></Button> */}
        </AlertDialogTrigger>
        <AlertDialogContent>
          <AlertDialogHeader>
            <AlertDialogTitle>Feedback</AlertDialogTitle>
          </AlertDialogHeader>
          <div className="flex flex-col gap-2">
            <h3>Your feedback is important for our continous growth</h3>
            <Textarea
              value={feedback}
              onChange={(e) => setFeedback(e.target.value)}
              placeholder="Feedback"
            />
          </div>
          <div>
            <Ratings rating={rating} setRating={setRating} />
          </div>
          <AlertDialogFooter>
            <AlertDialogCancel>Cancel</AlertDialogCancel>
            <AlertDialogAction
              onClick={handleFeedback}
              className="bg-[#EA580C] hover:bg-[#F07E43]"
            >
              Send
            </AlertDialogAction>
          </AlertDialogFooter>
        </AlertDialogContent>
      </AlertDialog>
    </div>
  );
}
