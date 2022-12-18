
import './main4.css'

const Main4=()=>{
    return (
    <>
       <section className='main4-container'>
          <div className='text-main4'>
               <h3 className='text-fam text-red fs1 f-medium fw2 margin-main4-text'>Customer First Approach</h3>
               <h1 className='text-fam text-black fs1 f-sxlarge fw2'>First choice of procurement <br/>partners across global</h1>
          </div>
          <div className='img-main4'>
               <img className='wing-2' src={require('../../images/pngwing 2.png')} alt='wing2'/>
          </div>   
          <div>
               <img className='wing-3' src={require('../../images/pngwing 3.png')} alt='wing3'/>
          </div>
       </section>
    </>
    )
}
export default Main4