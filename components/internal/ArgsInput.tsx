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
  // Dict,
  Float,
  Int,
  // List,
  None,
  Str,
  Tuple,
  supported_types,
  p_types,
} from "@/packages/typewriter";
import { useState } from "react";
import { ClassValue } from "clsx";
import { cn } from "@/lib/utils";
import { TFLogo } from "../icons";

let id = 0;
function get_id() {
  return id++;
}
let idx = 0;
function get_idx() {
  return idx++;
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
    // case supported_types.list:
    //   return List;
    case supported_types.tuple:
      return Tuple;
    // case supported_types.dict:
    //   return Dict;
    case supported_types.noneType:
      return None;
  }
}

export function ArgsInput({ arg }: { arg: Args }) {
  return (
    <div key={arg.getCaptalisedName()} className="w-full">
      <Label className="m-0 flex justify-between text-[0.5rem]">
        {arg.getCaptalisedName()}
      </Label>
      <ArgTypeInput arg={arg} />
    </div>
  );
}

export function TypeSelector({
  className,
  type,
  setType,
}: {
  className?: ClassValue;
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
      <SelectTrigger className={cn("h-5 text-[0.5rem]", className)}>
        <SelectValue className="text-xs" placeholder={type} />
      </SelectTrigger>
      <SelectContent>{elements}</SelectContent>
    </Select>
  );
}

function ArgTypeInput({ arg }: { arg: Args }) {
  function onChange(data: p_types) {
    arg.value = data;
  }
  const [type, setType] = useState<supported_types>(
    arg.value?.type ?? supported_types.noneType,
  );

  const defaultValue = arg.getDefaultValue();
  if (!defaultValue || !arg.value) {
    return (
      <BaseInput
        placeholder={arg.value ? arg.value.toCodeString() : ""}
        value={arg.value!} // will be null but using only as reference
        onChange={onChange}
        type={type}
        setType={setType}
        arg={arg}
      />
    );
  }
  const placeholder = arg.value;

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
  className?: string;
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
    setType(newType);
    const Class = ClassFromEnum(newType);
    arg.value = Class.of();
  };
  switch (type) {
    case supported_types.int:
      return (
        <div className="flex w-full flex-col gap-0.5">
          <TypeSelector className="" type={type} setType={reInitiateType} />
          <Input
            className="h-[20px] border-black/40 text-[0.5rem]"
            placeholder={placeholder}
            type="number"
            onChange={(e) => {
              return (value.value = parseInt(e.target.value));
            }}
          />
        </div>
      );
    case supported_types.float:
      return (
        <div className="flex w-full flex-col gap-0.5">
          <TypeSelector className="" type={type} setType={reInitiateType} />
          <Input
            className="h-[20px] border-black/40 text-[0.5rem]"
            placeholder={placeholder}
            type="number"
            onChange={(e) => (value.value = parseFloat(e.target.value))}
          />
        </div>
      );
    case supported_types.str:
      return (
        <div className="flex w-full flex-col gap-0.5">
          <TypeSelector className="" type={type} setType={reInitiateType} />
          <Input
            className="h-[20px] border-black/40 text-[0.5rem]"
            placeholder={placeholder}
            type="text"
            onChange={(e) => (value.value = e.target.value)}
          />
        </div>
      );
    case supported_types.bool:
      return (
        <div className="flex w-full flex-col gap-0.5">
          <TypeSelector className="" type={type} setType={reInitiateType} />
          <Select
            onValueChange={(val) => {
              value.value = val === "true" ? true : false;
            }}
          >
            <SelectTrigger className="h-[20px] border-black/40 text-[0.5rem]">
              <SelectValue placeholder={`${value.toCodeString()}`} />
            </SelectTrigger>
            <SelectContent className="">
              <SelectItem value="true">True</SelectItem>
              <SelectItem value="false">False</SelectItem>
            </SelectContent>
          </Select>
        </div>
      );
    case supported_types.noneType:
      return (
        <div className="flex w-full flex-col gap-0.5">
          <TypeSelector className="" type={type} setType={reInitiateType} />
          <Input
            className="h-[20px] text-[0.5rem] "
            placeholder={"None"}
            disabled
          />
        </div>
      );

    case supported_types.tuple:
      return (
        <>
          <div className="m-0.5 flex w-full flex-col items-center rounded-sm border p-0.5">
            <TypeSelector className="" type={type} setType={reInitiateType} />
            <TupleInput
              className=""
              {...props}
              type={supported_types.tuple}
              value={value as Tuple}
            />
          </div>
        </>
      );

    default:
      break;
  }
}

function TupleInput(props: BaseInputProps<Tuple>) {
  const { value: tuple, setType, onChange, arg, className } = props;
  // This is an array of states for each element's type
  const [types, setTypes] = useState(tuple.value.map((item) => item.type));

  // Function to update the type of a single tuple element
  const setTypeAtIndex = (index: number, type: supported_types) => {
    const newTypes = [...types];
    newTypes[index] = type;
    setTypes(newTypes);

    const Class = ClassFromEnum(type);
    tuple.value[index] = Class.of();
    onChange(tuple);
  };
  const tupleElements = tuple.value.map((v, index) => {
    const newArg = new Args({
      name: "tuple handler",
      isRequired: false,
      defaultValue: v,
    });
    return (
      <div
        key={get_id()}
        className={cn(
          "flex w-full flex-col items-center pl-3 pt-0.5",
          className,
        )}
      >
        <BaseInput
          placeholder={v.value ? v.value.toString() : "None"} // will never be undefined
          value={v}
          onChange={(newValue) => {
            tuple.value[index] = newValue;
            onChange(tuple);
          }}
          type={v.type}
          setType={(newType) => setTypeAtIndex(index, newType)}
          arg={newArg}
        />
        {/* when index is last the show + sign */}
        {index === tuple.value.length - 1 && (
          <>
            <AddNewField
              tuple={tuple}
              setTypes={setTypes}
              types={types}
              onChange={onChange}
            />
          </>
        )}
      </div>
    );
  });
  return (
    <>
      {tupleElements}
      {tuple.value.length === 0 && (
        <AddNewField
          tuple={tuple}
          setTypes={setTypes}
          types={types}
          onChange={onChange}
        />
      )}
    </>
  );
}

function AddNewField({
  tuple,
  setTypes,
  types,
  onChange,
}: {
  tuple: Tuple;
  setTypes: (types: supported_types[]) => void;
  types: supported_types[];
  onChange: (tuple: Tuple) => void;
}) {
  return (
    <div className="flex w-full justify-between gap-2">
      <button
        className="my-0.5 flex w-full items-center justify-center gap-0.5 rounded-md border px-3 text-[0.5rem] hover:bg-gray-100"
        onClick={() => {
          tuple.value.push(ClassFromEnum(supported_types.noneType).of());
          setTypes([...types, supported_types.noneType]);
          onChange(tuple);
        }}
      >
        <span className="flex items-center gap-1">+ Add</span>
      </button>
      {tuple.value.length > 0 && (
        <button
          className="my-0.5 flex w-full items-center justify-center gap-0.5 rounded-md border px-3 text-[0.5rem] hover:bg-gray-100"
          onClick={() => {
            tuple.value.pop();
            setTypes([...types, supported_types.noneType]); // todo check if this causes issue
            onChange(tuple);
          }}
        >
          <span className="flex items-center gap-1">- Remove</span>
        </button>
      )}
    </div>
  );
}
