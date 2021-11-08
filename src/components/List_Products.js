import React,{useState} from 'react'

const List_Products =  () => {
    const initialState = [
        {id : 1,name : "pc portable"},
        {id : 2,name : "pc Bureaux"}
    ]
        
     const [productstate, setproductstate] = useState(initialState)
    
    return (
        <div>
            <ul>
                {productstate.map(product => (
                    <li key={product.id} > {product.name} </li>
                ))}
            </ul>
        </div>
    )
}
export default List_Products;