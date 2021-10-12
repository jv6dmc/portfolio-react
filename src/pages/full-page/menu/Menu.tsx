import React, {Component, Fragment} from "react";
import './Menu.scss';
import classNames from "classnames";

export interface MenuItem {
    subMenu?: MenuItem[]
    anchor?: string
    label: string
}

interface MenuProps {
    id?: string
    open?: boolean
    menuItems: MenuItem[]
    onClick?: () => void
    theme: 'light' | 'dark'
}

interface MenuState {
    subMenuOpen: boolean
    mobileOpen: boolean
}

export class Menu extends Component<MenuProps, MenuState> {

    constructor(props: MenuProps, state: MenuState) {
        super(props, state);
        this.state = {
            subMenuOpen: false,
            mobileOpen: false
        }
    }

    openCloseSubMenu(open?: boolean) {
        this.setState({
            subMenuOpen: open !== undefined ? open : !this.state.subMenuOpen,
            mobileOpen: open !== undefined ? open : !this.state.subMenuOpen
        })
    }

    menuItemOnClick() {
        this.setState({
            subMenuOpen: false,
            mobileOpen: false
        })
        if (this.props.onClick) {
            this.props.onClick()
        }
    }

    generateMenu() {
        return (
            <ul className={classNames({open: this.props.open === undefined || this.props.open})}>
                {this.props.menuItems.map(menuItem => (
                    <li data-menuanchor={menuItem.anchor}>
                        {menuItem.anchor ?
                            <a href={`#${menuItem.anchor}`} onClick={() => this.menuItemOnClick()}>{menuItem.label}</a> :
                            <span onClick={() => this.openCloseSubMenu()}>{menuItem.label}</span>
                        }
                        {menuItem.subMenu &&
                            <Menu menuItems={menuItem.subMenu}
                                  open={this.state.subMenuOpen}
                                  onClick={() => this.openCloseSubMenu(false)}
                                  theme={this.props.theme}
                            />
                        }
                    </li>
                ))}
            </ul>
        )
    }

    render() {
        return this.props.id ? (
            <Fragment>
                <button className={
                    classNames(
                        `menu-burger menu-burger--${this.props.theme}`,
                        {'is-open': this.state.mobileOpen}
                    )
                }
                onClick={() => this.setState({
                    subMenuOpen: !this.state.mobileOpen,
                    mobileOpen: !this.state.mobileOpen
                })}>
                    <span className="menu-burger-child"/>
                    <span className="menu-burger-text">Menu</span>
                </button>
                <nav id={this.props.id} className={`menu menu--${this.props.theme}`}>{this.generateMenu()}</nav>
            </Fragment>
            ) :
            this.generateMenu()
    }

}
