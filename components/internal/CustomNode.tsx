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
        "flex flex-col text-xs bg-white shadow-lg border active:border-orange-300 rounded-sm w-52",
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
          <h2
            className={
              "text-center font-bold border-b-primary/10 border-b p-3 w-full"
            }
          >
            {name}
          </h2>
          <div className="px-2 w-full">
            {args.map((arg) => {
              if (arg.isRequired)
                return <ArgsInput key={arg.name + id} arg={arg} />;
            })}
          </div>
          <AccordionTrigger className="px-3 text-[0.5rem]">
            Advanced
          </AccordionTrigger>
          <AccordionContent>
            <div className="px-2 w-full">
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
