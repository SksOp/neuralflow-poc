"use client";

import { Args } from "@/packages/tf";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { supported_types } from "@/packages/typewriter/type";
import { Int, Str, Tuple, p_types } from "@/packages/typewriter";
import { useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export function ArgsInput({ arg }: { arg: Args }) {
  //   const [type, setType] = useState<supported_types>(arg.defaultValue?.type ?? supported_types.noneType);

  return (
    <div key={arg.getCaptalisedName()}>
      <Label className="text-[0.5rem] m-0">{arg.getCaptalisedName()}</Label>
      <ArgTypeInput arg={arg} />
    </div>
  );
}

function ArgTypeInput({ arg }: { arg: Args }) {
  function onChange(data: p_types) {
    arg.value = data;
  }
  const [type, setType] = useState<supported_types>(
    arg.value?.type ?? supported_types.noneType,
  );
  if (!arg.defaultValue || !arg.value) {
    return (
      <BaseInput
        placeholder={""}
        value={Str.of("")}
        onChange={onChange}
        type={type}
        arg={arg}
      />
    );
  }

  const placeholder = arg.defaultValue;
  return (
    <BaseInput
      placeholder={placeholder.toCodeString()}
      value={arg.value as p_types}
      onChange={onChange}
      type={type}
      arg={arg}
    />
  );
}

interface BaseInputProps<T> {
  placeholder: string;
  value: T;
  onChange: (data: p_types) => void;
  type: supported_types;
  arg: Args;
}

function BaseInput(props: BaseInputProps<p_types>) {
  const { placeholder, value, onChange, type, arg } = props;
  switch (type) {
    case supported_types.int:
      return (
        <Input
          className="text-[0.5rem] h-[20px] w-20"
          placeholder={placeholder}
          type="number"
          onChange={(e) => (value.value = parseInt(e.target.value))}
        />
      );
    case supported_types.float:
      return (
        <Input
          className="text-[0.5rem] h-[20px] w-20"
          placeholder={placeholder}
          type="number"
          onChange={(e) => (value.value = parseFloat(e.target.value))}
        />
      );
    case supported_types.str:
      return (
        <Input
          className="text-[0.5rem] h-[20px] w-42"
          placeholder={placeholder}
          type="text"
          onChange={(e) => (value.value = e.target.value)}
        />
      );
    case supported_types.bool:
      return (
        <>
          <Input
            placeholder={placeholder}
            type="text"
            onChange={(e) => (value.value = e.target.value)}
          />
          <Select>
            <SelectTrigger className="text-[0.5rem] h-[20px] w-10">
              <SelectValue placeholder="Select" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="true">True</SelectItem>
              <SelectItem value="false">False</SelectItem>
            </SelectContent>
          </Select>
        </>
      );
    case supported_types.noneType:
      return (
        <Input className="text-[0.5rem] h-[20px] w-20" placeholder={"None"} />
      );
    case supported_types.tuple:
      return (
        <div className="flex flex-row border p-0.5 m-0.5 items-center">
          <TupleInput
            {...props}
            type={supported_types.tuple}
            value={value as Tuple}
          />
        </div>
      );

    default:
      break;
  }
}

function TupleInput(props: BaseInputProps<Tuple>) {
  const { value: tuple, onChange, arg } = props;
  console.log(tuple);
  const data = tuple.value.map((v) => {
    return (
      <BaseInput
        key={v.toCodeString()}
        placeholder={v.value ? v.value.toString() : "None"} // will never be undefined
        value={v}
        onChange={onChange}
        type={v.type}
        arg={arg}
      />
    );
  });
  return <>{data}</>;
}
