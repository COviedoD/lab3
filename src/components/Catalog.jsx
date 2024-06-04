import React from 'react';
function Catalog() {
    // Ejemplo de datos del catálogo
    const products = [
        { id: 1, name: 'Taza Personalizada', img: '/src/assets/taza.jpg', desc: 'Taza personalizada con diseño único según las preferencias del cliente, que puede incluir nombres, fechas especiales, fotos u otros elementos personalizados.', price: 5.00 },
        { id: 2, name: 'Cuadro Personalizado', img: '/src/assets/cuadroA.jpeg', desc: 'Cuadro personalizado creado a partir de una imagen proporcionada por el cliente, disponible en una variedad de estilos artísticos y tamaños de lienzo.', price: 10.00 },
        { id: 3, name: 'Combo de Regalo Personalizado', img: '/src/assets/cuadroB.jpeg', desc: 'Combo que incluye una casa personalizada, un cuadro personalizado y una taza personalizada, perfecto para regalar algo único y significativo. ', price: 20.00 }
    ];
    return (
        <div>
            <h2>Catálogo de Productos</h2>
            <ul>
                {products.map(product => (
                    <li key={product.id} style={{ listStyleType: 'none' }}>
                        <span className='product-name'>{product.name}</span>
                        <br /><br />
                        <img className='product-img' src={product.img} alt="producto" />
                        <br /><br />
                        <span>{product.desc}</span>
                        <br /><br />
                        <span className='product-price'>Precio: ${product.price}</span>
                        <br /><br />
                    </li>
                ))}
            </ul>
        </div>
    );
}
export default Catalog;