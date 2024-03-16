import React, { useState } from "react";
import { Star } from "lucide-react";

import { cn } from "@/lib/utils";

// const ratingVariants = {
//   default: {
//     star: "text-foreground",
//     emptyStar: "text-muted-foreground",
//   },
//   destructive: {
//     star: "text-red-500",
//     emptyStar: "text-red-200",
//   },
//   yellow: {
//     star: "text-yellow-500",
//     emptyStar: "text-yellow-200",
//   },
// };
const totalStars = 5;

const Ratings = ({
  rating,
  setRating,
}: {
  rating: number;
  setRating: React.Dispatch<React.SetStateAction<number>>;
}) => {
  return (
    <div className={cn("flex items-center gap-2 relative")}>
      <div className="flex ">
        {[...Array(totalStars)].map((_, i) => {
          const prop = { fill: rating > i - 1 ? "gold" : "white" };
          return (
            <Star
              {...prop}
              onClick={() => {
                setRating(i);
              }}
              key={i}
              strokeWidth="1px"
            />
          );
        })}
      </div>
    </div>
  );
};

export { Ratings };
