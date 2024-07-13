const title = "Bonjour les <strong>gens</strong>"
const style = {color: 'red', backgroundColor: 'blue'}
const showTitle = false

function App() {

  const handleClick = (e) => {
    alert("J'ai cliqué sur le titre")
  }

  return <>
    {
      showTitle ? 
      <h1 id="title" className="title" style={style}>
        {title}
      </h1> : 
      <p>demo</p>
    }
    <input type="text"/>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum esse possimus reprehenderit consequatur dolorem cupiditate cum tempora commodi a cumque tempore, fugit voluptatem, minima in saepe quia nihil dignissimos. Distinctio.
    </p>
  </>
}

export default App
