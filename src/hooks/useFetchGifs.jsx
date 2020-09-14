import { useState, useEffect } from 'react';
import { getGifs } from '../helpers/getGifs';

export const useFetchGifs = (category) => {
    const [State, setState] = useState({
        data: [],
        loading: true
    })

    useEffect(() => {
        getGifs(category)
            .then( imgs => {
                setTimeout( () => {
                    console.log(imgs)
                    setState({
                        data: imgs,
                        loading: false
                    })
                },3000);
            })
    }, [])

    return State; // { data:[], loading: true };
}
