import fetch from 'node-fetch'
import chai from 'chai'
import axios from 'axios'

chai.should()

it('Should login', async () => {
    const response = await axios.post("http://34.82.151.184/api/login", { username: "thefloatingtree@gmail.com", password: "oatmeal" })
    response.status.should.equal(200)
})