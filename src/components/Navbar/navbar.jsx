import './navbar.css'
const Navbar=()=>{
    return (
        <>
          <section class="navbar">
              <div>
                 <div class="nav-line-1 bg-black"></div>
                 <div class="nav-line-2 bg-black"></div>
              </div>
              <div class="text-fam fw1 fs1 f-medium"><h1>RP ALL<img src={require('../images/Vector.jpg')} alt="vector"/>YS</h1></div>
              <div class="text-fam fw2 fs1 f-small underline">Get in Touch <i class="fa-solid fa-arrow-right"></i></div>
          </section>
        </>
    )
}
export default Navbar