import HotelCard from './components/HotelCard'
import './App.css'

function App() {

  return (
      <div className ="container">
        <img src = "src\assets\awning.png"/>
        <h1>Hotels From Different Countries</h1>
        <div className="cards-container">
          <HotelCard img = "src/assets/dubaihotel.jpg" name = "Armani Hotel" location = "Dubai" button ="https://www.fivestaralliance.com/luxury-hotels/dubai/armani-hotel-dubai"/>
          <HotelCard img = "src/assets/switzerlandhotel.jpg" name = "Baur au Lac" location = "Switzerland" button ="https://www.fivestaralliance.com/luxury-hotels/zurich/baur-au-lac"/>
          <HotelCard img = "src/assets/ushotel.jpg" name = "Bellagio" location = "United States" button ="https://www.fivestaralliance.com/luxury-hotels/las-vegas-nv/bellagio"/>
          <HotelCard img = "src/assets/brazilhotel.png" name = "Belmond Copacabana Palace" location = "Brazil" button ="https://www.fivestaralliance.com/luxury-hotels/rio-de-janeiro/copacabana-palace"/>
          <HotelCard img = "src/assets/antiguahotel.jpg" name = "Carlisle Bay" location = "Antigua" button ="https://www.fivestaralliance.com/luxury-hotels/antigua/carlisle-bay"/>
          <HotelCard img = "src/assets/turkeyhotel.jpg" name = "Ciragan Palace Kempinski Istanbul" location = "Turkey" button ="https://www.fivestaralliance.com/luxury-hotels/istanbul/ciragan-palace-kempinski-istanbul"/>
          <HotelCard img = "src/assets/ukhotel.jpg" name = "Claridges" location = "United Kingdom" button ="https://www.fivestaralliance.com/luxury-hotels/london/claridges"/>
          <HotelCard img = "src/assets/italyhotel.jpg" name = "Excelsior Palace Hotel Rapallo" location = "Italy" button ="https://www.fivestaralliance.com/luxury-hotels/portofino/excelsior-palace-hotel-rapallo"/>
          <HotelCard img = "src/assets/canadahotel.jpg" name = "Fairmont Le Chateau Frontenac" location = "Canada" button ="https://www.fivestaralliance.com/luxury-hotels/quebec-pq/fairmont-le-chateau-frontenac"/>
          <HotelCard img = "src/assets/germanyhotel.jpg" name = "Hotel Vier Jahreszeiten Kempinski Munich" location = "Germany" button ="https://www.fivestaralliance.com/luxury-hotels/munich/hotel-vier-jahreszeiten-kempinski-munich"/>
        </div>
      </div>  
  )
}

export default App
