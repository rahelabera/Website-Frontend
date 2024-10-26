import "./partnerSlider.css";
import accosca from "../../assets/ACCOSCA_logo.png";
import coop from "../../assets/coop.png";
import dashen from "../../assets/deshen.png";
import wegagen from "../../assets/wegagen.jpg";
import ECC from "../../assets/ECC.png";
import ecoop from "../../assets/ecoop.jpg";

const PartnerSlider = () => {
  const logos = [
    accosca,
    ecoop,
    coop,
    dashen,
    wegagen,
    ECC,
    accosca,
    ecoop,
    coop,
    dashen,
    wegagen,
    accosca,
    ecoop,
    coop,
    dashen,
    wegagen,
  ];

  return (
    <div className="logos">
      <div className="logos-slide">
        {logos.map((src, index) => (
          <img key={index} src={src} alt={`Logo ${index + 1}`} />
        ))}
        {/* Duplicate logos for smooth looping */}
        {logos.map((src, index) => (
          <img key={`duplicate-${index}`} src={src} alt={`Logo ${index + 1}`} />
        ))}
      </div>
    </div>
  );
};

export default PartnerSlider;