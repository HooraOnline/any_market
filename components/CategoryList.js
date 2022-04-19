import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {connect} from "react-redux";
import {CATEGORIES_FETCHED_START} from "../redux/actionType";
import React from "react";
import {ScrollView, View, Text,StyleSheet} from "react-native";

const  CategoryList=(props)=>{
        const {isLoading,fetchCategories,message,categories} =props;
        const dispatch = useDispatch();
        // Using the useSelector Hook to fetch the state from store.
        //const fetchedCategories = useSelector((state) => state.categories.items);

        useEffect(() => {
            fetchCategories();
            //console.log(fetchedCategories);
        }, []);

        return (
            <>
                <Text  fontSize="4xl">Category List</Text>
                {isLoading? <Text fontSize="4xl">Loading...</Text>:null}
                {isLoading?<Text fontSize="4xl">{message}</Text>:null}

                <ScrollView horizontal={true}>

                    {
                        categories.map(((item,index)=>(
                            <View style={styles.item}>
                                <Text style={styles.text} >{item.categoryName}</Text>
                            </View>)))


                    }
                </ScrollView>

            </>
        );
    }
function mapStateToProps(state){
   return {
       categories:state.categoryState.items,
       isLoading:state.categoryState.isLoading,
       message:state.categoryState.message,
   }
}
const  mapDispatchToProps=dispatch=>{
    return {
        //removeCategory:(id)=>dispatch(removeById(id)),
        fetchCategories:()=>dispatch({
            type: CATEGORIES_FETCHED_START,
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


