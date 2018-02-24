import React from 'react';
import { NavLink } from 'react-router-dom';
import BrowseSvg from '../../svg-components/Browse';
import WishlistSvg from '../../svg-components/Wishlist';
import CellarSvg from '../../svg-components/Cellar';
import ArticlesSvg from '../../svg-components/Articles';
import ProfileSvg from '../../svg-components/Profile';
import './style.scss';

const tabs = [
  { name: 'browse', icon: BrowseSvg, root: true },
  { name: 'wishlist', icon: WishlistSvg },
  { name: 'cellar', icon: CellarSvg },
  { name: 'articles', icon: ArticlesSvg },
  { name: 'profile', icon: ProfileSvg },
];

const NavItem = ({ root, name, icon: Icon }) => (
  <NavLink
    className="TabBar__item"
    activeClassName="TabBar__item--active"
    to={`/${root ? '' : name}`}
    key={name}
    exact
  >
    <div>
      <Icon />
    </div>
    <div className="TabBar__text">
      {name}
    </div>
  </NavLink>
);

const TabBar = () => (
  <nav className="TabBar">
    {tabs.map(NavItem)}
  </nav>
);

export default TabBar;
