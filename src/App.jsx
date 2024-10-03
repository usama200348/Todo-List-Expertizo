import { useState } from 'react'
import './App.css'

function App() {
const [list,setList]=useState([])
const [inputText,setinputText]=useState()
const [editMode,setEditMode]=useState(false)
const [currentIndex,setCurrentIndex]=useState()

const addItem=()=>{
  const copyList=[...list]
  copyList.push(inputText)
  setList(copyList)
  setinputText('')  
}

const updateText=(e)=>{
  const value=e.target.value
  setinputText(value)
}

const deleteText=(index)=>{
  const copyList=[...list]
  copyList.splice(index,1)
  setList(copyList)
}

const editItem=(index)=>{
  const value=list[index]
  setinputText(value)
  setEditMode(true)
  setCurrentIndex(index)

}

const updateItem=()=>{
  setEditMode(false)
  const copyList=[...list]
  copyList[currentIndex]=inputText
  setList(copyList)
  setinputText('') 
}


const DeleteAll=()=>{
  setList([])
}
return (
    <>
      <div className="App">
        <h1 className='heading1'>Todo List</h1>
        <input type="text" value={inputText} placeholder='Enter your Value' onChange={updateText}/>
        {editMode ?
        <button onClick={updateItem}>Update</button>:
        <button onClick={addItem}>Add Item</button>
        }
        <button onClick={DeleteAll}>Delete All</button>

        <ul>
          {list.map((item, index) => (
            <li key={index}>
              {item}
              <button onClick={() => deleteText(index)}>Delete</button>
              <button onClick={() => editItem(index)}>Edit Item</button>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}

export default App
