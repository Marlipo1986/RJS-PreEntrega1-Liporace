//Este JSX dara formato a cada Card que mostrara los platos

import './Item.css'


const Item = ({id, nombre,imagen,precio,categoria,stock}) => {
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
                <p className='Info Oculto'>
                    Stock:{stock}
                </p>
                <p className='Info'>
                    {categoria}
                </p>
                <p className='Oculto'>{id}</p>
            </section>
            <footer className='ItemFooter'>
                    <p className='Option btn btn-secondary'>Ver detalle</p>
            </footer>
        </article>
      )

};


  
export default Item