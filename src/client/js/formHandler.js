import axios from 'axios'
import { checkForName } from './nameChecker'

async function handleSubmit(event) {
    event.preventDefault()
    // check what text was put into the form field
    let formText = document.getElementById('name').value
    checkForName(formText)

    try {
        const res = await axios.post('http://localhost:8081/api/check', { url: formText })
        console.log(res)
        document.getElementById('results').innerHTML = res.message
        alert(res.message)
    } catch (e) {
        console.log(e)
    }
}

export { handleSubmit }
