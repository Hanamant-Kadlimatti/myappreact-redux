import React, {Component} from 'react';

class Ninjas extends Component {
    render () {
        // console.log(this.props);

        //Destructuring
        // const {name, age, belt} = this.props
        const {ninjas, deleteNinja} = this.props
        // const ninjaList = ninjas.map( ninja => {
        //    if(ninja.age > 20) {
        //     return(
        //         <div className="ninja" key={ninja.id}>
        //         {/* <div> Name: {this.props.name}</div>
        //         <div> Age: {this.props.age} </div>
        //         <div> Belt: {this.propsbelt}</div> */}
  
        //          <div> Name: {ninja.name}</div>
        //         <div> Age: {ninja.age} </div>
        //         <div> Belt: {ninja.belt}</div>
        //         <div> Id: {ninja.id}</div>
        //       </div>
        //     )
        //    }else {
        //        return null
        //    }
        // })

        const ninjaList = ninjas.map( ninja => {
         return ninja.age > 20 ? (
            <div className="ninja" key={ninja.id}>
            {/* <div> Name: {this.props.name}</div>
            <div> Age: {this.props.age} </div>
            <div> Belt: {this.propsbelt}</div> */}

             <div> Name: {ninja.name}</div>
            <div> Age: {ninja.age} </div>
            <div> Belt: {ninja.belt}</div>
            <div> Id: {ninja.id}</div>
            <button onClick={() =>{deleteNinja(ninja.id)}}> Delete Ninja</button>
          </div>
         ) : null
        })
        return (
            <div className="ninja-list">
               {ninjaList}
            </div>
        )
    }
}

export default Ninjas