import Image from "next/image";
import Navbar from "./components/Navbar";
import { getUser } from "./api/user";
export default async function Home() {
  const data = await getUser();

  return (
    <main className="flex min-h-screen flex-col items-center  bg-gray-100">
      <Navbar />
      <h1 className="text-black">Hello Lucas</h1>
    </main>
  );
}
// export async function getStaticProps() {
//   // Call an external API endpoint to get posts.
//   // You can use any data fetching library
//   const res = await getUser();
//   // const posts = await res.json();
//   console.log(res);

//   // By returning { props: { posts } }, the Blog component
//   // will receive `posts` as a prop at build time
//   return {
//     props: {
//       // posts,
//     },
//   };
// }
