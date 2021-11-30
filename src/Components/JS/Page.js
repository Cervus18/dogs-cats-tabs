import '../css/Page.css'
import { useEffect, useState } from 'react'
import Spinner from '../../helpers/Spinner'

const Page = ({tab}) => {
    let url 

    const [src,setSrc] = useState('')
    const [isLoading,setIsLoading] = useState(false)

    switch(tab.animal){
        case 'cat':
             url = 'https://api.thecatapi.com/v1/images/search'
             break
        case 'dog':
             url = 'https://dog.ceo/api/breeds/image/random'
             break
        default:
             url = ''
       
    }

    useEffect(() => {
        setIsLoading(true)
        if(tab.animal==='cat'){
            fetch(url)
            .then(response => response.json())
            .then(data => setSrc(data[0].url))
            .then(()=>setIsLoading(false))
            .catch(error => console.log(error));
        }

        if(tab.animal==='dog'){
            fetch(url)
            .then(response => response.json())
            .then(data => setSrc(data.message))
            .then(()=>setIsLoading(false))
            .catch(error => console.log(error));
        }
       
    }, [url,tab.animal])

    return (
        <div className={tab.current ? 'page current__page' : 'page'}>
            {isLoading?<Spinner/>:<img src={src} alt="" />}
        </div>
    )
}

export default Page
