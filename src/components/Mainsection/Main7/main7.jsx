import './main7.css'

const Main7=()=>{
    return (<>
      <section className='main7-container'>
         <h2 className='text-fam fs1 fw2 f-medium text-white main7-mar-y-quote'>Customer Firsr Approach</h2>
         <h1 className='text-fam fs1 fw2 f-xlarge text-white main7-mar-y-head'>World Class <br/> Machine & Infra</h1>
         <section className='p-container'>
              <p className='text-fam fs1 fw4 f-mediuml text-white main7-para'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusa ntium doloremque laudanti um totam rem aperiam, eaque ipsa</p>
              <img className='eclipse' src={require('../../images/Eclipse.png')} alt='Eclipse'/>
         </section>
         <section className='main7-last-container'>
            <div>
                <div>
                    <img src={require('../../images/main7-1.png')} alt='building'/>
                </div>
                <div className='text-fam fs1 fw2 f-large text-white'>
                    10000 <span className='fw4'>ft<sup>2</sup></span>
                </div>
                <div  className='text-fam fs1 fw2 f-mediumxl text-white'>
                    Factory Area
                </div>
            </div>
            <div>
                <div>
                    <img src={require('../../images/main7-2.png')} alt='factory'/>
                </div>
                <div className='text-fam fs1 fw2 f-large text-white'>
                    30 <span className='fw4'>+</span>
                </div>
                <div className='text-fam fs1 fw2 f-mediumxl text-white'>
                    Factory We Have
                </div>
            </div>
            <div>
                <div>
                    <img src={require('../../images/main7-3.png')} alt='workers' />
                </div>
                <div className='text-fam fs1 fw2 f-large text-white'>
                    2000 <span className='fw4'>+</span>
                </div>
                <div  className='text-fam fs1 fw2 f-mediumxl text-white'>
                    Workers We Have
                </div>
            </div>
         </section>
      </section>
    </>)
}
export default Main7