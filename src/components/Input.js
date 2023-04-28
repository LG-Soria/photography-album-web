import React, { useState } from "react";
import { Input, Button } from "@material-tailwind/react";

 
export default function Example() {
  const [email, setEmail] = useState("");
  const onChange = (event) => setEmail(event.target.value);
  
  return (
    <div className="mt-10 relative mx-5 flex w-11/12 max-w-[24rem] lg:mt-5">
      <Input
        type="email"
        label="Tu email"
        value={email}
        onChange={onChange}
        className="pr-20"
        containerProps={{
          className: "min-w-0",
        }}
      />
      <Button
        size="sm"
        color={email ? "blue" : "blue-gray"}
        disabled={!email}
        className="!absolute right-1 top-1 rounded"
      >
        Subscribirte
      </Button>
    </div>
  );
}
