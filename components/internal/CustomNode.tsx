import React, { memo, useCallback, useState } from "react";
import { Layer as L } from "@/packages/tf";
import { Handle, NodeProps, Position, useOnSelectionChange } from "reactflow";
import { cn } from "@/lib/utils";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArgsInput } from "./ArgsInput";
import { TFLogo } from "../icons";

function CustomNode(props: NodeProps<L>) {
  const { id, data, selected, isConnectable } = props;
  const { name, args } = data;
  // useOnSelectionChange({
  //   onChange: ({ nodes, edges }) => {
  //     console.log(nodes, edges);
  //   },
  // });

  return (
    <div
      className={cn(
        "flex w-52 flex-col rounded-sm border bg-white text-xs shadow-lg active:border-orange-300",
        selected ? "border-orange-300" : "",
      )}
    >
      <Handle
        id="a"
        type="target"
        position={Position.Left}
        style={{ background: "#EA580C", width: "0.6rem", height: "0.6rem" }}
        onConnect={(params) => console.log("handle onConnect", params)}
        isConnectable={isConnectable}
      />
      <Accordion type="single" collapsible>
        <AccordionItem value="item-1">
          <span
            className={
              "flex w-full justify-between border-b border-b-primary/10 p-3 text-center font-bold"
            }
          >
            {name}
            <TFLogo className="h-3 w-3" />
          </span>
          <div className="w-full px-2">
            {args.map((arg) => {
              if (arg.isRequired)
                return <ArgsInput key={arg.name + id} arg={arg} />;
            })}
          </div>
          <AccordionTrigger className="px-3 text-[0.5rem]">
            Advanced
          </AccordionTrigger>
          <AccordionContent>
            <div className="w-full px-2">
              {args.map((arg) => {
                if (!arg.isRequired)
                  return <ArgsInput key={arg.name + id} arg={arg} />;
              })}
            </div>
          </AccordionContent>
        </AccordionItem>
      </Accordion>
      <Handle
        id="b"
        type="source"
        position={Position.Right}
        style={{ background: "#EA580C", width: "0.6rem", height: "0.6rem" }}
        onConnect={(params) => console.log("handle onConnect", params)}
        isConnectable={isConnectable}
      />
    </div>
  );
}

export default memo(CustomNode);
