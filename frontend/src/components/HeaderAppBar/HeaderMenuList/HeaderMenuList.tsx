import React, { useState } from 'react';
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import { Avatar, Menu, Typography } from '@mui/material';

import {
  StyledBoxInfoContainer,
  StyledBoxMenuIcon,
  StyledBoxUserName,
  StyledMenuItem,
  StyledMenuItemLink,
} from './HeaderMenuList.styles';

export const HeaderMenuList = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);
  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <StyledBoxInfoContainer onClick={handleClick}>
        <Avatar
          alt="Tester Testowy"
          src="https://github.com/lukaszzadamczyk.png"
        />
        <StyledBoxUserName>
          <Typography>Tester Testowy</Typography>
        </StyledBoxUserName>
        <StyledBoxMenuIcon>
          <ArrowDropDownIcon />
        </StyledBoxMenuIcon>
      </StyledBoxInfoContainer>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'left',
        }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'left',
        }}
      >
        <StyledMenuItemLink to="/hr/account/id">
          <StyledMenuItem onClick={handleClose}>Konto</StyledMenuItem>
        </StyledMenuItemLink>
        <StyledMenuItemLink to="/login">
          <StyledMenuItem onClick={handleClose}>Wyloguj</StyledMenuItem>
        </StyledMenuItemLink>
      </Menu>
    </>
  );
};
