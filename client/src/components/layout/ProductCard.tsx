import { Product } from "@/types";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "../ui/card";


interface ProductCardProps {

    products: Product[];
  
  }
export default function ProductCard({ products }: ProductCardProps): JSX.Element {
  return (
    <div className="flex gap-4">
        {products.map(({ id, name, price, imageUrl, discount, rating }) => (
      <Card key={id}>
        <CardHeader>
          <CardTitle>{name}</CardTitle>
        </CardHeader>
        <CardContent>
            <img className="w-[15rem] h-[10rem]" src={imageUrl}/>
        </CardContent>
        <CardFooter>
          <p>Card Footer</p>
        </CardFooter>
      </Card>
))}
    </div>
  );
}
