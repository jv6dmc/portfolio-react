import React, {Component} from "react";
import './Home.scss';
import {Section} from "../Section";
import {fullpageApi} from "@fullpage/react-fullpage";
import classNames from "classnames";
import profile from '../../../../assets/profile.jpg';
import LoremIpsum from "react-lorem-ipsum";
import {Image} from "../../../../components/image/image";

interface HomeProps {
    anchor: string
    fullpageApi: fullpageApi
}

interface HomeState {
    fade: boolean
}

export class Home extends Component<HomeProps, HomeState> {

    constructor(props: HomeProps, state: HomeState) {
        super(props, state);
        this.state = {
            fade: false
        }
    }

    componentDidMount() {
        this.setState({fade: true})
    }

    render() {
        return (
            <Section className={this.props.anchor}>
                <div className={classNames("content", {"fade": this.state.fade})}>
                    <Image imgUrl={profile}
                           text={<LoremIpsum/>}
                           textPosition={"right"}
                    />
                    <p>Section 1 (welcome to fullpage.js)</p>
                </div>
                <button onClick={() => this.props.fullpageApi.moveSectionDown()}>
                    Click me to move down
                </button>
            </Section>
        )
    }

}
