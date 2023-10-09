import { useState, useEffect } from "react";

const Formulario = () => {
    
    const [materiaA, setMateriaA] = useState(0);
    const [materiaB, setMateriaB] = useState(0);
    const [materiaC, setMateriaC] = useState(0);
    const [nome, setNome] = useState('');

    useEffect(() => {
        console.log('o estado nome mudou')
    },[nome]);

    useEffect(() => {
        console.log('a materia mudou')
    }, [materiaA], [materiaB], [materiaC]);

    useEffect(() => {
        console.log('o componente iniciou');
        
        return () => {
            console.log('o componente finalizou')
        }
    });
    
    const alteraNome = (evento) => {
        setNome(estadoAnterior => {
            return evento.target.value;
        })
    }

    const renderizaResultado = () => {
        const soma = materiaA + materiaB + materiaC;
        const media = soma / 3;

        if (media >= 7) {
            return (
                <p>Olá, {nome}. Você foi aprovado!</p>
            )
        } else {
            return (
                <p>Olá, {nome}. Você foi reprovado!</p>
            )
        }
    }

    return (
        <form>
            <ul>
                {[1,2,3,4,5].map(item => (
                <li>{item}</li>
                ))}
            </ul>

            <input type="text" placeholder="Seu nome" onChange={alteraNome} />
            <input type="number" placeholder="Nota Materia A" onChange={evento => setMateriaA(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota Materia B" onChange={evento => setMateriaB(parseInt(evento.target.value))}/>
            <input type="number" placeholder="Nota Materia C" onChange={evento => setMateriaC(parseInt(evento.target.value))}/>
            {renderizaResultado()}
        </form>
    )
}

export default Formulario;