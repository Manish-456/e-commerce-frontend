import getBillboard from "@/actions/getBillboard";
import getProducts from "@/actions/getProducts";
import Billboard from "@/components/Billboard";
import ProductList from "@/components/ProductList";
import Container from "@/components/ui/Container";


export const revalidate = 0;
export default async function Home() {
  const billboard = await getBillboard('968d31b5-fce6-4b0c-9ffd-e0d2c3647a8d')
  const products = await getProducts({
    isFeatured : true
  })
  
  return (
    <Container>
      <main className="space-y-10 pb-10">
 <Billboard data = {billboard}/>
 <div className="flex flex-col gap-y-8 px-4 sm:px-6 lg:px-8">
  <ProductList title="Featured Products" items = {products}/>
 </div>
    </main>

    </Container>
     
  )
}
