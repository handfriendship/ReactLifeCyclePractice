import React from 'react';

const Professor = ({ professor }) => {
    return (
        <li>
            {professor.name}
            {professor.phone}
        </li>
    );
}

function ProfessorList(props) {
    //console.log(props);
    //const key1 = props.key1;
    const {key1} = props;
    return (
        <div>
            <h2>교수 목록</h2>
            {
                key1.map(professor => 
                    <Professor professor={professor}/>
                )
            }
            
        </div>
    );
}

export default ProfessorList;
//return 안에서 {}을 통해 자바스크립트 문법을 쓸 때는, 하나의 표현식을 써야함. if같은거는 못씀.