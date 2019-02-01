import { h } from "preact";
import { MenuSection } from "../../components/menuItems";
import CommunityTheme from './community-theme';
import CustomCSS from './custom-css';
import CustomBG from './custom-background';
// import CustomNotificaton from './custom-notification-sound';

const CustomizeSection = () => {
  return (
    <MenuSection id="dubplus-customize" title="Customize" settingsKey="customize">
      <CommunityTheme />
      <CustomCSS />
      <CustomBG />
    </MenuSection>
  );
};

export default CustomizeSection;