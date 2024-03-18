import { Layers3, Play, Save } from "lucide-react";
import { Button } from "../ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "../ui/dropdown-menu";
import { input, layers, Layer as L } from "@/packages/tf";
import { useCallback } from "react";
import { ScrollArea, ScrollBar } from "../ui/scroll-area";
import { saveModel } from "./react-flow.utils";
import { useToast } from "../ui/use-toast";

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
  nodes: any;
  edges: any;
}) {
  const { toast } = useToast();
  if (!reactFlowInstance) return <></>;
  console.log(nodes, edges);
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
  if (!reactFlowInstance) return <></>;

  const save = () => {
    const resp = saveModel(edges, nodes);
    toast({
      duration: 3000,
      title: resp.success ? "Success" : "Alert",
      description: resp.message,
    });
  };

  return (
    <div className="absolute flex items-center justify-center bottom-5 z-30 gap-2 w-full">
      {/* input button */}
      <Button
        className="flex flex-col justify-around h-[5rem] w-[5rem]"
        variant={"outline"}
        onClick={() => {
          createLayerNode(input({ id: getId() }));
        }}
      >
        <Play fill="black" />
        <h2>Input</h2>
      </Button>
      {/* layer dropdown */}
      <DropdownMenu modal={false}>
        <DropdownMenuTrigger className="bg-white flex flex-col hover:bg-accent hover:text-accent-foreground items-center border rounded-md p-2 justify-around h-[5rem] w-[5rem]">
          <Layers3 />
          <h2>Layer</h2>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="flex flex-col pl-2 ml-5 max-h-[25rem] max-w-xl">
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
      {/* save button */}
      <div className="">
        <Button
          size="icon"
          // variant="primary"
          className="rounded-full h-[70px] w-[70px]"
          onClick={save}
        >
          <Save className="" />
        </Button>
      </div>
    </div>
  );
}
