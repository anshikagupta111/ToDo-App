import { StyleSheet } from "react-native"
export default StyleSheet.create({
  modalContainer:{
    width:340.62,
    height:297.24,
    marginTop:128.76,
    marginLeft:17.13,
    borderRadius:10,
    borderWidth:1,
    borderColor:'#EBEFF5',
    backgroundColor: 'white'
    
  },
  myCategoryCard:{
    height:100,
    
  },
  colorButton:{
    height:15,
    width:15,
    borderWidth:1,
    borderRadius:20,
    // marginRight:10
  },
  editButton:{
    color:'red',
    marginRight:4
  },
  listModal:{
    height:100,
    // backgroundColor:'black',
    width:200
  },
  categoryCard:{
    height:80,
    borderRadius:15,
    justifyContent:'center',
    // marginLeft:60,
    marginBottom:8
  },
  categoryName:{
    fontWeight:'bold',
    color:'white',
    marginLeft:30
  },
 tasklist:{
//   marginLeft:40
// marginRight:100
flex:1,
marginLeft:10
 },
  line:{
    height:1,
  
    backgroundColor:'grey'
  },
  // flatlist:{
  // justifyContent:'space-between'
  // },
  donebutton:{
    height:44,
    width:298,
    flexDirection:'row',
    marginTop:10,
    marginLeft:33
  },
  textInput:{
    width:298,
    height:148,
    marginTop:14,
    marginLeft:20,
   borderRadius:10,
    borderWidth:2,
    borderColor:"#EBEFF5",
    textAlignVertical:'top'
  },
  list:{
      //  backgroundColor: '#61DEA4',
    padding: 15,
    marginBottom: 10,
    borderRadius: 10,
    
    justifyContent:'space-between',
    flexDirection:'row',
    height:55


  },
  checkbox:{
    borderRadius:20,
    backgroundColor:'white',
    height:30,
    width:30,
    justifyContent:'center',
    alignItems:'center',
    borderWidth:1,
    borderColor:'grey',
    flexDirection:'row',
    alignContent:'center'

  },
  todo:{
    width:107,
    height:41,
    marginTop:10,
    marginLeft:30,
    fontWeight:700,
    fontSize:18,
    lineHeight:41,
    letterSpacing:1
  },
  cancel:{
    // flexDirection:'row',
    width:86,
    height:40,
    marginTop:11,
    marginLeft:12.71,
    
    
  },
  
  done:{
     width:86,
    height:40,
    marginTop:11,
    // position:
    marginLeft:123.53,
  },
  donetext:{
    fontWeight:600,
    fontSize:18,
    letterSpacing:-0.43,
    color:"#006CFF"
  },
  canceltext:{
    color:"#006CFF",
    fontWeight:400,
    fontSize:18,
    letterSpacing:-0.43,
  },

  container:{
    flex:1,
     paddingTop: 60,
      paddingHorizontal: 20 ,
      backgroundColor: '#FFF', 
      
      // paddingTop: 60,
      //  paddingHorizontal: 20
  },
  header:{
    flexDirection:'row',
    // height:73,
    // width: 353,
    justifyContent: 'space-between', alignItems: 'center', marginBottom: 30
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  circle:{
    width: 40,
    height: 40,
    borderRadius: 20,               // Circle shape
    borderWidth: 2,
    borderColor: '#006CFF',         // Blue border
    justifyContent: 'center',
    alignItems: 'center',
  },
  plus:{
 fontSize: 24,
    color: '#006CFF',               // Blue +
    lineHeight: 26,
    fontWeight: '600',
    marginTop: -2, 

  },
  headercontent:{
    fontSize:32,
    letterSpacing:1,
    fontWeight:700,
    lineHeight:41,
  



  }
})