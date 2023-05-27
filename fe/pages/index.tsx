import Freelancers from "@/components/freelancers";
import PopularCat from "@/components/popularCat";
import CommendPart from "@/components/commendPart";
import Hero from "@/components/hero section/hero";
import Offers from "@/components/offers";

import { BASE_URL } from "@/variables";

export default function Home({ data, dataServices }: any) {
  return (
    <>
      <Hero />
      <PopularCat />
      <CommendPart />
      <Freelancers data={data.freelancer} />
      <Offers data={dataServices.service} />
    </>
  );
}

export async function getServerSideProps() {
  const data = await fetch(`${BASE_URL}/freelancer`).then((res) => res.json());
  const dataServices = await fetch(`${BASE_URL}/services`).then((res) =>
    res.json()
  );
  return {
    props: {
      data,
      dataServices,
    },
  };
}
