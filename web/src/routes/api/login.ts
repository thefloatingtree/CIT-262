import type { LoginCredentials } from "$lib/models/LoginCredentials"

export async function post({ request }: { request: Request }) {
    const data = await request.json() as LoginCredentials;

    if (data.username === "thefloatingtree@gmail.com" && data.password === "oatmeal") {
        return { status: 200, body: { message: "Login Successful" } }
    } else {
        return { status: 403, body: { message: "Username and password do not match" } }
    }
}