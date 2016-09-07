
'use strict';

import {StyleSheet,Platform} from 'react-native';
var Dimensions = require('Dimensions');
var {width, height} = Dimensions.get('window');

module.exports = StyleSheet.create({
  mainContainer:{
    flex:1,
    backgroundColor:'rgba(0,0,0,0.987131313)',
  },
  topBar:{
    backgroundColor:'#FE6060', flexDirection: 'column', justifyContent: 'space-between',
    position:'absolute',
    top:20,
    left: 2,
    right: 0,
    width:width-4,
  },
  topBarTop:{
    flexDirection: 'row',
    alignItems: 'center',
    width: width/3.6,
    justifyContent: 'space-between',
    marginTop:10,
    marginLeft:10,
    marginBottom:10,
  },
  projectName:{
    alignSelf:'center',
    alignItems:'center',
    color:'rgba(255,255,255,1)',
    marginLeft:80,
    fontSize:20,
    fontWeight:'400'
  },
  backIcon:{
    color:'white',
    alignSelf:'flex-start',
    alignItems:'flex-start',
    fontSize:32,
    fontWeight:'100'
  },
  scrollView:{
    left:2,
    width:width-4,
    marginTop:64,
    backgroundColor:'rgba(255,255,255,1)',
    marginBottom:40,
  },
  columnView:{
    padding:20,
  },
  columnViewHeader:{
    fontSize:16,
    fontWeight:'600',
    color:'rgba(0,0,0,0.578)',
    marginBottom:25,
  },
  columnViewInput:{
    borderWidth:0.5999,
    borderColor:'rgba(254,96,96,0.666)'
  },
  divider:{
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.0567)',
    marginTop:5,
    marginBottom:5,
  },
  bottomBar:{
    backgroundColor:'#eaeced', flexDirection: 'column', justifyContent: 'space-between',
    position:'absolute',
    bottom:2,
    left: 2,
    right: 0,
    width:width-4,
    flexDirection:'row',
    padding:10,
    alignItems: 'center',
    shadowOpacity: 0.523,
    shadowRadius: 1,
    shadowOffset: {
       height: 1,
       width: -1
     },
  },
  bottomBarText:{
    color:'rgba(0,0,0,0.467)',
    fontSize:16,
    fontWeight:'500',
  }
});
