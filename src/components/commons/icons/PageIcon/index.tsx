import { FaSatelliteDish, FaSatellite, FaBriefcase, FaBuilding, FaLeaf, FaCloud, FaDatabase, FaAudible, FaPeopleCarry, FaLongArrowAltDown, FaLongArrowAltUp } from "react-icons/fa";
import { AiOutlineMobile } from 'react-icons/ai';
import { BiNetworkChart } from 'react-icons/bi';
import { SiSecurityscorecard, SiOpenvpn, SiKnowledgebase } from 'react-icons/si';
import { GiSatelliteCommunication } from "react-icons/gi";
import { MdOutlineSatelliteAlt, MdRouter, MdPower, MdNewReleases } from "react-icons/md";
import { TbFiretruck } from "react-icons/tb";
import { FaArrowRightArrowLeft } from "react-icons/fa6";
import { TbArrowsDoubleNeSw } from "react-icons/tb";
import { TbWorldPin } from "react-icons/tb";
import { GrSatellite } from "react-icons/gr";
import { IoApps } from "react-icons/io5";
import { GoShieldLock } from "react-icons/go";
import { IoDocumentAttach } from "react-icons/io5";

export default function PageIcon({ iconName, size }: { iconName: string, size: number }) {

  let selectedIcon;

  // Seleccionar un ícono dinámicamente según el nombre proporcionado
  switch (iconName) {
    case 'arrowDown':
      selectedIcon = <FaLongArrowAltDown size={size} />
      break;
    case 'arrowUp':
      selectedIcon = <FaLongArrowAltUp size={size} />
      break;
    case 'document': 
      selectedIcon = <IoDocumentAttach size={size} />
      break;
    case 'experience':
      selectedIcon = <SiKnowledgebase size={size} />
      break;
    case 'innovative':
      selectedIcon = <MdNewReleases size={size} />
      break;
    case 'collaborative':
      selectedIcon = <FaPeopleCarry size={size} />
      break;
    case 'power':
      selectedIcon = <MdPower size={size} />
      break;
    case 'router':
      selectedIcon = <MdRouter size={size} />
      break;
    case 'starantena':
      selectedIcon = <FaAudible size={size} />
      break;
    case 'shield':
      selectedIcon = <GoShieldLock size={size} />
      break;
    case 'db':
      selectedIcon = <FaDatabase size={size} />
      break;
    case 'app':
      selectedIcon = <IoApps size={size} />
      break;
    case 'vpn':
      selectedIcon = <SiOpenvpn size={size} />
      break;
    case 'cloud':
      selectedIcon = <FaCloud size={size} />
      break;
    case 'noc': 
      selectedIcon = <GrSatellite size={size} />
      break;
    case 'coverage':
      selectedIcon = <TbWorldPin size={size} />
      break;
    case 'resilience':
      selectedIcon = <FaLeaf size={size} />
      break;
    case 'satellite':
      selectedIcon = <FaSatelliteDish size={size} />;
      break;
    case 'mobile':
      selectedIcon = <AiOutlineMobile size={size} />;
      break;
    case 'network':
      selectedIcon = <BiNetworkChart size={size}></BiNetworkChart>;
      break;
    case 'security':
      selectedIcon = <SiSecurityscorecard size={size}></SiSecurityscorecard>;
      break;
    case 'satcom':
      selectedIcon = <FaSatellite size={size} />
      break;
    case 'satvsat':
      selectedIcon = <GiSatelliteCommunication size={size} />
      break;
    case 'starlink':
      selectedIcon = <MdOutlineSatelliteAlt size={size} />
      break;
    case 'truck':
      selectedIcon = <TbFiretruck size={size} />
      break;
    case 'portative':
      selectedIcon = <FaBriefcase size={size} />
      break;
    case 'building':
      selectedIcon = <FaBuilding size={size} />
      break;
    case 'arrowdoubleH':
      selectedIcon = <FaArrowRightArrowLeft size={size} />
      break;
    case 'arrowdoubleD':
      selectedIcon = <TbArrowsDoubleNeSw size={size} />
      break;
    default:
      selectedIcon = null;
  }

  return (
    <>
      {selectedIcon}
    </>
  )
}