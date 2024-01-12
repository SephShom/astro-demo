import { FaSatelliteDish } from "react-icons/fa";

export function BannerIcon({ iconName }: { iconName: string }) {

  let selectedIcon;

  // Seleccionar un ícono dinámicamente según el nombre proporcionado
  switch (iconName) {
    case 'satellite':
      selectedIcon = <FaSatelliteDish size={50} />;
      break;    
    default:
      selectedIcon = null;
  }

  return(
    <>
      {selectedIcon}
    </>
  )
}