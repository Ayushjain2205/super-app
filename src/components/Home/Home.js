import React from 'react'
import Navbar from '../layout/Navbar'
import Shoptile from '../layout/ShopTile'

function Home({ shops }) {
  return (
    <>
      <Navbar />
      <div className="home-shops">
        {shops.map(({ name, logo, slug, rating, location, category }) => (
          <Shoptile
            name={name}
            logo={logo.handle}
            slug={slug}
            rating={rating}
            location={location}
            category={category}
          />
        ))}
      </div>
    </>
  )
}

export default Home
