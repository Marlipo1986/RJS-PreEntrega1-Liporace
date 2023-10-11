import './Item.css'

const Item = ({nombre,imagen,precio,categoria,stock}) => {
    return (
        <article className='CardItem'>
            <header className='Header2'>
                <h5 className='ItemHeader'>
                    {nombre}
                </h5>
            </header>
            <picture>
                <img src={imagen} alt={nombre} className='ItemImg'/>
            </picture>
            <section>
                <p className='Info'>
                    Precio: ${precio}
                </p>
                <p className='Info'>
                    Stock:{stock}
                </p>
                <p className='Info'>
                    {categoria}
                </p>
            </section>
            <footer className='ItemFooter'>
                <button className='Option btn btn-secondary'>Ver detalle</button>
            </footer>
        </article>
      )

}


  
export default Item