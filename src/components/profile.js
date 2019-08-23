import React from 'react';

class Profile extends React.Component {
    

    
    render() {
        const {data} = this.props;
        console.log("data in Profile : ", data);

        return (
            <>
                <div><img src={data.picture.thumbnail}/></div>
                <h2>{data.name.first}</h2>
                <p>{data.email}</p>
                <p>{data.location.state}, {data.location.city}</p>
            </>
        );
    }
}

export default Profile;