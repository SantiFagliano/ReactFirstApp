import React, { Component } from "react";

export default class Posts extends Component {
    state = {
        posts:[]
    }
    async componentDidMount() {
        const res = await fetch("https://jsonplaceholder.typicode.com/posts");
        const data = await res.json();
        this.setState({posts: data})
    }

    render() {
        return (
        <div>
            <h1>Posts</h1>
            <div className="">
                {
                    this.state.posts.map(post => {
                        return (
                            <div key={post.id} className="text-center border my-3 p-1">
                                <h5 className="text-success fw-bold text-uppercase">{post.title} - <span className="text-danger">{post.id}</span></h5>
                                <p className="text-secondary text-start"> • {post.body}</p>
                            </div>
                        )
                    })
                }
            </div>
        </div>
        );
    }
}
