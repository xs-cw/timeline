import React from 'react';
import { Popover, Button } from 'antd';


class CardInfo extends React.Component {
    state = {
        clicked: false,
        hovered: false,
        card: {},
    };

    hide = () => {
        this.setState({
            clicked: false,
            hovered: false,
        });
    };

    handleHoverChange = visible => {
        this.setState({
            hovered: visible,
            clicked: false,
        });
    };

    handleClickChange = visible => {
        this.setState({
            clicked: visible,
            hovered: false,
        });
    };
    componentDidMount() {
        this.setState({
            card: this.props.value,
        });
    }
    render() {
        const hoverContent = <div>{this.state.card.info}</div>;
        const clickContent = <div>{this.state.card.info}</div>;
        return (
            <Popover
                style={{ width: 500 }}
                content={hoverContent}
                title={this.state.card.title}
                trigger="hover"
                visible={this.state.hovered}
                onVisibleChange={this.handleHoverChange}
            >
                <Popover
                    content={
                        <div>
                            {clickContent}
                            <Button onClick={this.hide}>Close</Button>
                        </div>
                    }
                    title={this.state.card.title}
                    trigger="click"
                    visible={this.state.clicked}
                    onVisibleChange={this.handleClickChange}
                >
                    <Button>{this.state.card.title}</Button>
                </Popover>
            </Popover>
        );
    }
}
export default CardInfo;