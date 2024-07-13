const title = "Bonjour les <strong>gens</strong>"
const style = {color: 'red', backgroundColor: 'blue'}

function App() {

  const handleClick = (e) => {
    alert("J'ai cliqué sur le titre")
  }

  return <>
    <h1 onClick={handleClick} id="title" className="title" style={style}>{title}</h1>
    <input type="text"/>
    <p>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum esse possimus reprehenderit consequatur dolorem cupiditate cum tempora commodi a cumque tempore, fugit voluptatem, minima in saepe quia nihil dignissimos. Distinctio.
    </p>
  </>
}

export default App
