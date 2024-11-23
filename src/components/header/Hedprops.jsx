import '../Styles/Header.css'

function Hedprops({image, text, titulo}) {
    return(
        <div>
            <div className='alouuu'>
                <div>
                    <img src={image} alt="" />
                </div>
                <h1>{titulo}</h1>
                <p>{text}</p>
            </div>
        </div>
    )
}

export default Hedprops