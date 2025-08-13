import { StyleSheet } from "react-native"
import {
  responsiveHeight as hp,
  responsiveWidth as wp,
  responsiveFontSize as fp
} from "react-native-responsive-dimensions";

const styles= StyleSheet.create({
  modalContainer:{
 
    width: wp(90.83),
    height: hp(42.77),
    marginTop: hp(15.86),
    marginLeft: wp(4.57),
    borderRadius: 10,
    borderWidth: 1,
    borderColor: '#EBEFF5',
    backgroundColor: 'white',
    
  },
 

   centeredview: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
  },

homemodal:{
   flex: 1,
    height: '80%',
    width: '100%',
    marginTop: hp(6.52),
    borderTopLeftRadius: 50,
    borderTopRightRadius: 50,
},

  colorButton:{
    height: hp(1.85),
    width: wp(4.0),
    borderWidth: 1,
    borderRadius: 20,
    // marginRight:10
  },
  editButton:{
    color:'red',
    marginRight: wp(1.07),
  },
  listModal:{
    height: hp(12.31),
    // backgroundColor: 'black',
    width: wp(53.33),
  },
  searchContainer:{
    borderWidth: 1,
    borderColor: 'grey',
    width: wp(37.33),
    borderRadius: 20,
    color: 'grey',
    marginLeft: wp(13.33),
    textAlign: 'center',
    
    
  },
  categoryCard:{
    height: hp(9.85),
    borderRadius: 15,
    justifyContent: 'center',
    marginBottom: hp(0.99)
  },
  categoryName:{
    fontWeight:'bold',
    color:'white',
    marginLeft: wp(8),
  },
 tasklist:{
//   marginLeft:40
// marginRight:100
flex:1,
    marginLeft: wp(2.67),
 },
  line:{
    height:1,
  
    backgroundColor:'grey'
  },
  // flatlist:{
  // justifyContent:'space-between'
  // },
  donebutton:{
   height: hp(5.42),
    width: wp(79.47),
    flexDirection: 'row',
    marginTop: hp(1.23),
    marginLeft: wp(8.8),
   
  },
  textInput:{
    width: wp(79.47),
    height: hp(18.23),
    marginTop: hp(1.72),
    marginLeft: wp(5.33),
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#EBEFF5",
    textAlignVertical: 'top',
  },
  list:{
      //  backgroundColor: '#61DEA4',
     padding: wp(4),
    marginBottom: hp(1.23),
    borderRadius: 10,
    justifyContent: 'space-between',
    flexDirection: 'row',
    height: hp(6.77),


  },
  checkbox:{
   borderRadius: 20,
    backgroundColor: 'white',
    height: hp(3.69),
    width: wp(8),
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: 'grey',
    flexDirection: 'row',
    alignContent: 'center',

  },
  todo:{
   width: wp(28.53),
    height: hp(5.05),
    marginTop: hp(1.23),
    marginLeft: wp(8),
    fontWeight: '700',
    fontSize: 18,
    lineHeight: 41,
    letterSpacing: 1,
  },
  cancel:{
    // flexDirection:'row',
  width: wp(23.2),
    height: hp(4.93),
    marginTop: hp(1.35),
    marginLeft: wp(3.39),
    
    
  },
  
  done:{
      width: wp(22.93),
    height: hp(4.93),
    marginTop: hp(1.35),
    // position: 
    marginLeft: wp(32.94),
  },
  donetext:{
    fontWeight: '600',
    fontSize: 18,
    letterSpacing: -0.43,
    color: "#006CFF",
  },
  canceltext:{
     color: "#006CFF",
    fontWeight: '400',
    fontSize: 18,
    letterSpacing: -0.43,
  },

  container:{
      flex: 1,
    paddingTop: hp(2.46),
    paddingHorizontal: wp(5.33),
    backgroundColor: '#FFF',
      // paddingTop: 60,
      //  paddingHorizontal: 20
  },
  header:{
    flexDirection: 'row',
    // height: hp(...), 
    // width: wp(...),  
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp(1.23),
     
    // justifyContent: 'center',
    // alignItems: 'center',
  },
  circle:{
    width: wp(10.67),
    height: hp(4.93),
    borderRadius: 20,
    borderWidth: 2,
    borderColor: '#006CFF',
    justifyContent: 'center',
    alignItems: 'center',
  },
  plus:{
 fontSize: 24,
   color: '#006CFF',
    lineHeight: 26,
    fontWeight: '600',
    marginTop: hp(-0.25),

  },
  headercontent:{
     fontSize: 32,
    letterSpacing: 1,
    fontWeight: '700',
    lineHeight: 41,
  },
  modalheadercontent:{
     fontSize: 32,
    letterSpacing: 1,
    fontWeight: '700',
    lineHeight: 41,
    color: 'white',
    alignSelf: 'center',
    marginTop: hp(1.23),
  },
  taskText: {
  fontSize: 16,
  color: 'white',
},
taskContainer: {
  flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: wp(4.27),
    paddingVertical: hp(1.48),
},
taskItem:{
  flexDirection:'row'
},
buttonItem:{
  flexDirection:'row'
},
clickchecks: {
    width: wp(6.4),
    height: hp(2.95),
    borderRadius: 12,
    borderWidth:2,
    borderColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
  marginRight: 12,
},
modalclose:{
height: hp(0.98),
    backgroundColor: 'white',
    borderRadius: 10,
    alignSelf: 'center',
    marginTop: hp(0.49),
    width: wp(40),
},










 modalBackground: {
    flex: 1,
  
    justifyContent: 'center',
  },
  closeArea: {
    flex: 1,
  },
  content: {
    flex: 0,
    padding: 20,
    borderRadius: 10,
  },

})
export default styles