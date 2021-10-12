import React, {Component} from "react";
import './ProjectRecettes.scss';
import {Section} from "../Section";
import {fullpageApi} from "@fullpage/react-fullpage";
import classNames from "classnames";
import LoremIpsum from "react-lorem-ipsum";

interface ProjectProps {
    anchor: string
    fullpageApi: fullpageApi
}

export class ProjectRecettes extends Component<ProjectProps> {

    constructor(props: ProjectProps) {
        super(props);
        this.state = {
            fade: false
        }
    }

    render() {
        return (
            <Section className={classNames('project-recettes', this.props.anchor)}>
                {/*<Slider/>*/}
                <h2>Recettes de la famille</h2>
                <div className={'slide'}>
                    <LoremIpsum/>
                </div>
                <div className={'slide'}>
                    <LoremIpsum/>
                </div>
            </Section>
        )
    }
}
