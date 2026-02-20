import { Component } from "./component";

export default async function Home() {
  const res = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await res.json();

  return (
    <div>
      <h1>hello world</h1>
      <Component data={data} />
    </div>
  );
}
