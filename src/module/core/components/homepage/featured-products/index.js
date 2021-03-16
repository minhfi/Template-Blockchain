import React from 'react'
import { Link } from 'react-router-dom'
import { FEATURED_PROJECTS } from '@/constants/projects'
import Card from '@/components/card'

const FeaturedProducts = () => {
  FEATURED_PROJECTS.length = 5

  return (
    <div className="products-container my-container">
      <div className="products-container__products-grid">
        {FEATURED_PROJECTS.map((product) => {
          return (
            <div
              key={product.key}
              className="products-container__products-grid__item"
            >
              <Card item={product} />
            </div>
          )
        })}
      </div>
      <div className="products-container__more">
        <Link to="/work/product-category">VIEW ALL PROJECTS</Link>
      </div>
    </div>
  )
}

export default FeaturedProducts
