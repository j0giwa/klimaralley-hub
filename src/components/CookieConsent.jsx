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
      buttonText="Notwendige akzeptieren"
      buttonStyle={{
        background: "#66cd8b",
        color: "#223c31",
        fontWeight: "bolder",
      }}
    >
      Cookies werden benötigt um eine Optimale Benutzererfahrung zu gewähleisten.
    </CookieConsent>
  )
}

export default CookieConsentFunction;
