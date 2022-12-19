import './main9.css'
const Main9=()=>{
    return (<>
      <section className='main9-cont'>
        <div className='main9-part-1'>
           <h1 className='text-fam fs1 fs2 f-sxlarge text-white main9-head-marg'>Get In Touch</h1>
           <div className='main9-line'></div>
           <form>
              <div>
                  <input className='main9-name main9-inpsize-1 b-rad name-img' placeholder='Full Name' />
              </div>
              <div>
                  <input className='main9-inpsize-1 b-rad email-img' type='email' placeholder='Email'/>
              </div>
              <div>
                  <input className='main9-inpsize-1 b-rad phone-img' type='number' placeholder='Phone'/>
              </div>
              <div>
                  <textarea className='main9-inpsize-1 b-rad msg-img main-9-textarea' placeholder='Message'/>
             </div>
             <div>
                <input className='main9-btn f-medium text-white text-fam fw2 fs1' type="button" value="Submit" />
             </div>
           </form>
        </div>
        <div className='main9-part-2 '>
            <img className='map' src={require('../../images/map.png')} alt='map'/>
        </div>
      </section>
    </>)
}
export default Main9