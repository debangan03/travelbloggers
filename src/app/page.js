import Image from "next/image";
import Card from "./Card";

export default async function Home() {
  const res = await fetch(`${process.env.VERCEL_URL}/api/getblogs`);
  const data = await res.json();
  const blogs = data.blogs;

  return (
    <main className="py-24 px-14 min-h-screen">
      <h1 className="text-2xl font-bold  text-center mb-1">Blogs</h1>
     < hr className="border-2 border-blue-500 w-[20%]  mx-auto mb-10"/>
      <div >
        <Card blogs={blogs}/>
      </div>
    </main>
  );
}
