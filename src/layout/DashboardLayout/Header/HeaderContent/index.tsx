// This file is the Dashboard's top header noti bar
import { UserButton } from '@clerk/nextjs'
import { useMemo } from 'react';

// MATERIAL - UI
import { Theme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Box from '@mui/material/Box';

// PROJECT IMPORTS
import Search from './Search';
//import Message from './Message';
import Profile from './Profile';
import Localization from './Localization';
import Notification from './Notification';
import MobileSection from './MobileSection';
import MegaMenuSection from './MegaMenuSection';

import useConfig from 'hooks/useConfig';
import DrawerHeader from 'layout/DashboardLayout/Drawer/DrawerHeader';

// TYPES
import { MenuOrientation } from 'types/config';

// ==============================|| HEADER - CONTENT ||============================== //

const HeaderContent = () => {
  const { i18n, menuOrientation } = useConfig();

  const downLG = useMediaQuery((theme: Theme) => theme.breakpoints.down('lg'));

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const localization = useMemo(() => <Localization />, [i18n]);

  const megaMenu = useMemo(() => <MegaMenuSection />, []);

  return (
    <>
      {menuOrientation === MenuOrientation.HORIZONTAL && !downLG && <DrawerHeader open={true} />}
      {!downLG && <Search />}
      {!downLG && megaMenu}
      {!downLG && localization}
      {downLG && <Box sx={{ width: '100%', ml: 1 }} />}

      <Notification />
      
      {!downLG && <Profile />}
      {!downLG && <UserButton />}
      {downLG && <MobileSection />}
    </>
  );
};

export default HeaderContent;
//<Message /> in line 44