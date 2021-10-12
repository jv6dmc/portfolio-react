import React, {Component} from "react";
import './layout.scss';

interface LayoutProps {
    title: string;
    // menuItems: MenuItem[]
}

export class Layout extends Component<LayoutProps> {

    private getHeader(): React.ReactNode {
        return (
            <header>
                <h1>{this.props.title}</h1>
                {/* TODO MENU */}
            </header>
        );
    }

    render() {
        return (
            <>
                {this.getHeader()}
                <main>
                    {this.props.children}
                </main>
            </>
        );
    }
}
