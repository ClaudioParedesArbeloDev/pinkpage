import {Link} from 'react-router-dom';
import { useTranslation } from 'react-i18next';

import './footer.css';

const Footer = () => {

    const [t] = useTranslation("global");

    return(
        <div className='wrapperFooter'>
            <div className='copyrightFooter'>
                <p>PinkPage</p>
                <div className='linkFooter'>
                    <Link to="/faq">{t ('footer.faq')}</Link>
                    <Link to="/terms">{t ('footer.terms')}</Link>
                    <Link to="/privacy_policies">{t ('footer.policies')}</Link>
                </div>
            </div>
            <div className='socialNetworks'>
                <i className="fa-brands fa-square-x-twitter"></i>
                <i className="fa-brands fa-square-instagram"></i>
                <i className="fa-brands fa-square-facebook"></i>
            </div>
        </div>
    )
}

export default Footer;