import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Home from './components/pages/Home'
import Catalog from "./components/pages/Catalog";
import Cart from "./components/pages/Cart";
import Footer from './components/Footer/Footer';
import ItemDetails from "./components/pages/ItemDetails/ItemDetails"


function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/catalog'>
            <Catalog list={items}/>
          </Route>  
          <Route path='/item/:id'>
            <ItemDetails list={items}/>
          </Route>
          <Route path='/cart' exact component={Cart} />
        </Switch>
        <Footer />
      </Router>
    </>
  );
}

export default App;

const items = [
  {
    id: 1,
    type:"Rent Combine",
    condition: "New",
    header: 'Agriculture Rice Combine Harvester',
    description: "Whatever the conditions or the operator, the S700 Series Combines automatically give you consistent grain quality. This gives you the confidence that your combine is compensating for changing conditions, even when you can’t see them.",
    price: 1949.99,
    alt: "combine best",
    img: 'https://static.producer.com/wp-content/uploads/2020/08/20141156/49_4-col_Fendt-Ideal-combine-1.jpg'
  },
  {
    id: 2,
    type:"Rent Combine",
    condition: "Used",
    description: "Whatever the conditions or the operator, the S700 Series Combines automatically give you consistent grain quality. This gives you the confidence that your combine is compensating for changing conditions, even when you can’t see them.",
    header: 'Stalk Sugarcane Harvester Sugar Cane',
    price: 1329.99,
    alt: "combine best",
    img: 'https://www.deere.com/assets/images/region-4/products/combines/t670/t670_r2c001198_tech_rrd_ml_2_large_6c51fa68662b21435dd2137ac5878bf7a677911d.jpg'
  },
  {
    id: 3,
    type:"Combine Sale",
    condition: "Used",
    description: "Whatever the conditions or the operator, the S700 Series Combines automatically give you consistent grain quality. This gives you the confidence that your combine is compensating for changing conditions, even when you can’t see them.",
    header: 'Zoomlion AC60b Combine Sugarcane Harvester',
    price: 1429.99,
    alt: "combine best",
    img: 'https://www.zlcombineharvester.com/uploads/%E5%B1%A5%E5%B8%A6%E6%9C%BA%E5%99%A8-41.jpg'
  },
  {
    id: 4,
    type:"Combine Sale",
    condition: "New",
    description: "Whatever the conditions or the operator, the S700 Series Combines automatically give you consistent grain quality. This gives you the confidence that your combine is compensating for changing conditions, even when you can’t see them.",
    header: 'Rice Wheat Combine Harvester',
    price: 1339.99,
    alt: "combine best",
    img: 'https://talltires.com/images/2019/01/16/combines.jpg'
  },
  {
    id: 5,
    type:"Wheels",
    condition: "Used",
    description: "Whatever the conditions or the operator, the S700 Series Combines automatically give you consistent grain quality. This gives you the confidence that your combine is compensating for changing conditions, even when you can’t see them.",
    header: 'Buy Wheels',
    price: 120.99,
    alt: "spare parts",
    img: 'https://media.unverferth.com/unverferth/wheels/rear-4wd-t-rail-wheel-snap-on-clamp.jpg'
  },
  {
    id: 6,
    type:"Combine Repair",
    condition: "New",
    description: "Whatever the conditions or the operator, the S700 Series Combines automatically give you consistent grain quality. This gives you the confidence that your combine is compensating for changing conditions, even when you can’t see them.",
    header: 'Change Wheels',
    price: 60.49,
    alt: "spare parts",
    img: 'https://www.agwheelexpress.com/webres/catalog/xl/12-3008210-JY.jpg'
  },
  {
    id: 7,
    type:"Combine Sale",
    condition: "New",
    description: "Whatever the conditions or the operator, the S700 Series Combines automatically give you consistent grain quality. This gives you the confidence that your combine is compensating for changing conditions, even when you can’t see them.",
    header: 'Yanmar Aw85g Rice and Wheat',
    price: 4323.99,
    alt: "combine best",
    img: 'https://stmaaprodfwsite.blob.core.windows.net/assets/sites/1/2017/07/storm-clouds-over-a-combine-in-wet-weather-c-tim-scrivener.jpg'
  },
  {
    id: 8,
    type:"Spare parts",
    condition: "New",
    description: "Whatever the conditions or the operator, the S700 Series Combines automatically give you consistent grain quality. This gives you the confidence that your combine is compensating for changing conditions, even when you can’t see them.",
    header: 'Spare part',
    price: 1223,
    alt: "spare parts",
    img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS5cV6c-DSkzqcVAz4Kr98xNJ2_H5vxj8LuVQ&usqp=CAU'
  }
]
