
import loader from '../assets/circloader.svg'

const InitialLoader = () => {
  return (
    <div id="page-loader">
        <img src={loader} alt="loader" width="100%" height="100%"/>
    </div>
  )
}

export default InitialLoader