import Footer from "@/components/Footer";
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Post from "@/components/Post";

const NewPost = () => {
  return (
    <main className="flex min-h-screen flex-col items-center py-24">
      <Header />
      <Navbar />
      <Post />
      <Footer />
    </main>
  );
};

export default NewPost;
