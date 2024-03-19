import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


export default function Home() {
  return (
    <div className="flex flex-col gap-2 text-center justify-center w-8/12 absolute left-[17%] top-[15vh] bg-coffeeDarkGray rounded-lg p-5 pt-20">
      <header className="flex flex-col gap-2 text-center">
        <h1 className="text-coffeeWhite text-2xl">Our Collection</h1>
        <p className="text-coffeeGray text-sm">
          Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, 
          expertly roasted in small batches and shipped fresh weekly.
        </p>
      </header>
      <Tabs defaultValue="account" className="">
          <TabsList>
            <TabsTrigger value="account">All Products</TabsTrigger>
            <TabsTrigger value="password">Available Now</TabsTrigger>
          </TabsList>
          <TabsContent value="account">Make changes to your account here.</TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>
    </div>
  );
}
