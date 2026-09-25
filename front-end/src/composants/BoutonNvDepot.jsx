import { useNavigate, useLocation } from 'react-router'
import './BoutonNvDepot.css'

function BoutonNvDepot(){
    const navigate = useNavigate()
    const location = useLocation()
    const surPageCreation = location.pathname === '/nvdepots'

    return(
        <>
        <button
            className="btn-nouveau-depot"
            disabled={surPageCreation}
            onClick={() => {navigate ('/nvdepots')}}
        >
            Créer un nouveau dépôt
        </button>
        </>
    )
}

export default BoutonNvDepot