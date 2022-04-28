import { login } from "../utils/login.js"

it('Should get a login token', async () => {
    const token = await login({ userName: "thefloatingtree@gmail.com", password: "696969Aa@7" })
})
