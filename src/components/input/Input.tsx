import { useState } from "react";

const Input: React.FC = () => {
  const [name, setName] = useState<string>("empty string");

  return (
    <input type='text' defaultValue='name hai!' value={name} placeholder="Enter a user name" name="username" onChange={(e) => setName(e.target.value)} />
  );
};

export default Input;
