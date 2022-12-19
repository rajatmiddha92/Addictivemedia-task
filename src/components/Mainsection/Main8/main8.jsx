import './main8.css'
const Main8=()=>{
    return (<>
       <section className='main8-cont'>
          <h2 className='text-fam fs1 fw2 f-mediuml letter-spacing text-red main8-head-marg'>The Industry’s Best Are On The Board</h2>
          <div className='main8-flex'>
              <img className='brand' src={require('../../images/Denso.png')} alt='Denso'/>
              <img className='brand' src={require('../../images/Oshima.png')} alt='Oshima'/>
              <img className='brand' src={require('../../images/Komatsu.png')} alt='Komatsu'/>
              <img className='brand' src={require('../../images/Toyota.png')} alt='Toyota'/>
              <img className='brand' src={require('../../images/Fujitsu.png')} alt='Fujitsu'/>
          </div>
          <div className='main8-flex'>
              <img className='brand' src={require('../../images/Toshiba.png')} alt='Toshiba'/>
              <img className='brand' src={require('../../images/Daikin.png')} alt='Daikin'/>
              <img className='brand' src={require('../../images/Boeing.png')} alt='Boeing'/>
              <img className='brand' src={require('../../images/Kawasaki.png')} alt='Kawasaki'/>
              <img className='brand' src={require('../../images/IHI.jpg')} alt='IHI'/>
          </div>
       </section>

    </>)
}
export default Main8;