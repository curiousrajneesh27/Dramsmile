import React, { useEffect, useState } from 'react'
import client from '../sanity/sanityClient'  // correct path likhna

const Offers = () => {
  const [offers, setOffers] = useState([])

  useEffect(() => {
    const fetchOffers = async () => {
      const data = await client.fetch(`*[_type == "offer"]{
        _id,
        title,
        description,
        validTill,
        "imageUrl": image.asset->url
      }`)
      setOffers(data)
    }

    fetchOffers()
  }, [])

  return (
    <div>
      <h1>Our Latest Offers</h1>
      {offers.map((offer) => (
        <div key={offer._id}>
          <h2>{offer.title}</h2>
          <p>{offer.description}</p>
          <p>Valid Till: {new Date(offer.validTill).toLocaleDateString()}</p>
          {offer.imageUrl && (
            <img src={offer.imageUrl} alt={offer.title} style={{ width: '300px' }} />
          )}
        </div>
      ))}
    </div>
  )
}

export default Offers;