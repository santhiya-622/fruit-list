import m1 from "./assets/images/arrow_icon.png"
import m2 from "./assets/images/right_img.png"


function App() {
  return (
    <div>
           <div class="fruit-container">
        <form action="http://localhost:5000/fname" class="fruit-left" method="get">
            <div class="fruit-left-title">
                <h2>What’s the Name of Your Fruit?</h2>
                <hr></hr>
            </div>
            <input name="FruitName" placeholder="Enter Fruit Name" class="fruit-input"></input>
            <button class="fruit-left-button" type="submit">Add Your Fruit to the List<img src={m1} alt="m1"></img> </button>
        </form>
        <div class="fruit-right">
            <img src={m2} alt="m2"></img>
        </div>
    </div>
    </div>
  )
}

export default App;
