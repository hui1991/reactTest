
import {Component} from "react";
import React from "react";






class User extends Component{

    render(){
        const {user} = this.props;
        return (
            <div>
                <div>
                    <div>姓名: {user.username}</div>
                    <div>年龄：{user.age}</div>
                    <div>性别：{user.gender}</div>
                    <hr/>
                </div>
            </div>
        )
    }
}

export default User
