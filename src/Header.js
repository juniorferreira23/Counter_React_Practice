import React from 'react'
import Menu from './Menu.js'

// const Header = (props) => {
//     return (
//         <div className='Header'>
//             <h1>{props.logo}</h1>
//             <Menu links={props.links}></Menu>
//         </div>
//     )
// }

class Header extends React.Component {
    render(){
        return (
            <div className='Header'>
                <h1>{this.props.logo}</h1>
                <Menu links={this.props.links}></Menu>
            </div>
        )
    }
}

export default Header