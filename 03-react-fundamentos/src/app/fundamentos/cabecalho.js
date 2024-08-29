import React from 'react'

export default function Cabecalho(props) {

    const {titulo, descricao} = props

  return (
    <>
        <h1 style={{textAlign: 'center'}}>{titulo}</h1>
        <p>{descricao}</p>
        <hr />
    </>
  )
}
