import React, { memo, useCallback, useState } from "react";
import { Layer as L } from "@/packages/tf";
import { Handle, NodeProps, Position } from "reactflow";
import { cn } from "@/lib/utils";
import { supported_types } from "@/packages/typewriter";
import { ArgsInput } from "./ArgsInput";

function CustomNode(props: NodeProps<L>) {
  const { id, data, isConnectable } = props;
  const { name, args } = data;
  // console.log(data, id);
  return (
    <div className="flex flex-col text-xs bg-gray-100 border active:border-orange-300 rounded-sm w-52">
      <Handle
        id="a"
        type="target"
        position={Position.Left}
        style={{ background: "#555" }}
        onConnect={(params) => console.log("handle onConnect", params)}
        isConnectable={isConnectable}
      />
      <h2
        className={"text-center font-bold border-b-white border-b-2 p-3 w-full"}
      >
        {name}
      </h2>
      <div className="p-2 w-full">
        {args.map((arg) => {
          return <ArgsInput key={arg.name + id} arg={arg} />;
        })}
      </div>
      <Handle
        id="b"
        type="source"
        position={Position.Right}
        style={{ background: "#555" }}
        onConnect={(params) => console.log("handle onConnect", params)}
        isConnectable={isConnectable}
      />
    </div>
  );
}

export default memo(CustomNode);
