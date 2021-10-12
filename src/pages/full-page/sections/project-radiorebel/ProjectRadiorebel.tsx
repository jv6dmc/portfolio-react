import React, {Component} from "react";
import './ProjectRadiorebel.scss';
import {Section} from "../Section";
import {fullpageApi} from "@fullpage/react-fullpage";
import classNames from "classnames";

interface ProjectProps {
    anchor: string
    fullpageApi: fullpageApi
}

export class ProjectRadiorebel extends Component<ProjectProps> {

    constructor(props: ProjectProps) {
        super(props);
        this.state = {
            fade: false
        }
    }

    render() {
        return (
            <Section className={classNames('project-radiorebel', this.props.anchor)}>
                {/*<Slider/>*/}
                <h2>Radiorebel</h2>
                <div className={'slide'}>
                    <p>Copropriétaire d'une webradio depuis plus de 5 ans avec mon ami, je suis responsable de la maintenance du serveur ainsi que du développement du site web.</p>
                    <p>Tâches, fonctionnalités, technologies (angular, java spring boot, mysql), backup, pipeline jenkins</p>
                </div>
                <div className={'slide'}>
                    <p>Site web</p>
                </div>
                <div className={'slide'}>
                    <p>Application android</p>
                </div>
                <div className={'slide'}>
                    <p>Serveur, etc.</p>
                </div>
            </Section>
        )
    }

}
