import { useReducer, useState } from 'react'

// TODO: Implement this reducer function

const InventoryManager = () => {
    // TODO: Use useReducer

    const [itemName, setItemName] = useState('')

    const addItem = () => {
        if (!itemName.trim()) return
        dispatch({ type: 'ADD_ITEM', payload: itemName })
        setItemName('')
    }

   const inventoryReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_ITEM':
            return [...state, action.payload]
        case 'REMOVE_ITEM':
            return state.filter((item, index) => index !== action.payload)
        default:
            return state
    }
}

// call to useReducer hook
const [ items, dispatch ] = useReducer(inventoryReducer, [])
   
    return (
        <div>
            <h2>Inventory</h2>
            
            <div>
                <input
                    type="text"
                    value={itemName}
                    onChange={(e) => setItemName(e.target.value)}
                    placeholder="Item name"
                />
                <button onClick={addItem}>Add Item</button>
            </div>

            <ul>
                {items.map((item, index) => (
                    <li key={index}>
                        {item}
                        <button onClick={() => dispatch({ type: 'REMOVE_ITEM', payload: index })}>
                            Remove
                        </button>
                    </li>
                ))}
            </ul>

            <p>Total items: {items.length}</p>
        </div>
    )
}

export default InventoryManager