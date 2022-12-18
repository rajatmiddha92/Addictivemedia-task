import './main1.css'


const Main1=()=>{
    return (
    <>
        <section className="main-1">
            <h1 className="text-fam fw3 text-white f-xxlarge img-text-1">Best Machine and <br/> Casting Solution</h1>
            <div className="red-box">
                <div className="text-fam text-white fw1 fs1 f-large pad-box-text">01 -----</div>
            </div>
           <div className="text-fam text-white f-large fw2 fs1 out">Mining/Mineral Processing</div>
           <img className='text-img-main1' src={require('../../images/Rubber Industry.png')}  alt='some-text'/>
        </section>
    </>)
}
export default Main1