import axios from "axios"

const PING_URL = "http://34.82.151.184/api/ping"

async function checkServer() {
    try {
        await axios.get(PING_URL)
        return true
    } catch (e) {
        return false
    }
}

async function run() {
    let serverIsReady = await checkServer()
    if (!serverIsReady) {
        console.log("Server is not ready yet, waiting...")
        setTimeout(() => {
            run()
        }, 500)
    }
    console.log("Server is ready!")
}

run()