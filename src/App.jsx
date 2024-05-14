import './App.css'
import { CoffeeList } from './components/CoffeeList'
import { Footer } from './components/Footer'
import { useFilter } from './hooks/useFilter'
import { DataList } from './mocks/with-results.json'
import { Filter } from './components/Filter'

function App() {
  const data = DataList
  const hasData = data?.length > 0

  const { filter, filterProducts, setFilter } = useFilter()
  const filteredList = filterProducts(data)

  console.log(filter)

  return (
    <main>
      <img 
        src="/src/assets/bg-cafe.jpg" alt="img" 
      />
      <section className="wrap">
        {/* Coffee List :) */}
        <div className='container' >
          <h1>Our Collection</h1>
          <p>
            Introducing our Coffee Collection, a selection of unique coffees from different roast types and origins, expertly roasted in small batches and shipped fresh weekly.
          </p>
          <Filter setFilter={setFilter} />
          {
            hasData
              ? <CoffeeList data={filteredList} />
              : <h2>No Data Found</h2>
          }
        </div>
      </section>
      
      <Footer />
    </main>
  )
}

export default App
