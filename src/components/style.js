import { makeStyles } from '@material-ui/core'


const centeredStyleObj = {
    display: 'flex',
    alignItems: 'center',

}

export default makeStyles ({
 
    map: {
        height:'10vh',
        flexDirection: 'row',
        ...centeredStyleObj

    },
    content:{
        direction:"row",
        justify:"center",
        alignItems:"strech",
        justifycontent: 'spacebetween',
        flexwrap:'nowrap',

    },
    text:{
        
        justifyContent: 'flex-end',
        ...centeredStyleObj,

    },
    title:{
        fontSize:'4rem',
        fontfamily: 'Montserrat ',
        color:'#9b142b',
        ...centeredStyleObj,
    },
    cardContainer:{   
        fontfamily: 'Montserrat ',
        color:'#9b142b',
    
        alignself: 'flex-end',
   
        ...centeredStyleObj

    },
   
    imgGridContainer:{
        width: '100%'
        
       
    },
  
    
});