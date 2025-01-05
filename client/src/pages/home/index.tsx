import HomeFilter from "./components/homeFilter";
import { Slider } from "./components/slider";
import TodaysDeal from "./components/TodaysDeal";

export default function HomePage() {
  return (
    <main className="container mx-auto flex flex-col pb-8">
      <section className="flex w-full items-start justify-center top-8 h-full gap-4">
        <div className="container flex p-2 justify-evenly mx-auto w-[50%]">
          <HomeFilter />
        </div>
        <div className="border-l-2 border-gray-300 mr-[10rem] h-[24rem]"></div>
        <Slider />
      </section>
      <section>
        <TodaysDeal />
      </section>
    </main>
  );
}
