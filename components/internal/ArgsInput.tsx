"use client";

import { Args } from "@/packages/tf";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import {
  Bool,
  Dict,
  Float,
  Int,
  List,
  None,
  Str,
  Tuple,
  supported_types,
  p_types,
} from "@/packages/typewriter";
import { useState } from "react";

let id = 0;
function get_id() {
  return id++;
}

function ClassFromEnum(enumType: supported_types) {
  switch (enumType) {
    case supported_types.int:
      return Int;
    case supported_types.str:
      return Str;
    case supported_types.float:
      return Float;
    case supported_types.bool:
      return Bool;
    case supported_types.list:
      return List;
    case supported_types.tuple:
      return Tuple;
    case supported_types.dict:
      return Dict;
    case supported_types.noneType:
      return None;
  }
}

export function ArgsInput({ arg }: { arg: Args }) {
  // console.log(arg);
  return (
    <div key={arg.getCaptalisedName()} className="w-full">
      <Label className="text-[0.5rem] m-0">{arg.getCaptalisedName()}</Label>
      <ArgTypeInput arg={arg} />
    </div>
  );
}

export function TypeSelector({
  type,
  setType,
}: {
  type: supported_types;
  setType: (type: string) => void;
}) {
  const elements = Object.keys(supported_types)
    .map((key) => {
      // Filtering out reverse mappings from number to enum name
      if (!isNaN(Number(key))) {
        return null;
      }
      const value = supported_types[key as keyof typeof supported_types];
      return (
        <SelectItem className="text-xs" key={value} value={key}>
          {value}
        </SelectItem>
      );
    })
    .filter(Boolean); // Filter out null values which might have been added for reverse mappings

  return (
    <Select onValueChange={setType}>
      <SelectTrigger className="text-[0.5rem] h-5">
        <SelectValue className="text-xs" placeholder={type} />
      </SelectTrigger>
      <SelectContent>{elements}</SelectContent>
    </Select>
  );
}

const newInt = Tuple.of();
console.log(newInt);
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
        setType={setType}
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
      setType={setType}
      arg={arg}
    />
  );
}

interface BaseInputProps<T> {
  placeholder: string;
  value: T;
  onChange: (data: p_types) => void;
  type: supported_types;
  setType: (type: supported_types) => void;
  arg: Args;
}

function BaseInput(props: BaseInputProps<p_types>) {
  const { placeholder, value, onChange, type, setType, arg } = props;
  const reInitiateType = (type: string) => {
    const newType = supported_types[type as keyof typeof supported_types];
    console.log(newType);
    const Class = ClassFromEnum(newType);
    arg.value = Class.of();
    console.log(arg.value);
    setType(arg.value.type);
  };
  switch (type) {
    case supported_types.int:
      return (
        <div className="flex gap-2">
          <Input
            className="text-[0.5rem] h-[20px]"
            placeholder={placeholder}
            type="number"
            onChange={(e) => (value.value = parseInt(e.target.value))}
          />
          <TypeSelector type={type} setType={reInitiateType} />
        </div>
      );
    case supported_types.float:
      return (
        <div className="flex gap-2">
          <Input
            className="text-[0.5rem] h-[20px]"
            placeholder={placeholder}
            type="number"
            onChange={(e) => (value.value = parseFloat(e.target.value))}
          />
          <TypeSelector type={type} setType={reInitiateType} />
        </div>
      );
    case supported_types.str:
      return (
        <div className="flex gap-2">
          <Input
            className="text-[0.5rem] h-[20px]"
            placeholder={placeholder}
            type="text"
            onChange={(e) => (value.value = e.target.value)}
          />
          <TypeSelector type={type} setType={reInitiateType} />
        </div>
      );
    case supported_types.bool:
      return (
        <div className="flex gap-2">
          <Select
            onValueChange={(val) => {
              value.value = val === "true" ? true : false;
            }}
          >
            <SelectTrigger className="text-[0.5rem] h-[20px]">
              <SelectValue placeholder={`${value.toCodeString()}`} />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="true">True</SelectItem>
              <SelectItem value="false">False</SelectItem>
            </SelectContent>
          </Select>
          <TypeSelector type={type} setType={reInitiateType} />
        </div>
      );
    case supported_types.noneType:
      return (
        <div className="flex gap-2">
          <Input className="text-[0.5rem] h-[20px]" placeholder={"None"} />
          <TypeSelector type={type} setType={reInitiateType} />
        </div>
      );
    case supported_types.tuple:
      return (
        <div className="flex flex-col border p-0.5 m-0.5 items-center">
          <TypeSelector type={type} setType={reInitiateType} />
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
  const { setType, value: tuple, onChange, arg } = props;
  console.log({ tuple });
  const data = tuple.value.map((v) => {
    return (
      <div key={get_id()} className="ml-2">
        <BaseInput
          placeholder={v.value ? v.value.toString() : "None"} // will never be undefined
          value={v}
          onChange={onChange}
          type={v.type}
          setType={setType}
          arg={arg}
        />
      </div>
    );
  });
  return <>{data}</>;
}
