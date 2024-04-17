export default function HeroSection() {
  const myFunction = ()=>{
    console.log(window.open(url, "_blank", "noreferrer"))
    window.open(url, "_blank", "noreferrer")
  }
  let url = "https://drive.google.com/file/d/1hNdwmuOXFK8BGciKs92lr_XYmcWaM6lw/view?usp=drive_link"
  return (
    <section id="heroSection" className="hero--section">
      <div className="hero--section--content--box">
        <div className="hero--section--content">
          <p className="section--title"><h3>Hey, I'm Aditya Potode</h3></p>
          <h1 className="hero--section--title">
            <span className="hero--section-title--color">Full Stack</span>{" "}
            <br />
            Developer
          </h1>
          <p className="hero--section-description">
          A full-stack developer is a developer or engineer who can build both the front end and the back end of a website.
          The front end is the visual look and feel of an application, while the back end is the business logic and infrastructure.
          </p>
        </div>
        <button onClick={myFunction} className="btn btn-primary">Curriculum Vitae</button>
      </div>
      <div className="hero--section--img">
        <img src="./img/hero_img.png" alt="Hero Section" />
      </div>
    </section>
  );
};