export default function NumeroAleatorio() {

    const numeroAleatorio = Math.floor(Math.random() * 100) + 1

  return (
    <div>
      <>
        <h2>Numero Aleatorio</h2>
        <p>{numeroAleatorio}</p>
      </>
    </div>
  )
}
