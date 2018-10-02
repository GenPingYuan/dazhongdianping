import React, { Component } from 'react';
import { ListView,PullToRefresh } from 'antd-mobile';

class ListViewAnt extends Component {
    constructor(props){
        super(props);
        this.initData = this.initData.bind(this);
        const dataSource = new ListView.DataSource({
            rowHasChanged: (row1, row2) => row1 !== row2,
        });
        this.state = {
            dataSource,
            isLoading: false,
        };
    }

    initData() {
        this.rData = this.props.dataSource;
        console.log(this.props.dataSource);
        this.setState({
            dataSource: this.state.dataSource.cloneWithRows(this.rData),
            isLoading: false,
        });
    }
    
    componentWillMount() {
       this.initData();
        
    }

    onEndReached = (event) => {
        this.props.loadMore(()=>{this.initData()});
       
      }

    loadMore = (event)=> {
    this.props.loadMore(()=>{this.initData()});
    }
    

    render() {
        return (
            <div>
                <ListView
                    ref={el => this.lv = el}
                    dataSource={this.state.dataSource}
                    // renderHeader={() => <span>header</span>}
                    // renderFooter={() => (<div style={{ padding: 30, textAlign: 'center' }}>
                    // {this.state.isLoading ? 'Loading...' : 'Loaded'}
                    // </div>)}
                    renderRow={this.props.renderRow}
                    renderSeparator={this.props.separator}
                    className="am-list"
                    pageSize={4}
                    useBodyScroll
                    scrollRenderAheadDistance={500}
                    onEndReached={!this.props.hasPullToRefresh ? this.onEndReached : function(){}}
                    onEndReachedThreshold={10}
                    pullToRefresh={this.props.hasPullToRefresh ? <PullToRefresh
                        direction="up"
                        refreshing="true"
                        onRefresh={this.loadMore}
                      /> : ''}
                />
            </div>
        );
    }
}

export default ListViewAnt;