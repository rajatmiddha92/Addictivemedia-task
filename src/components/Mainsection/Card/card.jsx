import './card.css'
const Card=(props)=>{
    return (
    <>
      <div className="card">
         <div>
           <img className='img-card' src={props.src} alt={props.alt} />
         </div>
         <div className='card-footer'>
            <h3 className='text-fam fs1 fw2 f-mediuml card-text-margin'>{props.text}</h3>
         </div> 
      </div>
    </>
    )
}
export default Card