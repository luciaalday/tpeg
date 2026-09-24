// src/pages/footer.jsx
import { Link } from 'react-router-dom'
import tpegLogo from '../img/Official_Logo.png'
import uaLogo from '../img/blockA.png'

export default function Footer() {
    return (
        <footer>
            <img src={tpegLogo} alt='TPEG Logo' />
            <div className='row'>
                <p>Lucia Alday &copy; 2026</p>
                <hr></hr>
                <div className='column'>
                    <Link className='footer-link'>Home</Link>
                    <Link className='footer-link'>Stylesheet</Link>
                    <Link className='footer-link'>Home</Link>
                </div>
            </div>
            <img src={uaLogo} alt='University of Arizona Logo' />
        </footer>
    )
}