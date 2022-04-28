import fetch from 'node-fetch'

export async function login({ userName, password }) {

    const response = await fetch('https://dev.stedi.me/login', {
        method: 'POST',
        body: JSON.stringify({
            userName,
            password
        }),
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'text'
        }
    })

    return await response.text()
}