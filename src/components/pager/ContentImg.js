import React, {Component} from 'react';
import InfiniteLoader from 'react-infinite-loader';
import ColumnImg from './ColumnImg';
import {getBrowserPlatform} from '../../util/MyUtil';
import  'whatwg-fetch';
import {showProgress, showModal} from  '../../action/customAction';
import store from '../../store';
const styles = {
    imageContent: {
        width: '100%',
        display: 'flex',
        flexDirection: 'row',
    },


}

class ContentImg extends Component {
    constructor(props) {
        super(props);
        this.state = {
            data: []
        };

    }

    //组件加载完成
    componentDidMount() {
        if (getBrowserPlatform() === 'phone') {
            if (this.props.column < 2) {
                alert('column >= 2');
                throw RangeException('column >= 2');
            }
        } else {
            if (this.props.column < 4 || this.props.column > 10) {
                alert('4 <= column <= 10');
                throw RangeException('4 <= column <= 10');
            }
        }


        this.loadItems();
    }

    //加载更多
    loadItems() {
        let vm = this;
        let page = this.state.data.length / 10 + 1;
        fetch(`http://gank.io/api/data/福利/10/${page}`)
            .then(function (response) {
                return response.json();
            })
            .then(function (data) {

                let arrayData = [];
                data.results.forEach((userInfo)=> {
                    userInfo.url = userInfo.url.replace('http://ww1.sinaimg.cn', 'http://ww3.sinaimg.cn');
                    arrayData.push(userInfo);
                });

                //dispatch 隐藏进度条事件
                store.dispatch(showProgress({showProgress: 'none'}));
                let newArr = vm.state.data.concat(arrayData);
                vm.setState({data: newArr});

            }).catch(function (ex) {
            console.log('ex===>', ex);
        });
    }

    //加载更多事件
    handleVisit() {
        //dispatch 显示进度条事件
        store.dispatch(showProgress({showProgress: 'flex'}));
        this.loadItems();
    }

    render() {
        let {showProgress, column, showModal} = this.props;
        let CardImgColums = [];
        let columns = [];
        //组合方法
        function mix(column, index, array) {
            if (columns[column]) {
                columns[column].push(array[index]);
            } else {
                let column = [];
                column.push(array[index]);
                columns.push(column);
            }
        }

        for (let index in this.state.data) {
            //分组
            mix(index % column, index, this.state.data);
        }

        for (let index in columns) {
            let element = columns[index];
            CardImgColums.push(<ColumnImg
                element={element}
                column={column}
                key={index}
                showModal={showModal}
            />);
        }

        return (
            <div>
                <div style={styles.imageContent}>
                    {CardImgColums}
                </div>
                <InfiniteLoader onVisited={() => this.handleVisit() }/>
                <div style={{
                    display: showProgress,
                    flexDirection: 'row',
                    justifyContent: 'center'
                }}>
                    <p>加载中....</p>
                </div>
            </div>
        );
    }


}


export default ContentImg;