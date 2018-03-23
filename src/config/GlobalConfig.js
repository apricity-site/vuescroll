export default {
    // vuescroll
    scrollPanel: {
        initialScrollY: false,
        initialScrollX: false,
        speed: 300,
        easing: undefined
    },
    // 
    scrollContent: {
        tag: 'div',
        padding: true,
        height: '100%',
        props: {
        },
        attrs: {
        }
    },
    // 
    vRail: {
        width: '5px',
        pos: 'right',
        background: "#a5d6a7",
        opacity: 0 //'0.5'
    },
    // 
    vBar: {
        width: '5px',
        pos: 'right',
        background: '#4caf50',
        deltaY: 100,
        keepShow: false,
        opacity: 1,
    },
    // 
    hRail: {
        height: '5px',
        pos: 'bottom',
        background: "#a5d6a7",
        opacity: 0 //'0.5'
    },
    // 
    hBar: {
        height: '5px',
        pos: 'bottom',
        background: '#4caf50',
        keepShow: false,
        opacity: 1
    } 
}