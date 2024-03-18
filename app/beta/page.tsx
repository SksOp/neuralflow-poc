"use client";
import React, { useEffect } from "react";
import Home from "../scene";
import { useLocalStorageModel } from "@/components/internal/react-flow.utils";
import { Skeleton } from "@/components/ui/skeleton";
import { LayoutMain } from "@/components/layout-main";

function Page() {
  const { nodes, edges, loading } = useLocalStorageModel();
  if (loading) {
    return (
      <LayoutMain>
        <div className="w-full flex justify-center items-center h-[100vh]">
          <Skeleton className="mx-atuo h-[95vh] w-[95vw] rounded-xl" />
        </div>
      </LayoutMain>
    );
  }
  return (
    <LayoutMain>
      <Home initialEdges={edges} initialNodes={nodes} />
    </LayoutMain>
  );
}

export default Page;
