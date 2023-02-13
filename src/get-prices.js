import fetch from "node-fetch"

const main = async () => {
  const prices = await fetch(
    "https://indexer.ref.finance/list-token-price",
  ).then((res) => res.json())

  console.info(prices)
}

main()
