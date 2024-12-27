import StatsCounter from "../../components/StatsCounter/StatsCounter ";
import ContactForm from "./ContactForm";
import ContactInfo from "./ContactInfo";

const Contact = () => {
  return (
    <div className="section mt-20">
      <ContactInfo/>
      <ContactForm/>
      <StatsCounter/>
    </div>
  )
}

export default Contact;