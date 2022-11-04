import { useEffect, useState } from "react";
import { SingleProduct } from "../SingleProduct";
import { api } from "../../hooks/context";


const Cards = () => {
  const [loading, setLoading] = useState(true)
  const [products, setProducts] = useState()



  const getProducts = async () => {
    try {
      const response = await api.get('')
      const { status, data } = response

      if (status === 200) {
        setProducts(data)
        setLoading(false)
      }
    } catch (e) {
      console.log('error', e)
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!products && loading) {
      getProducts()
    }
  }, [products, loading])

  if (loading) {
    return <></>
  }



  return (
    <>
      <div className="container">
        <div className="row">
          <div className="row row-cols-1 row-cols-md-3 g-4">
            {products.map((product) => (
              <SingleProduct product={product} />
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Cards;
