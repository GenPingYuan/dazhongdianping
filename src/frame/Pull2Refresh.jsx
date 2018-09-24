import React, { Component } from 'react';
import { PullToRefresh } from 'antd-mobile';
import ReactDOM from 'react-dom';
class Pull2Refresh extends Component {
    constructor(props) {
        super(props);
        this.state = {
            height: document.documentElement.clientHeight,
        };
    }

    componentDidMount() {
        const hei = this.state.height - ReactDOM.findDOMNode(this.ptr).offsetTop;
        setTimeout(() => this.setState({
          height: hei
        }), 0);
      }

    render() {
        return (
            <div>
                <PullToRefresh
                    ref={el => this.ptr = el}
                    style={{
                      height: this.state.height,
                       overflow: 'auto',
                    }}
                    damping={this.props.damping ? this.props.damping : '60'}//拉动距离限制, 建议小于 200
                    indicator={this.props.down ? {} : { deactivate: '上拉可以刷新' }}//指示器配置 { activate: ReactNode, deactivate: ReactNode, release: ReactNode, finish: ReactNode }	
                    direction={this.props.down ? 'down' : 'up'}//direction
                    refreshing={this.props.refreshing ? this.props.refreshing : false}//是否显示刷新状态	
                    onRefresh={this.props.onRefresh}
                >
                    {this.props.children ? this.props.children : ""}
                </PullToRefresh>
            </div>
        );
    }
}

export default Pull2Refresh;