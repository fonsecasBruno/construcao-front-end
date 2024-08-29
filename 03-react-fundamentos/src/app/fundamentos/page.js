import MeuComponente from "./meuComponente"
import NumeroMaior from "./numeroMaior"
import NumeroAleatorio from "./numeroAleatorio"
import Cabecalho from "./cabecalho"

export default function Fundamentos() {



    return (
        <>
            {/* Comentários no JSX */}

            <Cabecalho titulo="Fundamentos" descricao="eu não vi a descrição desculpa professor ;-;" />

            <h1>Página Fundamentos</h1>
            <hr />

            <MeuComponente />
            <hr />

            <NumeroMaior numA={2} numB={10} />
            <NumeroMaior numA={100} numB={8} />
            <NumeroMaior numA={20} numB={32} />
            <NumeroMaior numA={2} numB={11} />
            <NumeroMaior numA={1140} numB={10} />
            <NumeroMaior numA={222} numB={666} />

            <hr />

            <NumeroAleatorio />





        </>
    )



}