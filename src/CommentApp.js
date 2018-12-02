import React, {Component} from"react"
import CommentInput from "./CommentInput.js"
import CommentList from "./CommentList.js"
import "./CommentApp.css"


class CommentApp extends Component{

    constructor(){
        super();
        this.state={
            comments:[]
        };

        console.log("constructor")
    }

    componentWillMount(){
        console.log("componentWillMount");
        this._loadComments()
    }


    componentDidMount(){
        console.log("componentDidMount")
    }

    _saveComments(comments){
        localStorage.setItem("comments",JSON.stringify(comments))
    }

    _loadComments(){
        let comments = localStorage.getItem("comments");
        if (comments){
            comments = JSON.parse(comments);
            this.setState({comments})
        }
    }


    handleSubmitComment(comment){
        if (!comment) return;
        if (!comment.username)return alert("请输入用户名");
        if (!comment.content)return alert("请输入评论内容");
        this.state.comments.push(comment);
        this.setState({
            comments:this.state.comments
        });
        this._saveComments(this.state.comments)
    }

    handleDeleteComment(index){
        const comments = this.state.comments;
        comments.splice(index, 1);
        this.setState({ comments });
        this._saveComments(comments)
    }

    render(){
        console.log("render");
        return(
            <div className="wrapper">
                <CommentInput onsubmit={this.handleSubmitComment.bind(this)}/>
                <CommentList comments ={this.state.comments}
                             onDeleteComment={this.handleDeleteComment.bind(this)}/>
            </div>
        )
    }
}

export default CommentApp