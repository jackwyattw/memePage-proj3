import {useState} from "react"

function CreateMeme(props){
  const [input, setInput] = useState("")

  function handleChange(e) {
      console.log(e.target.value)
      setInput(e.target.value)
  }

  function handleSubmit(e){
      e.preventDefault()
      console.log("submit")
      props.addToDo(input)
  }

  return(
  <>
      <h2>Create Meme</h2>
      <form onSubmit={handleSubmit}>
          <input type="text" required name="todo" 
          value={input} onChange={handleChange}/>
          <input type="submit" value="Save" />
      </form>
  </>
  )
}
export default CreateMeme;