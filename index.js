async function main() {
    const response = await fetch('https://api.kanye.rest')
    const body = await response.json()
    
    document.querySelector('#randomQuote').innerHTML = body.quote
}

main()
