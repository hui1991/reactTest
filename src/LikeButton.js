import {Component} from "react";
import React from "react";


class LikeButton extends Component{


    constructor(){
        super()
        this.state = {isLiked:false}
    }

    handleClick(){
        this.setState({
            isLiked:!this.state.isLiked
        })
    }

    render(){
        // const likedText = this.props.likedText || "取消";
        // const unlikeText = this.props.unlikeText || "点赞";

        const wordings = this.props.wordings || {
            likedText:"取消",
            unlikeText:"点赞",
        };

        return(
            <button onClick={this.handleClick.bind(this)}>
                {this.state.isLiked?wordings.likedText:wordings.unlikeText}👍
            </button>
        )
    }
}

export default LikeButton;
