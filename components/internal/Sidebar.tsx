"use client";

import {
  Blocks,
  BookMarked,
  ChevronUp,
  Dice6,
  Layers3,
  MousePointer2,
  Play,
  Pointer,
  Save,
  Zap,
} from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
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
import { input, layers, Layer as L, Layer, Model } from "@/packages/tf";
import { useCallback, useState } from "react";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { saveModel } from "./react-flow.utils";
import { useToast } from "../ui/use-toast";
import { Code } from "../ui/code";
import { CopyToClipboard } from "../copy-to-clipboard";
import { Edge, Node } from "reactflow";
import { Separator } from "../ui/separator";

let id = 1;
const getId = () => `${id++}`;

export function Sidebar({
  reactFlowInstance,
  setNodes,
  nodes,
  edges,
}: {
  reactFlowInstance: any;
  setNodes: any;
  nodes: Node<Layer>[];
  edges: Edge<any>[];
}) {
  const [isDialogOpen, setIsDialogOpen] = useState(false);
  const [code, setCode] = useState("");
  const { toast } = useToast();
  // console.log(nodes, edges);
  const createLayerNode = (layer: L) => {
    if (!reactFlowInstance) return <></>;
    const position = reactFlowInstance.screenToFlowPosition({
      x: 1200,
      y: 144, //this keeps new nodes leveled at the same y axis
    });

    const newNode = {
      id: layer.getId(),
      type: "custom",
      position,
      data: layer,
    };

    setNodes((nds: any) => nds.concat(newNode));
  };

  const save = () => {
    const resp = saveModel(edges, nodes);
    toast({
      duration: 3000,
      title: resp.success ? "Success" : "Alert",
      description: resp.message,
    });
  };
  const generateCode = useCallback(() => {
    //iterate through nodes array and fill inputNodes[]
    edges.forEach((edge) => {
      const sourceNode = nodes.find((node) => {
        return node.id === edge.source;
      });
      const targetNode = nodes.find((node) => {
        return node.id === edge.target;
      });
      if (!targetNode || !sourceNode) {
        alert("no selected");
        return;
      }
      targetNode.data.input_nodes.add(sourceNode.data);
    });
    const layers = nodes.map((node) => node.data);
    try {
      const model = Model.of({ layers });
      // const modelInstance = model.save()
      const generatedCode = model.compile();
      setCode(generatedCode);
    } catch (err: any) {
      console.log(err);
      setIsDialogOpen(false);
      toast({
        duration: 2000,
        title: "Error",
        description: err.message,
      });
    }
  }, [edges, nodes, toast]);
  return (
    <div className="absolute bottom-5 z-30 flex h-[7rem] w-full items-center justify-center">
      <div className="flex h-full items-center justify-center gap-10 rounded-l-2xl bg-foreground px-8 py-7 pb-8">
        <div className="group flex flex-col items-center justify-center gap-2">
          <div // input button //
            className="flex h-full flex-col justify-around border-0 bg-transparent p-0  "
          >
            {/* <Pointer strokeWidth={"1px"} className="h-10 w-10 text-white" /> */}
            <MousePointer2 strokeWidth={"1px"} className="h-8 w-8 text-white" />
          </div>
        </div>
      </div>
      <Separator className="h-full w-[1px] bg-[#EA580C]" />
      <div className="flex h-full items-center justify-center gap-10 bg-secondary px-10 py-7 pb-8">
        <div className="group flex flex-col items-center justify-center gap-2">
          <Button // input button //
            className="flex h-full flex-col justify-around border border-secondary bg-transparent p-0  "
            variant={"outline"}
            onClick={() => {
              createLayerNode(input({ id: getId() }));
            }}
          >
            <ChevronUp className="text-gray-400 group-hover:text-black" />
            <Dice6 strokeWidth={"1px"} className="h-10 w-10" />
          </Button>
          <span className="text-xs font-normal text-gray-600">Input</span>
        </div>
        <DropdownMenu modal={false}>
          {/* layers dropdown */}
          <div className="group flex flex-col items-center justify-center gap-2">
            <DropdownMenuTrigger className="flex h-full flex-col items-center justify-around  rounded-md border  border-secondary bg-transparent p-0  text-sm font-medium  ">
              <ChevronUp className="text-gray-400 group-hover:text-black" />
              <Layers3 strokeWidth={"1px"} className="h-10 w-10" />
            </DropdownMenuTrigger>
            <span className="text-xs font-normal text-gray-600">Layer</span>
          </div>
          <DropdownMenuContent className="ml-5 flex max-h-[25rem] max-w-xl flex-col pl-2">
            <DropdownMenuLabel>Layers</DropdownMenuLabel>
            <DropdownMenuSeparator />
            <ScrollArea className="w-xl h-[25rem] rounded-md">
              {layers.map((layer) => {
                const newLayer = layer({ id: getId() });
                return (
                  <DropdownMenuItem
                    key={layer.name}
                    onClick={() => {
                      createLayerNode(newLayer);
                    }}
                  >
                    {newLayer.name}
                  </DropdownMenuItem>
                );
              })}
              <ScrollBar orientation="vertical" />
            </ScrollArea>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
      <Separator className="h-full w-[1px] bg-[#EA580C]" />

      <div className="flex h-full items-center justify-center gap-10 rounded-r-2xl bg-secondary px-10 py-7 pb-8">
        {/* save button */}
        <div className="group flex flex-col items-center justify-center gap-3">
          <Button
            variant={"outline"}
            onClick={save}
            className="flex h-full flex-col items-center border-0 bg-transparent p-0 text-black"
          >
            <ChevronUp className="text-gray-400 group-hover:text-black" />
            <Save className="h-10 w-10 rounded-full bg-black p-[0.6rem] text-white" />
          </Button>
          <span className="text-xs font-normal text-gray-600">Save</span>
        </div>

        <AlertDialog open={isDialogOpen}>
          {/* code run button */}
          <div className="group flex flex-col items-center justify-center gap-3">
            <AlertDialogTrigger
              onClick={() => {
                setIsDialogOpen(true);
                generateCode();
              }}
              className="flex h-full flex-col items-center justify-center p-0 text-sm"
            >
              <ChevronUp className="text-gray-400 group-hover:text-black" />
              <Zap className="h-10 w-10 rounded-full bg-orange-400 p-[0.6rem] text-white" />
            </AlertDialogTrigger>
            <span className="text-xs font-normal text-gray-600">Code</span>
          </div>
          <AlertDialogContent className="max-h-xl max-w-xl px-3 py-5">
            <ScrollArea className="w-xl h-xl rounded-md border p-4">
              <Code code={`\`\`\`py \n${code}`} />
              <ScrollBar orientation="horizontal" />
              <ScrollBar orientation="vertical" />
            </ScrollArea>
            <AlertDialogFooter>
              <CopyToClipboard content={code} />
              <AlertDialogCancel onClick={() => setIsDialogOpen(false)}>
                Close
              </AlertDialogCancel>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
}
