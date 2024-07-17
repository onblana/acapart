import type { NextPage } from "next";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import PostList from "@/components/PostList";
import Footer from "@/components/Footer";
// import Image from "next/image";

const Home: NextPage = async () => {
  return (
    <main className="flex min-h-screen flex-col items-center py-24">
      <Header />
      <Navbar />
      <PostList title="전체 보기" />
      <Footer />
    </main>
  );
};

export default Home;
