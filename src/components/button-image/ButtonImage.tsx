import React, {Component} from "react"
import './ButtonImage.scss'

interface ButtonImageProps {
    className?: string
    imgUrl: string
    label: string
}

export class ButtonImage extends Component<ButtonImageProps> {

    render() {
        return (
            <button className={this.props.className} style={{background: `url(${this.props.imgUrl}) no-repeat`}}>{this.props.label}</button>
        );
    }
}
