import './main5.css'
const Main5=()=>{
    return (
    <> 
       <section className="main5-container">
           <div>
                <img className='main5-text-img' src={require('../../images/Industry We Serve.png')} alt='main5-text'/>
           </div>
           <div>
                <img className='main5-text-img pad-main5-text2' src={require('../../images/Industry We Serve.png')} alt='main5-text2'/>
           </div>
           <div>
                <img className='main5-text-img pad-main5-text3' src={require('../../images/Industry We Serve black.png')} alt='main5-text3'/>
           </div>
           <div className='text-red main5-plus f-xlarge'>+</div>
           <h3 className='fs1 fs1 fw4 f-mediuml text-fam text-grey'>Our Industry Expertise are benchmark for all</h3>
        </section>
    </>
    )
}
export default Main5