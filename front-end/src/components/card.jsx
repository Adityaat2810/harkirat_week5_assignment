function Card({props}) {
    return (
        <div style={{ border: '1px solid white', padding: '10px' }}>
            {
                props.map(function (prop){
                    return(
                        <div>
                            <h2>name {prop.name}</h2>
                            <h2>{prop.shortDescription}</h2>
                            <button>Linked In</button>
                            <button>Github</button>
                            <button>Twitter</button>
                        </div>


                    )
                })
            }
            
        </div>
    );
}

export default Card;
