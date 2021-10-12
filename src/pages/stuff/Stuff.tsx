import React, {Component} from "react";
import './Stuff.scss';

export class Stuff extends Component {

    radioGroupRef = React.createRef<HTMLParagraphElement>();
    cubeRef = React.createRef<HTMLDivElement>();
    currentClass = '';

    constructor(props: {} | Readonly<{}>) {
        super(props);
        this.changeSide = this.changeSide.bind(this);
    }


    componentDidMount() {
        // set initial side
        this.changeSide();
        if (this.radioGroupRef.current) {
            this.radioGroupRef.current.addEventListener('change', this.changeSide);
        }
    }

    render() {
        return (
            <div>
                <div className="scene">
                    <div className="cube" ref={this.cubeRef}>
                        <div className="cube__face cube__face--front">front</div>
                        <div className="cube__face cube__face--back">back</div>
                        <div className="cube__face cube__face--right">right</div>
                        <div className="cube__face cube__face--left">left</div>
                        <div className="cube__face cube__face--top">top</div>
                        <div className="cube__face cube__face--bottom">bottom</div>
                    </div>
                </div>
                <p className="radio-group" ref={this.radioGroupRef}>
                    <label>
                        <input type="radio" name="rotate-cube-side" value="front" checked/> front
                    </label>
                    <label>
                        <input type="radio" name="rotate-cube-side" value="right"/> right
                    </label>
                    <label>
                        <input type="radio" name="rotate-cube-side" value="back"/> back
                    </label>
                    <label>
                        <input type="radio" name="rotate-cube-side" value="left"/> left
                    </label>
                    <label>
                        <input type="radio" name="rotate-cube-side" value="top"/> top
                    </label>
                    <label>
                        <input type="radio" name="rotate-cube-side" value="bottom"/> bottom
                    </label>
                </p>
            </div>
        )
    }

    changeSide() {
        if (this.radioGroupRef.current && this.cubeRef.current) {
            const checkedRadio: HTMLInputElement = this.radioGroupRef.current.querySelector(':checked') as HTMLInputElement;
            if (checkedRadio) {
                const showClass = 'show-' + checkedRadio.value;
                if (this.currentClass) {
                    this.cubeRef.current.classList.remove(this.currentClass);
                }
                this.cubeRef.current.classList.add(showClass);
                this.currentClass = showClass;
            }
        }
    }
}
