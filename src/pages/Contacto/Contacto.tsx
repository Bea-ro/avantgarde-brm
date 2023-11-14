import { ContactoStyled } from './ContactoStyled'
import { personalData } from '../../data/personalData'
import Title from '../../components/ui/Title/Title'
import ProfilesList from '../../components/ui/ProfilesList/ProfilesList'

const Contacto = () => {
  return (
    <ContactoStyled>
        <section className="hablamos">
        <Title text="¿Hablamos?" fontSize="40px"/>
        <Title text="¡Tengo disponibilidad inmediata!" fontSize="40px"/>
        </section>
        
        <section className="contact-details">
        <div>
        <Title text="Contacto" />
        <p>Beatriz Rodríguez Maya</p>
        <p>Teléfono <a href="tel:+${personalData.phone}">{personalData.phone}</a></p>
        <a className="mail" href="mailto:${personalData.mail}">{personalData.mail}</a>
        </div>
        <div>
        <Title text="Social" />
        <ProfilesList />
        </div>
        </section>
    </ContactoStyled>
  )
}

export default Contacto