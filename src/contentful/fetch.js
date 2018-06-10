import { spaceId, accessToken } from "./config";
import { createClient } from "contentful";

export default async function getData() {
  let data;

  const client = await createClient({
    space: spaceId,
    accessToken: accessToken
  });

  await client
    .getEntries()
    .then(entries => {
      data = entries;
    })
    .catch(err => console.log(err));

  return data;
}
