import { Billboard } from "@/types";

const URL = `${process.env.NEXT_PUBLIC_API_URL}/billboards`;

export default async function getBillboard(id: string): Promise<Billboard> {
  const res = await fetch(`${URL}/${id}`);

  // delay response
  // await new Promise((resolve) => setTimeout(resolve, 3000));

  return res.json();
}
