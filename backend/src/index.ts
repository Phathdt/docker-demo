import app from './app'

const port = process.env.PORT || 5000
app.listen(port, () => {
  /* eslint-disable no-console */
  console.log(`Listening123: http://localhost:${port}`)
  /* eslint-enable no-console */
})
