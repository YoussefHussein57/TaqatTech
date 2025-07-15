import "./Home.css"
import Button from "../../Components/Custom/Button"
import HeroLogo from "../../Assets/home/Frame 578.png"

export default function Home(){
    return(
        <>
        <div className="container">
           <section className="hero d-flex flex-column align-items-center text-center gap-4 px-3 px-md-5 ">
  <div>
    <h1 className="HeroTxt1">
      Transform Your Business with <span>TaqaTechno</span>
    </h1>
  </div>

  <div >
    <p className="HeroPara">
      As an Official Odoo Partner, we help businesses streamline their operations, boost productivity, and drive growth with customized Odoo implementations.
    </p>
  </div>

  <div className="buttons d-flex flex-column flex-md-row justify-content-center gap-3 col-12 col-md-8">
    <Button path="/" >Get Started</Button>
    <Button path="/" variant="outline" >Learn More</Button>
  </div>

  <div className="heroLogo col-12 d-flex justify-content-center">
    <img src={HeroLogo} alt="Odoo Logo" className="img-fluid" />
  </div>
</section>  

        </div>

        </>
    )
}