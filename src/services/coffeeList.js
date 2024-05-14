const ENDPOINT = 'https://raw.githubusercontent.com/devchallenges-io/web-project-ideas/main/front-end-projects/data/simple-coffee-listing-data.json'

export const getCoffeeList = async () => {
    const res = await fetch(ENDPOINT)
    const data = await res.json()
    const { coffeeList } = data
    return coffeeList
}