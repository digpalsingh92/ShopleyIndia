
const timedetails = [
    {
        title: "Days",
        value: "03"
    },
    {
        title: "Hours",
        value: "23"
    },
    {
        title: "Minutes",
        value: "19"
    },
    {
        title: "Seconds",
        value: "55"
    }
]

export default function Time() {
  return (
    <div className="flex flex-row gap-4">
        {timedetails.map((items, index)=> (
            <div key={index} className="flex flex-col items-center gap-2">
                <span className="text-sm font-semibold">{items.title}</span>
                <span className="text-2xl font-semibold">{items.value}</span>
            </div>
        ))}
    </div>
  )
}
