"use client";
import React, { useEffect } from "react";
import Home from "../scene";
import {
  loadModelInstanceFromLocalStorage,
  useLocalStorageModel,
} from "@/components/internal/react-flow.utils";
import { useToast } from "@/components/ui/use-toast";
import { Layer } from "@/packages/tf";
import { Edge, Node } from "reactflow";
import { Skeleton } from "@/components/ui/skeleton";

function Page() {
  const { nodes, edges, loading } = useLocalStorageModel();
  if (loading) {
    return <Skeleton className="mx-auto w-[90%] my-4 " />;
  }
  console.log({ initial: { nodes, edges } });
  return <Home initialEdges={edges} initialNodes={nodes} />;
}

export default Page;
