import React, {Component} from "react";
import './timeline.scss';
import {Image} from "../image/image";
import radiorebel_website_v2_screenshot from "../../assets/radiorebel_website_v2_screenshot.png"

export class Timeline extends Component {

    render() {
        return (
            <div className={"timeline"}>
                <div className={"step"}>
                    <div className={"left"}>
                        <Image imgUrl={radiorebel_website_v2_screenshot} />
                    </div>
                    <div className={"center"}/>
                    <div className={"right"}>
                        RIGHT
                    </div>
                </div>
                <div className={"step"}>
                    <div className={"left"}>
                        LEFT
                    </div>
                    <div className={"center"}/>
                    <div className={"right"}>
                        RIGHT
                    </div>
                </div>
            </div>
        );
    }
}
