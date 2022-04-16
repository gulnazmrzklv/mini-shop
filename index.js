console.log(data)

function App() {
  const [product, setProduct] = useState()
  const buttons = data.map((product) =>(
    <button className="product" key = {product.id} >
      <div>{product.title}</div>
      <div>{product.price} c</div>
    </button>
  ))

  return (
    <div className="App">
      <div className="product-list">{buttons} </div>
      <div className="basket">
        <div className="total">
          <span>Итого:</span>
          <span>0 c</span>
        </div>
        <div>
          <button className="product" >
            <div>Название</div>
            <div>Цена c</div>
          </button>
        </div>
      </div>
    </div>
  );
}

const root = document.getElementById("root");
ReactDOM.render(<App />, root);
