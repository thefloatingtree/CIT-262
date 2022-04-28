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

    const responseText = await response.text()

    if (response.status !== 200) throw new Error(responseText)

    return responseText
}