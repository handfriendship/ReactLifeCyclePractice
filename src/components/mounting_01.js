import React from 'react';
import axios from 'axios';
import Profile from './profile';

//목표 : 이름 세개를 출력하기
class Mounting extends React.Component {

    state = {
        data: []
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
            request.onerror = err => rejects(err)
            request.send()
        })
    }

    componentWillMount = () => {
        this.getFakeMembers(3).then(
            members => {console.log(
              members.map(m=>m.name.first).join(','));
              console.log("members : ", members);   
              this.setState({data: members})
        })
    }    

    render() {
        
        
        
        return (
            <>
                {[...this.state.data].map(element => (
                    console.log("element : ", element),
                    <Profile data={element}/>
                ))}
            </>
        );
    }
}

export default Mounting;