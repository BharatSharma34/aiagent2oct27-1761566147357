import { useEffect, useState } from "react";
import { api } from "../utils/api";  // <-- use the helper

export default function Home() {
  const [data, setData] = useState(null);

  useEffect(() => { 
    api.get("/health").then(r => setData(r.data));
  }, []);

  return (
    <div style={{padding:"2rem"}}>
      <h1>AiAgent2Oct27</h1>
      <p>app agent test</p>
      <pre>{JSON.stringify(data,null,2)}</pre>
    </div>
  );
}