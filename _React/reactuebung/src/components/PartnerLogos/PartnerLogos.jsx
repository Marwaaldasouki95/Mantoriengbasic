import aerLingus from '../../assets/aer-lingus-airline-aviareps-client.png'
import logo2 from '../../assets/company-2.png'
import logo3 from '../../assets/company-3.png'
import mauritius from '../../assets/mauritius-destination-client-aviareps.png'
import PartnerItem from './PartnerItem'

export default function PartnerLogos() {

    return <section id="partnerlogos">
        <div className='partnerlogoinner'>

            <PartnerItem src={aerLingus} />
            <PartnerItem src={logo2} />
            <PartnerItem src={logo3} />
            <PartnerItem src={mauritius} />
        </div>
    </section>
}