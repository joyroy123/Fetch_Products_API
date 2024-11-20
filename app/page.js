import { Button } from "@mui/material";
import Header from "./components/Header";

export default function Home() {
  return (
    <main>
      <Header />
      <div className="flex md:flex-row flex-col justify-center gap-3 m-2">
        <div className="bg-[url('/1.jpg')] md:h-[500px] h-96 w-full md:w-[1000px] bg-cover bg-center">
          <div className="flex flex-col items-center justify-center mt-4">
            <h1 className="font-bold text-3xl">
              iPad
              <span className="font-semibold text-3xl text-blue-500 italic font-right">
                air
              </span>
            </h1>
            <p className="text-sm">Two sizes. Faster chip. Does it all.</p>
            <div className="flex mt-2">
              <Button className="bg-blue-500 rounded-full m-2 text-white text-[10px]">
                Learn More
              </Button>
              <Button
                className="rounded-full text-[12px] hover:bg-blue-500 hover:text-white m-2"
                variant="outlined"
              >
                Buy
              </Button>
            </div>
            <div className="mt-52 md:mt-80">
              <p className="text-xs font-semibold bg-gradient-to-r from-blue-500 via-purple-500 to-red-500 text-transparent bg-clip-text">
                Hello, Apple Intelligence.
              </p>
            </div>
          </div>
        </div>

        <div className="bg-[url('/2.jpg')] md:h-[500px] md:w-[1000px] h-96 w-full bg-cover bg-center">
          <div className="flex flex-col md:gap-2 items-center justify-center mt-60 md:mt-80">
            <h1 className="text-white md:text-3xl text-2xl font-bold">
              AirPods Pro 2
            </h1>
            <p className="text-white w-1/2 md:w-1/2 md:text-sm text-sm text-center font-semibold">
              Hearing Test, Hearing Aid, and Hearing Protection features in a
              free software.<sup className="text-[8px] font-semibold"> 1</sup>
            </p>
            <div className="flex mt-1">
              <Button className="bg-blue-500 rounded-full m-2 text-white text-[10px]">
                Learn More
              </Button>
              <Button
                className="rounded-full text-[12px] hover:bg-blue-500 hover:text-white m-2"
                variant="outlined"
              >
                Buy
              </Button>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
