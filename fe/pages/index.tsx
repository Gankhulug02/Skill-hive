import Freelancers from "@/components/freelancers";
import PopularCat from "@/components/popularCat";
import Offers from "@/components/offers";

import { BASE_URL } from "@/variables";
import { Box } from "@mui/material";

export default function Home({ data, dataServices }: any) {
  return (
    <Box sx={{ backgroundColor: "white" }}>
      <PopularCat />
      <Freelancers data={data.freelancer} />
      <Offers data={dataServices.service} />
    </Box>
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
