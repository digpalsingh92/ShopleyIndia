import { Slider } from "./components/slider";


export default function HomePage() {
  return (
    <div>
      <main className="container">
        <section className="flex w-full h-full gap-4">
          <div className="container w-[50%] bg-red-500">
            <div></div>
          </div>
      <Slider/>
      </section>
      </main>
      </div>
  )
}
