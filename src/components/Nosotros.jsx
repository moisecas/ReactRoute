import React from 'react'

const Nosotros = () => {

    //consumo e api

    const [equipo, setEquipo]= React.useState([]) //lo alimenta la api, array vacio para que se llene con la api
    
    React.useEffect(()=> {
        //console.log('useEffect')
        obtenerDatos() //llamado a la función 
    }, []) //para que el useeffect se ejecute una sola vez 

    const obtenerDatos = async () => { //funcion de llamado a la api 
        const data = await fetch('https://jsonplaceholder.typicode.com/users') //llamado al url, retorna un json
        const users = await data.json() //la  transformamos a json 
        //console.log(users)
        setEquipo(users) //los vamos a visualizar en el ul, mira dentro del return
    }

  return (
    <div>
        <h1>Nosotros</h1>
        <ul>
            {
                equipo.map(item => (
                    <li key={item.id}>{item.name} - {item.email} </li> // el li necesita un key que lo sacamos de la api así como los datos que queremos mostrar {}

                ))
            }
        </ul>
    </div>
  )
}

export default Nosotros