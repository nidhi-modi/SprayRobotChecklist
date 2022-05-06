import React, { Component } from 'react';
import { StyleSheet, View, BackHandler, Text, TouchableOpacity, TouchableHighlight, Image } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-community/async-storage';
import DropDownPicker from 'react-native-dropdown-picker';
import { SafeAreaView } from 'react-native-safe-area-context';

var houseSelected;

class RadioButton extends Component {
    constructor() {
        super();


    }

    render() {
        return (
            <TouchableOpacity onPress={this.props.onClick} activeOpacity={0.8} style={styles.radioButton}>
                <View style={[styles.radioButtonHolder, { height: this.props.button.size, width: this.props.button.size, borderColor: this.props.button.color }]}>
                    {
                        (this.props.button.selected)
                            ?
                            (<View style={[styles.radioIcon, { height: this.props.button.size / 2, width: this.props.button.size / 2, backgroundColor: this.props.button.color }]}></View>)
                            :
                            null
                    }
                </View>
                <Text style={[styles.label, { color: this.props.button.color }]}>{this.props.button.label}</Text>
            </TouchableOpacity>
        );
    }
}


export default class GerSite extends React.Component {

    constructor(props) {
        super(props)

        this.state = {

            siteName: '',
            sprayRobotNumber: '',
            itemSelected: '',
            radioOption1: '',
            radioOption2: '',
            radioOption3: '',
            radioOption4: '',
            radioOption5: '',
            radioOption6: '',
            radioOption7: '',
            radioOption8: '',
            radioOption9: '',

            radioItems1:
                [

                    {
                        label: 'Yes',
                        size: 30,
                        color: 'green',
                        selected: false,

                    },

                    {
                        label: 'No',
                        size: 30,
                        color: 'red',
                        selected: false
                    }
                ],

            radioItems2:
                [

                    {
                        label: 'Yes',
                        size: 30,
                        color: 'green',
                        selected: false,

                    },

                    {
                        label: 'No',
                        size: 30,
                        color: 'red',
                        selected: false
                    }
                ],

            radioItems3:
                [

                    {
                        label: 'Yes',
                        size: 30,
                        color: 'green',
                        selected: false,

                    },

                    {
                        label: 'No',
                        size: 30,
                        color: 'red',
                        selected: false
                    }
                ],

            radioItems4:
                [

                    {
                        label: 'Yes',
                        size: 30,
                        color: 'green',
                        selected: false,

                    },

                    {
                        label: 'No',
                        size: 30,
                        color: 'red',
                        selected: false
                    }
                ],

            radioItems5:
                [

                    {
                        label: 'Yes',
                        size: 30,
                        color: 'green',
                        selected: false,

                    },

                    {
                        label: 'No',
                        size: 30,
                        color: 'red',
                        selected: false
                    }
                ],

            radioItems6:
                [

                    {
                        label: 'Yes',
                        size: 30,
                        color: 'green',
                        selected: false,

                    },

                    {
                        label: 'No',
                        size: 30,
                        color: 'red',
                        selected: false
                    }
                ],

            radioItems7:
                [

                    {
                        label: 'Yes',
                        size: 30,
                        color: 'green',
                        selected: false,

                    },

                    {
                        label: 'No',
                        size: 30,
                        color: 'red',
                        selected: false
                    }
                ],

            radioItems8:
                [

                    {
                        label: 'Yes',
                        size: 30,
                        color: 'green',
                        selected: false,

                    },

                    {
                        label: 'No',
                        size: 30,
                        color: 'red',
                        selected: false
                    }
                ],

            radioItems9:
                [

                    {
                        label: 'Yes',
                        size: 30,
                        color: 'green',
                        selected: false,

                    },

                    {
                        label: 'No',
                        size: 30,
                        color: 'red',
                        selected: false
                    }
                ],

        }


    }

    //Ristrict back press
    handleBackButton = () => {

        BackHandler.exitApp();

    }

    onButtonPress = () => {
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
        // then navigate
        navigate('NewScreen');
    }

    componentDidMount() {

        BackHandler.addEventListener('hardwareBackPress', this.handleBackButton);

        //GET SITE NAME THROUGHT ASYNC STORAGE STOR
        this.getSiteName();

    }



    getSiteName = () => {

        try {

            AsyncStorage.getItem('house').then((text1Value) => {
                houseSelected = JSON.parse(text1Value);
                this.setState({ siteName: houseSelected });

            }).done();
        } catch (error) {


        }
    }

    //GENERIC TEXTINPUT TYPE

    updateTextInput = (text, field) => {
        this.setItem(field, text)
        const state = this.state
        state[field] = text;
        this.setState(state);
    }


    //SPRAY NUMBERS

    numberPressed = (number) => {


        console.log(number);
        this.setState({ itemSelected: number })


    }



    //

    //ITEM 1

    changeItem1(index) {
        this.state.radioItems1.map((item) => {
            item.selected = false;
        });

        this.state.radioItems1[index].selected = true;

        this.setState({ radioItems1: this.state.radioItems1 }, () => {
            this.setState({ radioOption1: this.state.radioItems1[index].label });
        });
    }

    //

    //ITEM 2

    changeItem2(index) {
        this.state.radioItems2.map((item) => {
            item.selected = false;
        });

        this.state.radioItems2[index].selected = true;

        this.setState({ radioItems2: this.state.radioItems2 }, () => {
            this.setState({ radioOption2: this.state.radioItems2[index].label });
        });
    }

    //

    //ITEM 3

    changeItem3(index) {
        this.state.radioItems3.map((item) => {
            item.selected = false;
        });

        this.state.radioItems3[index].selected = true;

        this.setState({ radioItems3: this.state.radioItems3 }, () => {
            this.setState({ radioOption3: this.state.radioItems3[index].label });
        });
    }

    //

    //ITEM 4

    changeItem4(index) {
        this.state.radioItems4.map((item) => {
            item.selected = false;
        });

        this.state.radioItems4[index].selected = true;

        this.setState({ radioItems4: this.state.radioItems4 }, () => {
            this.setState({ radioOption4: this.state.radioItems4[index].label });
        });
    }

    //

    //ITEM 5

    changeItem5(index) {
        this.state.radioItems5.map((item) => {
            item.selected = false;
        });

        this.state.radioItems5[index].selected = true;

        this.setState({ radioItems5: this.state.radioItems5 }, () => {
            this.setState({ radioOption5: this.state.radioItems5[index].label });
        });
    }

    //

    //ITEM 6

    changeItem6(index) {
        this.state.radioItems6.map((item) => {
            item.selected = false;
        });

        this.state.radioItems6[index].selected = true;

        this.setState({ radioItems6: this.state.radioItems6 }, () => {
            this.setState({ radioOption6: this.state.radioItems6[index].label });
        });
    }

    //

    //ITEM 7

    changeItem7(index) {
        this.state.radioItems7.map((item) => {
            item.selected = false;
        });

        this.state.radioItems7[index].selected = true;

        this.setState({ radioItems7: this.state.radioItems7 }, () => {
            this.setState({ radioOption7: this.state.radioItems7[index].label });
        });
    }

    //

    //ITEM 8

    changeItem8(index) {
        this.state.radioItems8.map((item) => {
            item.selected = false;
        });

        this.state.radioItems8[index].selected = true;

        this.setState({ radioItems8: this.state.radioItems8 }, () => {
            this.setState({ radioOption8: this.state.radioItems8[index].label });
        });
    }

    //

    //ITEM 9

    changeItem9(index) {
        this.state.radioItems9.map((item) => {
            item.selected = false;
        });

        this.state.radioItems9[index].selected = true;

        this.setState({ radioItems9: this.state.radioItems9 }, () => {
            this.setState({ radioOption9: this.state.radioItems9[index].label });
        });
    }

    //

    render() {


        return (


            <ScrollView style={styles.formContainer}
                keyboardShouldPersistTaps='handled'>

                <SafeAreaView>

                <Text style={styles.siteNameText}>{this.state.siteName}</Text>

                <View style={styles.marginDimension}></View>

                <View style={styles.marginDimension}></View>

                <Text style={styles.titleHeadingText}>1)  Select Spray Robot Number: </Text>

                <View style={styles.marginDimension}></View>

                <View style={styles.marginDimension}></View>

                <View style={styles.marginDimension}></View>


                <View style={styles.alignNumbersColumn}>


                    <TouchableHighlight
                        onPress={() => { this.numberPressed('1') }}
                        style={this.state.itemSelected == '1' ? styles.responsiveCircle : null}>
                        <Text style={this.state.itemSelected == '1' ? styles.setSprayNumbersWhenClicked : styles.setSprayNumbers}>1</Text>
                    </TouchableHighlight>

                    <TouchableHighlight
                        onPress={() => { this.numberPressed('2') }}
                        style={this.state.itemSelected == '2' ? styles.responsiveCircle : null}>
                        <Text style={this.state.itemSelected == '2' ? styles.setSprayNumbersWhenClicked : styles.setSprayNumbers}>2</Text>
                    </TouchableHighlight>

                    <TouchableHighlight
                        onPress={() => { this.numberPressed('3') }}
                        style={this.state.itemSelected == '3' ? styles.responsiveCircle : null}>
                        <Text style={this.state.itemSelected == '3' ? styles.setSprayNumbersWhenClicked : styles.setSprayNumbers}>3</Text>
                    </TouchableHighlight>

                    <TouchableHighlight
                        onPress={() => { this.numberPressed('4') }}
                        style={this.state.itemSelected == '4' ? styles.responsiveCircle : null}>
                        <Text style={this.state.itemSelected == '4' ? styles.setSprayNumbersWhenClicked : styles.setSprayNumbers}>4</Text>
                    </TouchableHighlight>


                </View>

                <View style={styles.inBtnmarginDimension}></View>

                <View style={styles.direction}>
                    <Text style={styles.titleHeadingText}>2)  Correct nozzle type: </Text>
                    <View style={styles.leftmarginDimension}></View>

                    <TouchableOpacity style={styles.TouchableOpacityStyle}
                        onPress={() => console.log("Pressed")}>
                        <Image source={require('../images/comments.png')}

                            style={styles.FloatingButtonStyle2} />

                    </TouchableOpacity>
                </View>

                <View style={styles.inBtnmarginDimension}></View>

                <View style={styles.flexDirection}>

                    {
                        this.state.radioItems1.map((item, key) =>
                        (
                            <RadioButton key={key} button={item} onClick={this.changeItem1.bind(this, key)} />
                        ))
                    }


                </View>


                <View style={styles.inBtnmarginDimension}></View>

                <View style={styles.direction}>
                    <Text style={styles.titleHeadingText}>3)  Nozzles are not blocked: </Text>
                    <View style={styles.leftmarginDimension}></View>

                    <TouchableOpacity style={styles.TouchableOpacityStyle}
                        onPress={() => console.log("Pressed")}>
                        <Image source={require('../images/comments.png')}

                            style={styles.FloatingButtonStyle2} />

                    </TouchableOpacity>
                </View>


                <View style={styles.inBtnmarginDimension}></View>

                <View style={styles.flexDirection}>

                    {
                        this.state.radioItems2.map((item, key) =>
                        (
                            <RadioButton key={key} button={item} onClick={this.changeItem2.bind(this, key)} />
                        ))
                    }


                </View>


                <View style={styles.inBtnmarginDimension}></View>

                <View style={styles.direction}>
                    <Text style={styles.titleHeadingText}>4)  Noozles are open: </Text>
                    <View style={styles.leftmarginDimension}></View>

                    <TouchableOpacity style={styles.TouchableOpacityStyle}
                        onPress={() => console.log("Pressed")}>
                        <Image source={require('../images/comments.png')}

                            style={styles.FloatingButtonStyle2} />

                    </TouchableOpacity>
                </View>


                <View style={styles.inBtnmarginDimension}></View>

                <View style={styles.flexDirection}>

                    {
                        this.state.radioItems3.map((item, key) =>
                        (
                            <RadioButton key={key} button={item} onClick={this.changeItem3.bind(this, key)} />
                        ))
                    }


                </View>


                <View style={styles.inBtnmarginDimension}></View>

                <View style={styles.direction}>
                    <Text style={styles.titleHeadingText}>5)  Nozzle filters and robot {"\n"}    filter are clean: </Text>
                    <View style={styles.leftmarginDimension}></View>

                    <TouchableOpacity style={styles.TouchableOpacityStyle}
                        onPress={() => console.log("Pressed")}>
                        <Image source={require('../images/comments.png')}

                            style={styles.FloatingButtonStyle2} />

                    </TouchableOpacity>
                </View>


                <View style={styles.inBtnmarginDimension}></View>

                <View style={styles.flexDirection}>

                    {
                        this.state.radioItems4.map((item, key) =>
                        (
                            <RadioButton key={key} button={item} onClick={this.changeItem4.bind(this, key)} />
                        ))
                    }


                </View>


                <View style={styles.inBtnmarginDimension}></View>

                <View style={styles.direction}>
                    <Text style={styles.titleHeadingText}>6)  Front/side noozle on and {"\n"}     pressure reading: </Text>
                    <View style={styles.leftmarginDimension}></View>

                    <TouchableOpacity style={styles.TouchableOpacityStyle}
                        onPress={() => console.log("Pressed")}>
                        <Image source={require('../images/comments.png')}

                            style={styles.FloatingButtonStyle2} />

                    </TouchableOpacity>
                </View>


                <View style={styles.inBtnmarginDimension}></View>

                <View style={styles.flexDirection}>

                    {
                        this.state.radioItems5.map((item, key) =>
                        (
                            <RadioButton key={key} button={item} onClick={this.changeItem5.bind(this, key)} />
                        ))
                    }


                </View>


                <View style={styles.inBtnmarginDimension}></View>

                <View style={styles.direction}>
                    <Text style={styles.titleHeadingText}>7)  Oil check on the spray pump: </Text>
                    <View style={styles.leftmarginDimension}></View>

                    <TouchableOpacity style={styles.TouchableOpacityStyle}
                        onPress={() => console.log("Pressed")}>
                        <Image source={require('../images/comments.png')}

                            style={styles.FloatingButtonStyle2} />

                    </TouchableOpacity>
                </View>


                <View style={styles.inBtnmarginDimension}></View>

                <View style={styles.flexDirection}>

                    {
                        this.state.radioItems6.map((item, key) =>
                        (
                            <RadioButton key={key} button={item} onClick={this.changeItem6.bind(this, key)} />
                        ))
                    }


                </View>


                <View style={styles.inBtnmarginDimension}></View>

                <View style={styles.direction}>
                    <Text style={styles.titleHeadingText}>8)  Extension boom height: </Text>
                    <View style={styles.leftmarginDimension}></View>

                    <TouchableOpacity style={styles.TouchableOpacityStyle}
                        onPress={() => console.log("Pressed")}>
                        <Image source={require('../images/comments.png')}

                            style={styles.FloatingButtonStyle2} />

                    </TouchableOpacity>
                </View>


                <View style={styles.inBtnmarginDimension}></View>

                <View style={styles.flexDirection}>

                    {
                        this.state.radioItems7.map((item, key) =>
                        (
                            <RadioButton key={key} button={item} onClick={this.changeItem7.bind(this, key)} />
                        ))
                    }


                </View>


                <View style={styles.inBtnmarginDimension}></View>

                <View style={styles.direction}>
                    <Text style={styles.titleHeadingText}>9)  Confirm spray robot reaching to {"\n"}    the end of row: </Text>
                    <View style={styles.leftmarginDimension}></View>

                    <TouchableOpacity style={styles.TouchableOpacityStyle}
                        onPress={() => console.log("Pressed")}>
                        <Image source={require('../images/comments.png')}

                            style={styles.FloatingButtonStyle2} />

                    </TouchableOpacity>
                </View>


                <View style={styles.inBtnmarginDimension}></View>

                <View style={styles.flexDirection}>

                    {
                        this.state.radioItems8.map((item, key) =>
                        (
                            <RadioButton key={key} button={item} onClick={this.changeItem8.bind(this, key)} />
                        ))
                    }


                </View>


                <View style={styles.inBtnmarginDimension}></View>

                <View style={styles.direction}>
                    <Text style={styles.titleHeadingText}>10)  Nozzle caps are on the correct {"\n"}    side (L/R): </Text>
                    <View style={styles.leftmarginDimension}></View>

                    <TouchableOpacity style={styles.TouchableOpacityStyle}
                        onPress={() => console.log("Pressed")}>
                        <Image source={require('../images/comments.png')}

                            style={styles.FloatingButtonStyle2} />

                    </TouchableOpacity>
                </View>


                <View style={styles.inBtnmarginDimension}></View>

                <View style={styles.flexDirection}>

                    {
                        this.state.radioItems9.map((item, key) =>
                        (
                            <RadioButton key={key} button={item} onClick={this.changeItem9.bind(this, key)} />
                        ))
                    }


                </View>



                </SafeAreaView>


            </ScrollView>


        )


    }

}


const styles = StyleSheet.create({
    container: {
        flex: 1,
    },

    formContainer: {


        padding: 5,
        margin: 10,
        height: '100%',
        width: '100%'


    },

    marginDimension: {

        marginTop: 10,

    },

    titleHeadingText: {

        color: 'black',
        fontSize: 19,
        fontWeight: 'bold'

    },

    radioButton:
    {
        flexDirection: 'row',
        margin: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },

    radioButtonHolder:
    {
        borderRadius: 50,
        borderWidth: 2,
        justifyContent: 'center',
        alignItems: 'center'
    },

    radioIcon:
    {
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center'
    },

    label:
    {
        marginLeft: 10,
        fontSize: 20
    },

    selectedTextHolder:
    {
        position: 'absolute',
        left: 0,
        right: 0,
        bottom: 0,
        padding: 15,
        backgroundColor: 'rgba(0,0,0,0.6)',
        justifyContent: 'center',
        alignItems: 'center'
    },

    selectedText:
    {
        fontSize: 18,
        color: 'white'
    },

    siteNameText: {
        color: '#2C903D',
        fontSize: 33,
        textAlign: 'center',
        fontWeight: 'bold',
        justifyContent: 'center',
        alignItems: 'center',
        textDecorationLine: 'underline'
    },

    alignNumbersColumn: {

        flexDirection: 'row',
        alignItems: 'stretch',
        justifyContent: 'space-around',

    },

    setSprayNumbers: {

        fontSize: 20,
        color: '#000000',
    },

    setSprayNumbersWhenClicked: {

        fontWeight: 'bold',
        fontSize: 20,
        color: '#ffffff',
    },

    responsiveCircle: {

        width: 50,
        height: 50,
        borderRadius: 50 / 2,
        backgroundColor: '#2C903D',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: -10,
        marginLeft: -10,
        marginRight: -10,
        marginBottom: -10,

    },

    inBtnmarginDimension: {

        marginTop: 25,

    },


    flexDirection: {

        flex: 1,
        flexDirection: 'row',
        marginLeft: 20,

    },

    direction: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'flex-start',
    },

    TouchableOpacityStyle: {


        alignItems: 'center',
        justifyContent: 'center',
        right: 5,

    },

    FloatingButtonStyle2: {

        resizeMode: 'contain',

    },

    leftmarginDimension: {

        marginLeft: 18
    }


})


