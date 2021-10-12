import React, {Component} from "react";
import './image.scss';

interface ImageProps {
    imgUrl: string;
    imgAlt?: string;
    text?: string | React.ReactNode;
    textPosition?: 'top' | 'right' | 'bottom' | 'left';
}

export class Image extends Component<ImageProps> {

    isTextPositionTopOrLeft(): boolean {
        return this.props.text !== undefined &&
            this.props.textPosition !== undefined &&
            (this.props.textPosition === 'top' || this.props.textPosition === 'left');
    }

    isTextPositionRightOrBottom(): boolean {
        return this.props.text !== undefined &&
            this.props.textPosition !== undefined &&
            (this.props.textPosition === 'right' || this.props.textPosition === 'bottom');
    }

    generateText(): React.ReactNode {
        return <span className={`text ${this.props.textPosition}`}>{this.props.text}</span>;
    }

    render() {
        return (
            <div className={"image"}>
                {this.isTextPositionTopOrLeft() && this.generateText()}
                <img src={this.props.imgUrl} alt={this.props.imgAlt ? this.props.imgAlt : ""} />
                {this.isTextPositionRightOrBottom() && this.generateText()}
            </div>
        );
    }
}
