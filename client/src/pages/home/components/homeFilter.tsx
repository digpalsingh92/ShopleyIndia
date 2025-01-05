
    const listItems = [
        { id: 1, name: 'women Fashion' },
        { id: 2, name: `Men's Fashion` },
        { id: 3, name: 'Electrnics' },
        { id: 4, name: 'Home & lifestyle' },
        { id: 5, name: 'Home & lifestyle' },
        { id: 6, name: 'Home & lifestyle' },
        { id: 7, name: 'Home & lifestyle' },
    ]
export default function HomeFilter() {
  return (
    <div className="mt-7">
        <ul className="flex flex-col gap-4">
        {listItems.map((items)=> (
            <li key={items.id}>{items.name}</li>
        ))}
        </ul>
    </div>
  )
}
