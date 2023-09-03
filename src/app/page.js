import Banner from "@/Component/Bannar/Banner";
import VisitingCard from "@/Component/VisitingCard/VisitingCard";


export default function Home() {
  return (
    <main >

      <div>

        <Banner></Banner>
        <div className=" my-24 ">
          <VisitingCard></VisitingCard>
        </div>

      </div>

    </main>
  )
}
