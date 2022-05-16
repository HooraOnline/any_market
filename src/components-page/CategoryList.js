import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {connect} from "react-redux";

import React from "react";
import {ScrollView, View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {FETCHED_START, CATEGORY} from '../store/modules/types';

const  CategoryList=(props)=>{
        const {isLoading,fetchCategories,message,categories} =props;
        //const dispatch = useDispatch();
        // Using the useSelector Hook to fetch the state from store.
        //const fetchedCategories = useSelector((state) => state.categories.items);

        useEffect(() => {
            //fetchCategories();
            //console.log(fetchedCategories);
        }, []);

        return (
            <View style={{flex:1}}>
                <TouchableOpacity style={{backgroundColor:'green',borderRadius:10,margin:10}} onPress={()=>{
                    fetchCategories();
                }}>
                    <Text style={{color:'#fff',padding:16,paddingHorizontal:50,fontSize:30,}}>Fetch Categories</Text>
                </TouchableOpacity>

                {isLoading? <Text style={{textAlign:'center', color:'red',fontSize:45,marginTop:50}}>Loading...</Text>:null}
                {message?<Text style={{textAlign:'center', color:'red',fontSize:45,marginTop:50}}>{message}</Text>:null}

                <ScrollView horizontal={false}>
                    {
                        categories.map(((item,index)=>(
                            <View key={index} style={styles.item}>
                                <Text style={styles.text} >{item.title}</Text>
                            </View>)))
                    }
                </ScrollView>

            </View>
        );
    }
function mapStateToProps(state){
   return {
       categories:state.categoryReducer.items,
       isLoading:state.categoryReducer.isLoading,
       message:state.categoryReducer.message,
   }
}
const  mapDispatchToProps=dispatch=>{
    return {
        //removeCategory:(id)=>dispatch(removeById(id)),
        fetchCategories:()=>dispatch({
            type: CATEGORY.FETCHED_START,
        }),

    }

}

export const getServerSideProps = async () => {
    const article = [];
    return {

        props: {
            article,
        },

    };
};
export default connect(mapStateToProps,mapDispatchToProps)(CategoryList);

const styles = StyleSheet.create({
    container: {
        alignItems: 'center',
        flexGrow: 1,
        justifyContent: 'center',
    },
    input: {
        height: 40,
        margin: 12,
        borderWidth: 1,
        borderColor:"#e1e1e1",
        borderRadius:8,
        padding: 10,
    },
    item: {
        backgroundColor: '#f9c2ff',
        padding: 20,
        marginVertical: 8,
        marginHorizontal: 16,
    },


    link: {
        color: 'blue',
    },
    textContainer: {
        alignItems: 'center',
        marginTop: 16,
    },
    text: {
        alignItems: 'center',
        fontSize: 24,
        marginBottom: 24,
    },
})


