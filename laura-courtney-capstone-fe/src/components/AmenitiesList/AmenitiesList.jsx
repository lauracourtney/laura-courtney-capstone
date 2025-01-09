import "./AmenitiesList.scss";
import bedroom from "../../assets/images/bedroom.jpg";
import shower from "../../assets/images/shower.jpg";
import nook from "../../assets/images/nook.jpg";
import dock from "../../assets/images/dock.jpg";
import hottub from "../../assets/images/hottub.jpg";
import lighting from "../../assets/images/lighting.jpg";
import sauna from "../../assets/images/sauna.jpg";
import fireplace from "../../assets/images/fireplace.jpg";

export default function AmenitiesList() {
  return (
    <section className="amenities">
      <div className="amenities__left">
        <div className="item">
          <img
            src={bedroom}
            alt="a Queen bed in a wooden room with windows and plants"
            className="item__photo"
          />
          <div className="item__details">
            <h5 className="item__title">Beds</h5>
            <p className="item__description">
              {" "}
              Luxurious, eco-friendly linens and mattresses for the ultimate
              restorative sleep.
            </p>
          </div>
        </div>

        <div className="item">
          <img
            src={shower}
            alt="a rainfall showerhead in a room surrounded by rock walls"
            className="item__photo"
          />
          <div className="item__details">
            <h5 className="item__title">Rainfall Shower</h5>
            <p className="item__description">
              {" "}
              Enjoy a spa-like experience in a spacious shower designed to
              rejuvenate.
            </p>
          </div>
        </div>

        <div className="item">
          <img
            src={nook}
            alt="a small meditation room with wood walls, stone features and a window"
            className="item__photo"
          />
          <div className="item__details">
            <h5 className="item__title">Meditation Nook</h5>
            <p className="item__description">
              A serene indoor or outdoor space designed for yoga, mindfulness,
              or journaling.
            </p>
          </div>
        </div>

        <div className="item">
          <img src={lighting} alt="" className="item__photo" />
          <div className="item__details">
            <h5 className="item__title">Natural Lighting & Decor</h5>
            <p className="item__description">
              Large windows or skylights that flood the cabin with natural
              light, connecting the indoors with the outdoors. Minimalist
              interiors with sustainable, natural materials like wood and stone.
            </p>
          </div>
        </div>
      </div>

      <div className="amenitities__right">
        <div className="item">
          <img src={fireplace} alt="" className="item__photo" />
          <div className="item__details">
            <h5 className="item__title">Indoor & Outdoor Fire</h5>
            <p className="item__description">
              Embrace warmth and relaxation with both indoor and outdoor
              fireplaces. Inside, unwind by the glowing hearth, perfect for cozy
              evenings and quiet moments. Outside, gather under the stars around
              the crackling fire, creating memories in the fresh coastal air.
            </p>
          </div>
        </div>

        <div className="item">
          <img src={dock} alt="" className="item__photo" />
          <div className="item__details">
            <h5 className="item__title">Waterfront Access</h5>
            <p className="item__description">
              Step directly onto the shoreline with our exclusive oceanfront
              access. Whether you're savoring your morning coffee, launching a
              kayak, or dipping your toes into the water, the private dock
              offers a front-row seat to the natural beauty of the Nova Scotia
              coastline. It’s your gateway to peaceful reflection, seaside
              adventure, and unforgettable sunsets.
            </p>
          </div>
        </div>

        <div className="item">
          <img src={hottub} alt="" className="item__photo" />
          <div className="item__details">
            <h5 className="item__title">Private Hot Tub</h5>
            <p className="item__description">
              Relax under the stars with a warm soak, perfect for unwinding
              after a day of exploring.
            </p>
          </div>
        </div>

        <div className="item">
          <img src={sauna} alt="" className="item__photo" />
          <div className="item__details">
            <h5 className="item__title">Outdoor Sauna</h5>
            <p className="item__description">
              A wood-fired sauna for a rejuvenating sweat session.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
