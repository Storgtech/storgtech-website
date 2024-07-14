import  { useEffect, useState } from "react";
import axios from "axios";


export const Login = () => {

    const [data, setData] = useState<[{}]>([{}]);
    const url = window.location.origin;

    useEffect(()=>{
        const fetchData = async () => {
            try {
                const response = await axios.get(url + '/domain-check')
                console.log(response);
                setData(response.data);
            }catch (e) {
                console.log('Erro: ', e);
            }
        }

        fetchData();
    },[])

    return (
        <div dangerouslySetInnerHTML={{ __html: data }} />
    );
}
