export default function Logo() {
    const landrup = {
        position: 'absolute',
        left: '5%',
        bottom: '40%',
        color: 'rgba(210,97,223, 0.1)',
        fontSize: '35px',
        '-webkit-text-stroke-width': '1px',
        '-webkit-text-stroke-color': 'black',

    }
    const dans = {
        position: 'absolute',
        left: '5%',
        bottom: '33%',
        fontWeight: 'bold',
        fontSize: '60px',
        color: 'rgb(210,97,223)',
        textShadow: '-1px -1px 0 black, 1px -1px 0 black, -1px  1px 0 black,1px  1px 0 black',
        /* '-webkit-text-stroke-width': '.5px',
        '-webkit-text-stroke-color': 'black', */
    }
    const line = {

        backgroundColor: 'rgb(134,62,143)',
        width: '200px',
        height: '10px',
        position: 'absolute',
        left: '0',
        bottom: '32%',
    }



    
    return (
        <div>
            <div style={landrup}>LANDRUP</div>
            <div style={dans}>DANS</div>
            <div style={line}></div>
        </div>
    )
}
