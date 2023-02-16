import React, { useEffect, useState } from 'react'

const Contador = (props) => {

    const [count, setCount] = useState(() => {
        return localStorage.getItem('count')? parseInt(localStorage.getItem('count')) : localStorage.setItem('count', props.count)
    })

    useEffect(() => {
        localStorage.setItem('count', count)
    },[count])

    useEffect(() => {
        return(() => {
            console.log('componentWillUnmoant')
        })
    }, [])

    const add = () => {
        setCount(count + 1)
    }

    return(
        <div className='Contador'>
            <h1>Contador: {count}</h1>
            <button onClick={add}>Adicionar</button>
        </div>
    )
}

// class Contador extends React.Component{

//     constructor(props){
//         super(props)
//         this.state = { count: 0 }
//         this.add = this.add.bind(this)
//     }

//     add(){
//         this.setState((state) => { return { count: state.count + 1} }, () => {
//             console.log(this.state.count)
//         })
//     }

//     componentDidMount(props){
//         let localStorageCount = this.count = localStorage.getItem('count')?parseInt(localStorage.getItem('count')):localStorage.setItem('count', props.count)
//         this.setState({count: localStorageCount})
        
//     }

//     componentDidUpdate(){
//         localStorage.setItem('count', this.state.count)
//     }

//     componentWillUnmount(){
//         console.log('componentWillUnmount')
//     }

//     render(){
//         return(
//             <div className='Contador'>
//                 <h1>Contador: {this.state.count}</h1>
//                 <button onClick={this.add}>Adicionar</button>
//             </div>
//         )
//     }
// }

export default Contador
