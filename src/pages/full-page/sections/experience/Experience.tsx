import React, {Component} from "react";
import './Experience.scss';
import {Section} from "../Section";
import {fullpageApi} from "@fullpage/react-fullpage";
import classNames from "classnames";
import LoremIpsum from "react-lorem-ipsum";

interface ExperienceProps {
    anchor: string
    fullpageApi: fullpageApi
}

export class Experience extends Component<ExperienceProps> {

    constructor(props: ExperienceProps) {
        super(props);
        this.state = {
            fade: false
        }
    }

    render() {
        return (
            <Section className={classNames('experience', this.props.anchor)}>
                <h2>Expérience</h2>
                <div className={'slide'}>
                    <h3>Desjardins</h3>
                    <LoremIpsum/>
                </div>
                <div className={'slide'}>
                    <LoremIpsum/>
                </div>
            </Section>
        )
    }
}
