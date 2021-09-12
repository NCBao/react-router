import React,{Component} from 'react';
import {Link, useRouteMatch} from 'react-router-dom';

const MenuLink = ({label, to, activeOnlyWhenExact}) => {
    let match = useRouteMatch({
        path : to,
        exact : activeOnlyWhenExact
    });
    console.log(label, match);
    var active = match ? 'active-custom' : '';
    return (
        <li className={`${active}`}>
            <Link to={to}>{label}</Link>
        </li>
    );
}

const menus = [
    {
        to : '/',
        label : 'Home',
        exact : true
    },
    {
        to : '/about',
        label : 'About',
        exact : false
    },
    {
        to : '/contact',
        label : 'Contact',
        exact : false
    },
    {
        to : '/products',
        label : 'Products',
        exact : false
    },
    {
        to : '/login',
        label : 'Login',
        exact : false
    },
];

class Menu extends Component{
    render(){
        return (
            <nav className="navbar navbar-default">
                <ul className="nav navbar-nav">
                    {this.showMenus(menus)}
                </ul>
            </nav>
        );
    }

    showMenus = (menus) => {
        var result = null;
        result = menus.map((item, index) => {
            return (
                <MenuLink
                    key={index}
                    to={item.to}
                    label={item.label}
                    activeOnlyWhenExact={item.exact}
                >
                </MenuLink>
            );
        });
        return result;
    }
}

export default Menu;