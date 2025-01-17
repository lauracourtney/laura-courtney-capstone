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
            <h4 className="item__title">Beds</h4>
            <p className="item__description">
              {" "}
              Experience unparalleled comfort on our two queen-sized beds,
              featuring eco-friendly linens and premium mattresses designed for
              the perfect balance of support and luxury. Wake up refreshed and
              rejuvenated in serene coastal tranquility.
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
            <h4 className="item__title">Rainfall Shower</h4>
            <p className="item__description">
              {" "}
              Immerse yourself in a spa-like experience with our luxurious
              rainfall shower, set in a stunning stone room for a natural,
              serene ambiance. Enjoy the warmth of heated floors as you unwind,
              with the added eco-friendly touch of a recycled water filtration
              system, ensuring both indulgence and sustainability.
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
            <h4 className="item__title">Meditation Nook</h4>
            <p className="item__description">
              Discover tranquility in our indoor meditation nook, featuring
              natural stone accents and lush plant elements. Perfectly designed
              for yoga, mindfulness, or journaling, this serene space brings the
              calming essence of nature indoors, creating a sanctuary for
              relaxation and reflection.
            </p>
          </div>
        </div>

        <div className="item">
          <img
            src={lighting}
            alt="a wooden room with a stain glass window featuring florals"
            className="item__photo"
          />
          <div className="item__details">
            <h4 className="item__title">Natural Lighting & Decor</h4>
            <p className="item__description">
              Large windows or skylights that flood the cabin with natural
              light, connecting the indoors with the outdoors. Minimalist
              interiors with sustainable, natural materials like wood and stone.
            </p>
          </div>
        </div>
      </div>

      <div className="amenities__right">
        <div className="item">
          <img
            src={fireplace}
            alt="a room featuring a stone fireplace"
            className="item__photo"
          />
          <div className="item__details">
            <h4 className="item__title">Indoor & Outdoor Fire</h4>
            <p className="item__description">
              Embrace warmth and relaxation with both indoor and outdoor
              fireplaces. Inside, unwind by the glowing hearth, perfect for cozy
              evenings and quiet moments. Outside, gather under the stars around
              the crackling fire, creating memories in the fresh coastal air.
            </p>
          </div>
        </div>

        <div className="item">
          <img
            src={dock}
            alt="a dock stretching out into the ocean"
            className="item__photo"
          />
          <div className="item__details">
            <h4 className="item__title">Waterfront Access</h4>
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
          <img
            src={hottub}
            alt="a wooden hot tub on a deck"
            className="item__photo"
          />
          <div className="item__details">
            <h4 className="item__title">Private Hot Tub</h4>
            <p className="item__description">
              Unwind in your private hot tub, set in a serene space designed for
              ultimate relaxation. Enjoy a warm, soothing soak surrounded by
              nature-inspired ambiance, perfect for stargazing and rejuvenating
              after a day of adventure.
            </p>
          </div>
        </div>

        <div className="item">
          <img
            src={sauna}
            alt="a round wooden two-person sauna"
            className="item__photo"
          />
          <div className="item__details">
            <h4 className="item__title">Outdoor Sauna</h4>
            <p className="item__description">
              Relax and detox in our intimate wood-fired outdoor sauna, designed
              for two. Surrounded by nature, this cozy retreat provides the
              perfect setting for a soothing, rejuvenating sweat session.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
