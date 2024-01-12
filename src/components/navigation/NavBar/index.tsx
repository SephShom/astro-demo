import NavTrigger from "../ui/NavTrigger";
import { type MenuTrigger } from "../model";
import { useState } from "react";
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoIosClose } from "react-icons/io";
import { BiArrowBack } from 'react-icons/bi';
import { clsx } from 'clsx';
import 'animate.css';

export default function NavBar() {

  const items: MenuTrigger[] = [
    {
      id: 1,
      name: 'Servicios',
      banner: true,
      bannerTitle: 'Servicios Satelitales',
      bannerDescription: 'Seguridad Confiabilidad e Innovacion',
      bannerIcon: 'satellite',
      route: '/satellite',
      navItems: [
        {
          id: 1,
          title: 'Estación VSAT',
          description: 'Sistema de internet satelital fijo',
          route: '/satellite/internet-vsat'
        },
        {
          id: 2,
          title: 'Internet Móvil',
          description: 'Servicio VSAT sobre vehículos',
          route: '/satellite/truck-sat'
        },
        {
          id: 3,
          title: 'Internet Portátil',
          description: 'Soluciones móviles.',
          route: '/satellite/mobile-sat'
        },
        {
          id: 4,
          title: 'High Speed Broadband',
          description: 'Servicio de internet de alta velocidad',
          route: '/satellite/high-star'
        },
        {
          id: 5,
          title: 'Telefonía Satelital',
          description: 'Servicio de voz y SMSs.',
          route: '/satellite/phone-sat'
        },
        {
          id: 6,
          title: 'Red Privada Satelital',
          description: 'Enlaces de puntos remotos para la transmision de datos internos.',
          route: '/satellite/link-sat'
        },
        {
          id: 7,
          title: 'Backup & Redundancia',
          description: 'Redundancia en la conectividad.',
          route: '/satellite/backup-sat'
        }
      ],
      type: 'dropdown'
    },
    {
      id: 2,
      name: 'Productos',
      banner: false,
      route: '/networking',
      navItems: [
        {
          id: 1,
          title: 'Redes&Networking',
          description: 'Cableado estructurado e instalación de equipos de networking.',
          route: '/networking'
        }
      ],
      type: 'dropdown'
    },
    {
      id: 3,
      name: 'Nosotros',
      banner: false,
      navItems: [
        {
          id: 1,
          title: 'Nosotros',
          description: '',
          route: '/about'
        },
        {
          id: 2,
          title: 'Nuestros Términos',
          description: '',
          route: '/legal/terms'
        },        
      ],
      type: 'dropdown'
    },
    {
      id: 4,
      name: 'Contacto',
      banner: false,
      route: '/contact',
      type: 'link'
    },
  ];

  const [subMenuTrigger, setSubMenuTrigger] = useState<number>(-1);
  const [showMenu, setShowMenu] = useState<boolean>(false);

  const closeMenu = () => {
    setSubMenuTrigger(-1);
    setShowMenu(false);
  }


  return (
    <>
      {/*Main Menu*/}
      <nav className="hidden xl:flex w-full h-20 justify-between items-center fixed bg-color-800 text-color-200 z-50">
        {/*Logo*/}
        <a href={'/'}>
          <div className="flex items-center">
            <img className="max-h-20 w-20 p-2" src={'/images/logo/logo.png'} width={1579} height={1452} alt="logo" />
            <h2 className="text-3xl font-black text-color-200">trisecom</h2>
          </div>
        </a>
        {/*Main Menu*/}
        <ul className="flex w-6/12 justify-between items-center gap-2 pe-9">
          {items.map(item =>
            <NavTrigger key={item.id} item={item} />)}
        </ul>
      </nav>
      {/*Toggled Main Menu*/}
      <nav className="xl:hidden flex w-full h-20 justify-around items-center fixed bg-color-800 text-color-200 z-50">
        <a href={'/'}>
          <div className="flex items-center">
            <img className="max-h-20 w-20 p-3" src={'/images/logo/logo.png'} width={1579} height={1452} alt="logo" />
            <h2 className="text-3xl font-black text-color-200">trisecom</h2>
          </div>
        </a>
        <div className="text-color-200">
          <GiHamburgerMenu size={30} onClick={() => setShowMenu(true)}></GiHamburgerMenu>
        </div>
      </nav>

      {
        // Toggled Main Menu
        showMenu &&
        (subMenuTrigger === -1 ?
          <div className={clsx('w-full h-full fixed bg-color-800 z-[51] animate__animated', showMenu ? 'animate__fadeIn' : 'animate__fadeOut')}>
            <div className="text-color-200 m-2">
              <IoIosClose size={50} onClick={() => setShowMenu(false)}></IoIosClose>
            </div>
            <ul className="flex flex-col justify-center items-center h-full gap-2">
              {items.map(item =>
              (
                item.type != 'dropdown' ?
                  <a className="text-color-200 text-lg font-semibold" href={item.route ? item.route : ''} key={item.id} onClick={closeMenu}>{item.name}</a>
                  :
                  <div className="text-color-200 text-lg font-semibold" onClick={() => setSubMenuTrigger(item.id - 1)} key={item.id}>{item.name}</div>
              )
              )}
            </ul>
          </div>
          :
          <div className="animate__animated animate__fadeIn top-0 left-0 w-full h-full fixed bg-color-800 z-[52]">
            <div className="text-color-200 m-2">
              <BiArrowBack size={30} onClick={() => setSubMenuTrigger(-1)}></BiArrowBack>
            </div>
            <ul className="flex flex-col justify-center items-center h-full gap-2">
              {
                (
                  items[subMenuTrigger].navItems?.map(item => (
                    <a className="text-color-200 text-lg font-semibold" href={item.route ? item.route : ''} key={item.id} onClick={closeMenu}>{item.title}</a>)
                  ))
              }
            </ul>
          </div>
        )
      }
    </>

  )
}