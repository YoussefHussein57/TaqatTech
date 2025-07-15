import "./Home.css"
import Button from "../../Components/Custom/Button"
import HeroLogo from "../../Assets/home/Frame 578.png"
import ServiceImg from "../../Assets/home/services.png"
import services from "../../data"
import ServiceCard from "../../Components/Custom/ServiceCard"


export default function Home(){
    const logos = Array.from({length:7}, (_,i)=>
        require(`../../Assets/home/AgenciesLogos/Logos0${i+1}.svg`)
    )
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
<section className="agencies d-flex flex-column align-items-center gap-4" >
    <div className="agenciesHeader d-flex flex-column align-items-center">
        <h2 className="agenciesHeaderTxt">Trusted by <span> 500+ </span>  from different agencies to high growth tech company</h2>

    </div>
    <div className="agenciesLogos d-flex justify-content-center flex-wrap">
        {
            logos.map((logo, index) => (
                <img key={index} src={logo} alt="Agency Logo" className="img-fluid"/>
                ))
                
        }
    </div>


</section>

<section className="license container d-flex flex-column align-items-center gap-3 p-5">
    <div className="services d-flex justify-content-between align-items-center  ">
        <div className="serviceLeft d-flex flex-column align-items-start gap-4">
            <h3 className="serviceLeftName">Services</h3>
            <h4 className="serviceLeftTitle">
                Comprehensive <span>  Odoo </span> Services

            </h4>
            <p className="serviceLeftDesc"> From implementation to support, we provide end-to-end Odoo solutions to help your business thrive </p>

        <div className="row row-cols-1 row-cols-md-2 g-4" >
            {
                services.map((service, index) => (
                    <div key={index} className="col">
                        <ServiceCard {...service} />
                        </div>
                        ))
            }

        </div>
        </div>

        <div>
            <div className="support-badge d-flex align-items-center gap-2 px-3 py-2 shadow-sm w-50">
      <div className="badge-circle text-center">24/7</div>
      <div className="d-flex flex-column">
        <strong className="small">Support & Training</strong>
        <span className="text-muted" style={{ fontSize: "12px" }}>Technical support</span>
      </div>
    </div>
            
            <img src={ServiceImg } alt="service" style={{maxWidth:"451px" , height:"650px"}}/>

          
            
        </div>

    </div>

    
    

</section>

        </div>

        </>
    )
}