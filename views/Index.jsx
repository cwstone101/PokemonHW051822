const React = require('react'); 
const pokemon = require('../models/pokemon');

const myStyle = {
    color: '#7BE495',
    backgroundColor: '205072'
    
}
class Index extends React.Component {

    render() {
        const {pokemon} = this.props;
        return (
            <>
                <div style={myStyle}>
                <h1>See All The Pokemon!</h1>
                </div>
                <ul>
                    {pokemon.map((pokemon, i) => {
                        return(
                            <li>
                             <a href={`/pokemon/${i}`}>{capitalize(pokemon.name)}</a>{' '} I Choose You!
                    
                            </li>
                        )

                    })}
                </ul>
            </>
            
        );
    }
}

function capitalize(str){
    return str.charAt(0).toUpperCase() + str.slice(1);
}




module.exports = Index;
















