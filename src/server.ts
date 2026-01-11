import express from "express"

const app = express()
const PORT = process.env.PORT || 3000

app.get("/xrpc/app.bsky.feed.getFeedSkeleton", async (req, res) => {
  res.json({
    feed: [],
    cursor: null
  })
})

app.listen(PORT, () => {
  console.log(`Feed running on port ${PORT}`)
})
