import React from 'react';

class NavBar extends React.Component {
    render(){
        return (
            <>
                <nav className = "bg-blue-300 h-auto flex center flex-col">
                    <div className ="justify-centre m-auto">
                        <h1 className = "text-2xl p-5">Ramsden Fitness</h1>
                    </div>
                    <ul className = "flex w-1/2 justify-between justify-centre m-auto flex-wrap mb-3">
                        <li className = "text-1xl uppercase">Home</li>
                        <li className = "text-1xl uppercase">About</li>
                        <li className = "text-1xl uppercase">Our Work</li>
                        <li className = "text-1xl uppercase">Contact</li>
                    </ul>
                </nav>
            </>
        )
    }
}

export default NavBar