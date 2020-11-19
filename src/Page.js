import React from 'react'

function Page(props) {
    return (
        <div>
         <b>Compra:</b> {props.data.cotizacion.compra}
         <br></br>
         <b>Venta:</b> {props.data.cotizacion.venta}
         <br></br>
         <b>Promedio:</b> {(parseInt(props.data.cotizacion.venta) + parseInt(props.data.cotizacion.compra)) / 2}.00
         <br></br>
         <b>Actualizado:</b> {props.data.cotizacion.fecha}
    
        </div>
    )
}

export default Page
