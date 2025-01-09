import "./About.scss";

export default function About() {
  return (
    <section className="about">
      <h2 className="about__title">About Us</h2>
      <h3 className="about__content">
        Welcome to Voyager’s Haven, a coastal sanctuary for renewal and
        self-discovery. Nestled on Nova Scotia’s peaceful shores, our cabin
        invites you to reconnect with nature and yourself.
      </h3>
      <h3 className="about__content">
        {" "}
        Wander scenic trails, glide across calm waters, or soak in the private
        hot tub beneath a starlit sky. Unwind by the indoor or outdoor
        fireplace, letting the warmth soothe your spirit. Explore nearby seaside
        towns, where unique shops, local crafts, and inviting cafes await,
        enriching your experience.
      </h3>
      <h3 className="about__content">
        Whether you’re drawn to adventure or quiet moments, Voyager’s Haven is
        your escape for reflection, connection, and serenity.
      </h3>
    </section>
  );
}
