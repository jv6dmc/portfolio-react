import React, {Component} from "react";
import classNames from "classnames";

interface SectionProps {
    className?: string
}

export class Section extends Component<SectionProps> {

    render() {
        return (
            <div className={classNames('section', this.props.className)}>
                {this.props.children}
            </div>
        )
    }

}
