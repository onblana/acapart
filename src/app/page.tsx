// import Image from "next/image";
import Navbar from "@/components/Navbar";
import Header from "@/components/Header";
import PostList from "@/components/PostList";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <main className="flex min-h-screen flex-col items-center py-24">
      <Header />
      <Navbar />
      <PostList />
      <Footer />
    </main>
  );
};

export default Home;
