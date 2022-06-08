import React, {useState} from 'react';
import {Typography, Button, Form, Input} from 'antd';


const{TextArea} = Input;

const Continent = [
  {key:1, value:"마포구"},
  {key:2, value:"용산구"},
  {key:3, value:"중구"},
  {key:4, value:"송파구"},
  {key:5, value:"강남구"},

]

function UploadProductPage(){

  const [Title, setTitle] = useState("")
  const [Description, setDescription] = useState("")
  const [Price, setPrice]=useState(0)
  const [Continent, setContinent] = useState(1)
  const [Images, setImages] = useState([])

  const titleChangeHandler = (event) => {
    setTitle(event.currentTarget.value)
  }

  const descriptionChangeHandler = (event) => {
    setDescription(event.currentTarget.value)
  }

  const priceChangeHandler = (event) => {
    setPrice(event.currentTarget.value)
  }
  const continentChangeHandler = (event) => {
    setContinent(event.currentTarget.value)
  }
  return(
    <div style={{maxWidth:'700px', margin: '2rem auto'}}>
      <div style={{ textAlign: 'center', marginBottom: '2rem'}}>
        <h2>숙소 상품 업로드</h2> 

      </div>

      <Form>
        {/* Drop Aone */}
        <br />
        <br />
        <table>이름</table>
        <Input onChange={titleChangeHandler} value={Title} />
        <br />
        <br />
        <label>설명</label>
        <TextArea onChange={descriptionChangeHandler} value={Description} />
        <br />
        <br />
        <label>가격 ($)</label>
        <Input type= "number" onChange={priceChangeHandler} value={Price} />
        <br />
        <br />
        <select onChange={continentChangeHandler} value={Continent}>
          {/*{Continent.products.map(item =>(
              <option key ={item.key} value={item.key}> {item.value}</option>
            ))}
          */}
          <option>마포구</option>
          <option>명동</option>
          
          

        </select>
        <br />
        <br />
        <Button>
          확인
        </Button>
      </Form>
      
    </div>
  )
}

export default UploadProductPage