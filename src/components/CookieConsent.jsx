
import CookieConsent from "react-cookie-consent";
/**
 * CookieConsent
 * 
 * @returns {JSX.Element}
 * @author Alexander Golüke
 * @version 0.5.0
 */
function CookieConsentFunction() {
    return (

        <CookieConsent
            enableDeclineButton
            buttonText="Alle akzeptieren"
            buttonStyle={{
                background: "#66cd8b",
                color: "#223c31",
                fontWeight: "bolder",
            }}
            declineButtonText="Nur notwendige"
        >
            Cookies werden benötigt um eine Optimale Benutzererfahrung zu gewähleisten. <a className="link link-hover text-[#BBFFBB]">Hier</a> erfahren Sie mehr
        </CookieConsent>

    )



}
export default CookieConsentFunction;