import fetch from 'node-fetch'

it('Should respond pong', async () => {
    const response = await fetch("http://34.82.151.184/api/ping").then(res => res.json())
    console.log(response)
})