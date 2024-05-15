import { useApplicationContext } from "@/app/context/communityContext";

export default function Table() {
  const { InvokeHook, addClick } = useApplicationContext();
  return (
    <div>
      <h1>{InvokeHook}</h1>
      <button onClick={addClick}>+</button>
    </div>
  );
}
