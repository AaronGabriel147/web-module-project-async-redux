import axios from 'axios';

export const FETCH_NASA_START = 'FETCH_NASA_START';
export const FETCH_NASA_SUCCESS = 'FETCH_NASA_SUCCESS';
export const FETCH_NASA_FAIL = 'FETCH_NASA_FAIL';



export const fetchNasaAction = () => dispatch => {
  dispatch({ type: FETCH_NASA_START });
  axios
    .get('https://api.nasa.gov/planetary/apod?api_key=I7FKEo5cyioKDlwxTjWorNCaEg8P0SWvuZkXMoNN')
    .then(res =>
      dispatch({ type: FETCH_NASA_SUCCESS, payload: res.data })
    )
    .catch(err => dispatch({ type: FETCH_NASA_FAIL, payload: err }));
};





























// this was in App
  // const [data, setData] = useState([])

  // useEffect(() => {
  //     axios
  //         .get('https://api.nasa.gov/planetary/apod?api_key=I7FKEo5cyioKDlwxTjWorNCaEg8P0SWvuZkXMoNN')
  //         .then(res => {
  //             // console.log(res.data)
  //             setData(res.data)
  //           })
  //         .catch(err => console.log('err!!!!', err))
  // }, [])

  // console.log(data.hdurl)