import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteItem } from '../../Redux/cartSlice';

export default function DetailsCart(props) {

    const { id, image01, title, price, quantity } = props.item;
    

    const dispatch = useDispatch();

    function deleteFromCart(id) {
    dispatch(deleteItem(id))
 }
 
  return (
    <>

    <tr>
    <td className="text-center cart__img-box">
      <img src={image01} alt="" />
    </td>
    <td className="text-center">{title}</td>
    <td className="text-center">${price}</td>
    <td className="text-center">{quantity}px</td>
    <td className="text-center cart__item-del">
      <i class="ri-delete-bin-line" onClick={() => deleteFromCart(id)} ></i>
    </td>
  </tr>
      
    </>
  )
}
