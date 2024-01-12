
import { type ServiceModel, type ContactModel } from "./model";

const services: ServiceModel[] = [
  {
    id: '1',
    name: 'Internet satelital'
  },
  {
    id: '2',
    name: 'Enlazar oficinas remotas'
  },
  {
    id: '3',
    name: 'Compra de equipos'
  }
];

export default function ContactEmail(contact: ContactModel) {
  return(
    <>
    <p>{contact.serviceId}</p>    
    <p className="text-lg">{contact.message}</p>
    <hr />        
    <p>{contact.name}</p>    
    <p>{contact.email}</p>
    <p>{contact.phone}</p>    
    </>
  )
}