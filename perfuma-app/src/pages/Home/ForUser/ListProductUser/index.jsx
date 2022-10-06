import React from 'react'
import ProductItem from '../../../../components/ProductItem';

function ListProductUser(props) {
    const { listproduct } = props
    
  return (
        <>
        {listproduct.map((product) => (
            <div className="col-lg-4 col-md-4 col-sm-6 px-0" key={product.id}>
            <ProductItem 
            product={product}
            />
            </div>
        ))}
        </>
  )
}

export default ListProductUser