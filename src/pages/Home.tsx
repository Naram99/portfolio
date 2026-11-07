import { useState } from "react";

function Home() {
  const [activePage, setActivePage] = useState<string>("home");
  return <h1>Home</h1>;
}

export default Home;
