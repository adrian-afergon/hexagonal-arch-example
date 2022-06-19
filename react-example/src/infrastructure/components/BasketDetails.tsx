import React from 'react'
import { Basket } from '../../domain/models/Basket'

interface BasketDetailsProps {
  basket: Basket|null
}

export const BasketDetails: React.FC<BasketDetailsProps> = ({ basket }) => {
  return <>{ basket && <p>Items on basket: {basket.items.length}</p>}</>
}
