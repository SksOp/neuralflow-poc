"use client";

import { Args } from "@/packages/tf";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { supported_types } from "@/packages/typewriter/type";
import { Int, Str, Tuple, p_types } from "@/packages/typewriter";
import { useState } from "react";

export function ArgsInput({ arg }: { arg: Args }) {
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
  if (!arg.value) {
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

  const placeholder = arg.value.value;
  return (
    <BaseInput
      placeholder={placeholder?.toString()}
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
        <Input className="text-[0.5rem] h-[20px]" placeholder={placeholder} />
      );
    case supported_types.noneType:
      return <Input className="text-[0.5rem] h-[20px]" placeholder={"None"} />;
    case supported_types.tuple:
      return (
        <TupleInput
          {...props}
          type={supported_types.tuple}
          value={value as Tuple}
        />
      );

    default:
      break;
  }
}

function TupleInput(props: BaseInputProps<Tuple>) {
  const { placeholder, value: tuple, onChange, arg } = props;
  const data = tuple.value.map((v) => {
    return (
      <BaseInput
        key={v.toCodeString()}
        placeholder={v.value?.toString()}
        value={v.value}
        onChange={onChange}
        type={v.type}
        arg={arg}
      />
    );
  });
  return <>{data}</>;
}
