import Header from "../../components/Header";
import Footer from "../../components/Footer";
import CookieConsent from "../../components/CookieConsent";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Icon } from "leaflet";

/**
 * Die Flut Kommt game page
 *
 *
 * @returns {JSX.Element}
 * @author Jonas Schwind
 * @author Alexander Golüke
 * @version 0.0.1
 */
function Flut() {

  const markers = [
    {
      geocode: [52.023, 8.905],
      popUp: "Hier befindet sich 'Die Flut kommt'"
    },
  ]

  const customIcon = new Icon ({
    iconUrl: "https://uxwing.com/wp-content/themes/uxwing/download/location-travel-map/pin-location-icon.png",
    iconSize: [28,38]
  })

  return (
    <div className="flex flex-col h-screen">
      <header>
        <Header />
      </header>
      <main className="bg-base-100 mb-auto">
        <div className="items-center justify-center">
          <section className="md:w-4/5 m-auto p-6 md:shadow-xl md:rounded-lg">
            <article className="prose">
              <h1 className="text-xl font-medium mb-2">Die Flut Kommt</h1>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
              </p>
              <div className="collapse collapse-arrow">
                <input type="checkbox" checked/>
                <summary className="collapse-title text-xl font-medium">Spielprinzip</summary>
                <div className="collapse-content">
                  <p>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                  </p>
                </div>
              </div>
              <div className="collapse collapse-arrow">
                <input type="checkbox" checked/>
                <summary className="collapse-title text-xl font-medium">Wo finden sie Uns?</summary>
                <div className="collapse-content">
                  <MapContainer center={[52.0267, 8.9019]} zoom={13}>
                    <TileLayer
                      attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                      url="https://tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {
                      markers.map(marker => (
                        <Marker position={marker.geocode} icon={customIcon}>
                          <Popup>{marker.popUp}</Popup>
                        </Marker>
                      ))
                    }
                  </MapContainer>
                </div>
              </div>
            </article>
          </section>
        </div>
        <CookieConsent />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default Flut;

