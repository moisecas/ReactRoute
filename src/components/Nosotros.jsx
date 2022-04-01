import React from 'react'
import {Link} from 'react-router-dom' //usar el link dentro de este componente 

const Nosotros = () => {

    //consumo e api

    const [equipo, setEquipo]= React.useState([]) //lo alimenta la api, array vacio para que se llene con la api
    
    React.useEffect(()=> {
        //console.log('useEffect')
        obtenerDatos() //llamado a la función 
    }, []) //para que el useeffect se ejecute una sola vez 

    const obtenerDatos = async () => { //funcion de llamado a la api 
        const data = await fetch('https://age-of-empires-2-api.herokuapp.com/api/v1/civilizations') //llamado al url, retorna un json
        const users = await data.json() //la  transformamos a json 
        //console.log(users)
        setEquipo(users.civilizations) //los vamos a visualizar en el ul, mira dentro del return
    }

  return (
    <div>
        <h1>Nosotros</h1>
        <ul>
            {
                equipo.map(item => ( //creando urls dinámicas con el link para traer los datos de la api
                    <li key={item.id}>
                    <Link to={`/nosotros/ ${item.id}`}> 
                        {item.name} - {item.expansion} 
                    </Link>
                    </li> // el li necesita un key que lo sacamos de la api así como los datos que queremos mostrar {}

                ))
            }
        </ul>
    </div>
  )
}

export default Nosotros