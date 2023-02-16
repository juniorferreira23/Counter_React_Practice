import React from 'react'

// const Menu = (props) => {

//     const links = props.links.map((link, index) => {
//         return <li key={index}>{link}</li>
//     })

//     return(
//         <nav>
//             <ul className='Menu'>
//                 {links}
//             </ul>
//         </nav>
//     )
// }

class Menu extends React.Component{

    links = this.props.links.map((link, index) => {
        return <li key={index}>{link}</li>
    })

    render(){
        return (
            <nav>
                <ul className='Menu'>
                    {this.links}
                </ul>
            </nav>
        )
    }
}

export default Menu