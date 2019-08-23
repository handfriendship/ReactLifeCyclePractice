import React from 'react';
import axios from 'axios';
import Profile from './profile';

//목표 : 이름 세개를 출력하기
class Mounting extends React.Component {

    state = {
        loading: false,
        data: [],
        error: []
    }
    
    /*
    getFakeMemberss = () => {
        return new Promise(function (resolve, reject){
            const response = axios.get('https://api.randomuser.me/?nat=US&results=3');
            console.log("response : ", response);

            resolve(response);
        })
    }
    */

    getFakeMembers = (count) => {
        return new Promise((resolves, rejects) => {
            const api = `https://api.randomuser.me/?nat=US&results=${count}`
            const request = new XMLHttpRequest();
            request.open('GET', api);
            request.onload = () => (request.status == 200) ?
                resolves(JSON.parse(request.response).results) :
                rejects(new Error(request.statusText))
            //request.onload = () => rejects(new Error(request.statusText));
            request.onerror = err => rejects(err)
            request.send()
        })
    }

    componentWillMount = () => {
        this.setState({loading:true})
        this.getFakeMembers(5).then((result) => {
            this.setState({data: result, loading:false})
        }, (err) => {
            this.setState({error: err, loading:false})
            }   
        )
    }   
    
    componentWillUpdate = () => {
        console.log("componentWillUpdate() called!");
    }

    render() {
        const {loading, data, error} = this.state;
        
        return (
            <>
                {loading ? 
                    <span>Profile loading...</span> :
                    [...data].map(element => (
                        console.log("element : ", element),
                        <Profile data={element}/>
                    ))
                }
                {
                    error ? <div>{error}</div> : <></>
                }
            </>
        );
    }
}

export default Mounting;