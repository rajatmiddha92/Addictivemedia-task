import './main6.css'

const Main6Data=(props)=>{
    return (<>
         <div className='main6-data-container'>
            <h1 className='text-fam fs1 fw3 f-mediumxl main6-data-text'>{props.text}</h1>
            <img  className='main6-image' src={props.src} alt={props.alt}/>
            <h1 className='text-fam fs1 fw3 f-mediuml letter-spacing text-black'>{props.heading}</h1>
            <p className='text-fam fs1 fw4 letter-spacing f-medium pad-main6-para'>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque.</p>
         </div>
    </>)
}
export default Main6Data