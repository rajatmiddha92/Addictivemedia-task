import './footer.css'

const Footer=()=>{
    return (<>
        <section className='footer-cont text-fam text-white fs1'>
           <div>
              <ul className='fw2 f-vslarge footer-list-1'>
                 <li>About Us</li>
                 <li>Infrastructure</li>
                 <li>Contact US</li>
              </ul>
           </div>
           <div className='footer-list2-cont'>
              <h2 className='f-vslarge fw4'>Industry</h2>
              <ul className='fw4 footer-list-2 f-small'>
                  <li>Cement</li>
                  <li>Mining Processing</li>
                  <li>Rubber</li>
              </ul>
           </div>
           <div className='footer-list3-cont'>
               <ul className='f-small footer-list-3'>
                <li>Sugar</li>
                <li>Fertilizer</li>
                <li>Power</li>
               </ul>
           </div>
           <div className='footer-last-cont'>
               <div>
                    <i class="fa-brands fa-twitter"></i>
                    <i class="fa-brands fa-instagram"></i>
                    <i class="fa-brands fa-linkedin-in"></i>
               </div>
               <div>2022 © Rp alloys & steel forging</div>
               <div>Design Credits : Art Attackk</div>
           </div>
        </section>
    </>)
}
export default Footer;