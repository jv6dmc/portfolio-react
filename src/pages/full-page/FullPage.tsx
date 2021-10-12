import React, {Component} from "react";
import ReactFullpage from '@fullpage/react-fullpage';
import './FullPage.scss';
import {Experience, Home, ProjectRadiorebel, ProjectRecettes, ProjectSalonApresLimage} from "./sections";
import {Menu, MenuItem} from "./menu/Menu";

// https://github.com/alvarotrigo/fullPage.js#callbacks
// https://github.com/alvarotrigo/react-fullpage

interface FullPageProps {}

interface FullPageState {
    menuTheme: 'light' | 'dark'
}

export class FullPage extends Component<FullPageProps, FullPageState> {

    mainMenuId = 'mainMenu'
    mainMenuItems: MenuItem[] = [{
        anchor: 'home',
        label: 'Accueil'
    },
    {
        label: 'Projects',
        subMenu: [{
            anchor: 'project-radiorebel',
            label: 'Radiorebel'
        },
        {
            anchor: 'project-recettes',
            label: 'Recettes de la famille'
        },
        {
            anchor: 'project-salonapreslimage',
            label: 'Salon après l\'image'
        }]
    },
    {
        anchor: 'experience',
        label: 'Expérience'
    },
    {
        anchor: 'contact',
        label: 'Contact'
    }]

    constructor(props: FullPageProps, state: FullPageState) {
        super(props, state);
        this.state = {
            menuTheme: 'light'
        }
    }

    getAnchors(menuItems: MenuItem[]): string[] {
        const anchors: string[] = []
        menuItems.forEach(i => {
            if (i.anchor) {
                anchors.push(i.anchor)
            }
            if (i.subMenu) {
                anchors.push(...this.getAnchors(i.subMenu))
            }
        })
        return anchors
    }

    render() {
        return (
            <div>
                {/* Menu web */}
                <Menu id={this.mainMenuId} menuItems={this.mainMenuItems} theme={this.state.menuTheme ? this.state.menuTheme : 'light'}/>
                <ReactFullpage
                    //fullpage options
                    // licenseKey = {'YOUR_KEY_HERE'}
                    scrollingSpeed = {1000} /* Options here */
                    animateAnchor={false}
                    anchors={this.getAnchors(this.mainMenuItems)}
                    menu={`#${this.mainMenuId}`}
                    onLeave={(origin, destination, direction) => {
                        console.log('=== onLeave ===')
                        console.log('origin', origin)
                        console.log('destination', destination)
                        console.log('direction', direction)

                        if (destination.anchor === 'project-recettes') {
                            this.setState({menuTheme: 'dark'})
                        } else {
                            this.setState({menuTheme: 'light'})
                        }
                    }}
                    afterLoad={(origin, destination, direction) => {
                        console.log('=== afterLoad ===')
                        console.log('origin', origin)
                        console.log('destination', destination)
                        console.log('direction', direction)


                    }}
                    render={({ state, fullpageApi }) => {
                        return (
                            <ReactFullpage.Wrapper>
                                <Home anchor={'home'} fullpageApi={fullpageApi}/>
                                <ProjectRadiorebel anchor={'project-radiorebel'} fullpageApi={fullpageApi}/>
                                <ProjectRecettes anchor={'project-recettes'} fullpageApi={fullpageApi}/>
                                <ProjectSalonApresLimage anchor={'project-salonapreslimage'} fullpageApi={fullpageApi}/>
                                <Experience anchor={'experience'} fullpageApi={fullpageApi}/>
                            </ReactFullpage.Wrapper>
                        );
                    }}
                />
            </div>
        )
    }

}
