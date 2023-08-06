import Head from "next/head";
import Home from "./home";
import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";

export default function Index() {
  return (
    <div className="">
      <Head />
      <Header />
      <Home />
    </div>
  );
}
