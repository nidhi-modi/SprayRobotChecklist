import React, { Component } from 'react';
import { StyleSheet, View, BackHandler, Text, TouchableOpacity, TouchableHighlight, Image, TextInput, Modal, Pressable, Dimensions } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-community/async-storage';
import DropDownPicker from 'react-native-dropdown-picker';
import { SafeAreaView } from 'react-native-safe-area-context';

var houseSelected;

var width = Dimensions.get('window').width / 1.1;

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
            radioOption1: '',
            radioOption2: '',
            radioOption3: '',
            radioOption4: '',
            radioOption5: '',
            radioOption6: '',
            radioOption7: '',
            radioOption8: '',
            radioOption9: '',
            submitterName: '',
            modalVisible1: false,
            modalVisible2: false,
            modalVisible3: false,
            modalVisible4: false,
            modalVisible5: false,
            modalVisible6: false,
            modalVisible7: false,
            modalVisible8: false,
            modalVisible9: false,
            optionComment1: '',
            optionComment2: '',
            optionComment3: '',
            optionComment4: '',
            optionComment5: '',
            optionComment6: '',
            optionComment7: '',
            optionComment8: '',
            optionComment9: '',

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


        //getStorageData
        this.getAsyncData();

        this.focusListener = this.props.navigation.addListener('focus', () => {

            this.getAsyncData();


        });

    }

    componentWillUnmount() {
        this.setState = (state, callback) => {
            return;
        };
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }


    //GET DATA

    getAsyncData = () => {

        try {

            AsyncStorage.getItem('house').then((text1Value) => {
                houseSelected = JSON.parse(text1Value);
                this.setState({ siteName: houseSelected });

            }).done();
        } catch (error) {


        }

        try {

            AsyncStorage.getItem('sprayRobotNumber').then((text2Value) => {

                this.setState({ sprayRobotNumber: text2Value });

            }).done();
        } catch (error) {


        }

        try {

            AsyncStorage.getItem('radioOption1').then((text3Value) => {

                this.setState({ radioOption1: text3Value });

            }).done();
        } catch (error) {


        }

        try {

            AsyncStorage.getItem('radioOption2').then((text4Value) => {

                this.setState({ radioOption2: text4Value });

            }).done();
        } catch (error) {


        }

        try {

            AsyncStorage.getItem('radioOption3').then((text5Value) => {

                this.setState({ radioOption3: text5Value });

            }).done();
        } catch (error) {


        }

        try {

            AsyncStorage.getItem('radioOption4').then((text6Value) => {

                this.setState({ radioOption4: text6Value });

            }).done();
        } catch (error) {


        }

        try {

            AsyncStorage.getItem('radioOption5').then((text7Value) => {

                this.setState({ radioOption5: text7Value });

            }).done();
        } catch (error) {


        }

        try {

            AsyncStorage.getItem('radioOption6').then((text8Value) => {

                this.setState({ radioOption6: text8Value });

            }).done();
        } catch (error) {


        }

        try {

            AsyncStorage.getItem('radioOption7').then((text9Value) => {

                this.setState({ radioOption7: text9Value });

            }).done();
        } catch (error) {


        }

        try {

            AsyncStorage.getItem('radioOption8').then((text10Value) => {

                this.setState({ radioOption8: text10Value });

            }).done();
        } catch (error) {


        }

        try {

            AsyncStorage.getItem('radioOption9').then((text11Value) => {

                this.setState({ radioOption9: text11Value });

            }).done();
        } catch (error) {


        }

        try {

            AsyncStorage.getItem('submitterName').then((text12Value) => {

                this.setState({ submitterName: text12Value });

            }).done();
        } catch (error) {


        }

        try {

            AsyncStorage.getItem('optionComment1').then((text13Value) => {

                this.setState({ optionComment1: text13Value });

            }).done();
        } catch (error) {


        }

        try {

            AsyncStorage.getItem('optionComment2').then((text14Value) => {

                this.setState({ optionComment2: text14Value });

            }).done();
        } catch (error) {


        }

        try {

            AsyncStorage.getItem('optionComment3').then((text15Value) => {

                this.setState({ optionComment3: text15Value });

            }).done();
        } catch (error) {


        }

        try {

            AsyncStorage.getItem('optionComment4').then((text16Value) => {

                this.setState({ optionComment4: text16Value });

            }).done();
        } catch (error) {


        }

        try {

            AsyncStorage.getItem('optionComment5').then((text17Value) => {

                this.setState({ optionComment5: text17Value });

            }).done();
        } catch (error) {


        }

        try {

            AsyncStorage.getItem('optionComment6').then((text18Value) => {

                this.setState({ optionComment6: text18Value });

            }).done();
        } catch (error) {


        }

        try {

            AsyncStorage.getItem('optionComment7').then((text19Value) => {

                this.setState({ optionComment7: text19Value });

            }).done();
        } catch (error) {


        }

        try {

            AsyncStorage.getItem('optionComment8').then((text20Value) => {

                this.setState({ optionComment8: text20Value });

            }).done();
        } catch (error) {


        }

        try {

            AsyncStorage.getItem('optionComment9').then((text21Value) => {

                this.setState({ optionComment9: text21Value });

            }).done();
        } catch (error) {


        }

    }

    // setting async item creation

    async setItem(myKey, value) {
        try {

            return await AsyncStorage.setItem(myKey, JSON.stringify(value));

        } catch (error) {
            // console.error('AsyncStorage#setItem error: ' + error.message);
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


        this.setItem('sprayRobotNumber', number)
        this.setState({ sprayRobotNumber: number })


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

    //SETTING UP MODAL VISIBILITY 

    setModalVisible1 = (visible) => {
        this.setState({ modalVisible1: visible });
    }


    setModalVisible2 = (visible) => {
        this.setState({ modalVisible2: visible });
    }


    setModalVisible3 = (visible) => {
        this.setState({ modalVisible3: visible });
    }


    setModalVisible4 = (visible) => {
        this.setState({ modalVisible4: visible });
    }


    setModalVisible5 = (visible) => {
        this.setState({ modalVisible5: visible });
    }


    setModalVisible6 = (visible) => {
        this.setState({ modalVisible6: visible });
    }


    setModalVisible7 = (visible) => {
        this.setState({ modalVisible7: visible });
    }


    setModalVisible8 = (visible) => {
        this.setState({ modalVisible8: visible });
    }


    setModalVisible9 = (visible) => {
        this.setState({ modalVisible9: visible });
    }




    //

    //SUBMIT button

    senDataToGoogle = () => {

        console.log("SUBMIT BUTTON CLICKED");
    }

    render() {

        const { modalVisible1, modalVisible2, modalVisible3, modalVisible4, modalVisible5, modalVisible6, modalVisible7, modalVisible8, modalVisible9 } = this.state;

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
                            style={this.state.sprayRobotNumber == '1' ? styles.responsiveCircle : null}
                            underlayColor='none'>
                            <Text style={this.state.sprayRobotNumber == '1' ? styles.setSprayNumbersWhenClicked : styles.setSprayNumbers}>1</Text>
                        </TouchableHighlight>

                        <TouchableHighlight
                            onPress={() => { this.numberPressed('2') }}
                            style={this.state.sprayRobotNumber == '2' ? styles.responsiveCircle : null}
                            underlayColor='none'>
                            <Text style={this.state.sprayRobotNumber == '2' ? styles.setSprayNumbersWhenClicked : styles.setSprayNumbers}>2</Text>
                        </TouchableHighlight>

                        <TouchableHighlight
                            onPress={() => { this.numberPressed('3') }}
                            style={this.state.sprayRobotNumber == '3' ? styles.responsiveCircle : null}
                            underlayColor='none'>
                            <Text style={this.state.sprayRobotNumber == '3' ? styles.setSprayNumbersWhenClicked : styles.setSprayNumbers}>3</Text>
                        </TouchableHighlight>

                        <TouchableHighlight
                            onPress={() => { this.numberPressed('4') }}
                            style={this.state.sprayRobotNumber == '4' ? styles.responsiveCircle : null}
                            underlayColor='none'>
                            <Text style={this.state.sprayRobotNumber == '4' ? styles.setSprayNumbersWhenClicked : styles.setSprayNumbers}>4</Text>
                        </TouchableHighlight>


                    </View>

                    <View style={styles.inBtnmarginDimension}></View>

                    <View style={styles.direction}>
                        <Text style={styles.titleHeadingText}>2)  Correct nozzle type: </Text>
                        <View style={styles.leftmarginDimension}></View>

                        <TouchableOpacity style={styles.TouchableOpacityStyle}
                            onPress={() => this.setModalVisible1(true)}>
                            <Image source={require('../images/comments.png')}

                                style={styles.FloatingButtonStyle2} />

                        </TouchableOpacity>
                    </View>

                    <View style={styles.centeredView}>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible1}
                            onRequestClose={() => {
                                this.setModalVisible1(!modalVisible1);
                            }}
                        >
                            <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                    <Text style={styles.modalText}>Comments - correct nozzle type: </Text>

                                    <TextInput
                                        style={styles.input}
                                        autoCapitalize="sentences"
                                        multiline={true}
                                        autoCorrect={false}
                                        enablesReturnKeyAutomatically={true}
                                        onChangeText={(text) => this.updateTextInput(text, 'optionComment1')}
                                        returnKeyType={"done"}
                                        keyboardType={'default'}
                                        value={this.state.optionComment1}
                                    />

                                    <View style={styles.direction}>
                                        <Pressable
                                            style={[styles.button, styles.buttonSubmit]}
                                            onPress={() => this.setModalVisible1(!modalVisible1)}
                                        >
                                            <Text style={styles.textStyle}>Submit</Text>
                                        </Pressable>

                                        <View style={styles.marginRightModal}></View>

                                        <Pressable
                                            style={[styles.button, styles.buttonCancel]}
                                            onPress={() => this.setModalVisible1(!modalVisible1)}
                                        >
                                            <Text style={styles.textStyle}>Cancel</Text>
                                        </Pressable>

                                    </View>
                                </View>
                            </View>
                        </Modal>

                    </View>

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
                            onPress={() => this.setModalVisible2(true)}>
                            <Image source={require('../images/comments.png')}

                                style={styles.FloatingButtonStyle2} />

                        </TouchableOpacity>
                    </View>


                    <View style={styles.centeredView}>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible2}
                            onRequestClose={() => {
                                this.setModalVisible2(!modalVisible2);
                            }}
                        >
                            <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                    <Text style={styles.modalText}>Comments - nozzles are not blocked: </Text>

                                    <TextInput
                                        style={styles.input}
                                        autoCapitalize="sentences"
                                        multiline={true}
                                        autoCorrect={false}
                                        enablesReturnKeyAutomatically={true}
                                        onChangeText={(text) => this.updateTextInput(text, 'optionComment2')}
                                        returnKeyType={"done"}
                                        keyboardType={'default'}
                                        value={this.state.optionComment2}
                                    />

                                    <View style={styles.direction}>
                                        <Pressable
                                            style={[styles.button, styles.buttonSubmit]}
                                            onPress={() => this.setModalVisible2(!modalVisible2)}
                                        >
                                            <Text style={styles.textStyle}>Submit</Text>
                                        </Pressable>

                                        <View style={styles.marginRightModal}></View>

                                        <Pressable
                                            style={[styles.button, styles.buttonCancel]}
                                            onPress={() => this.setModalVisible2(!modalVisible2)}
                                        >
                                            <Text style={styles.textStyle}>Cancel</Text>
                                        </Pressable>

                                    </View>
                                </View>
                            </View>
                        </Modal>

                    </View>

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
                            onPress={() => this.setModalVisible3(true)}>
                            <Image source={require('../images/comments.png')}

                                style={styles.FloatingButtonStyle2} />

                        </TouchableOpacity>
                    </View>


                    <View style={styles.centeredView}>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible3}
                            onRequestClose={() => {
                                this.setModalVisible3(!modalVisible3);
                            }}
                        >
                            <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                    <Text style={styles.modalText}>Comments - nozzles are open: </Text>

                                    <TextInput
                                        style={styles.input}
                                        autoCapitalize="sentences"
                                        multiline={true}
                                        autoCorrect={false}
                                        enablesReturnKeyAutomatically={true}
                                        onChangeText={(text) => this.updateTextInput(text, 'optionComment3')}
                                        returnKeyType={"done"}
                                        keyboardType={'default'}
                                        value={this.state.optionComment3}
                                    />

                                    <View style={styles.direction}>
                                        <Pressable
                                            style={[styles.button, styles.buttonSubmit]}
                                            onPress={() => this.setModalVisible3(!modalVisible3)}
                                        >
                                            <Text style={styles.textStyle}>Submit</Text>
                                        </Pressable>

                                        <View style={styles.marginRightModal}></View>

                                        <Pressable
                                            style={[styles.button, styles.buttonCancel]}
                                            onPress={() => this.setModalVisible3(!modalVisible3)}
                                        >
                                            <Text style={styles.textStyle}>Cancel</Text>
                                        </Pressable>

                                    </View>
                                </View>
                            </View>
                        </Modal>

                    </View>

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
                            onPress={() => this.setModalVisible4(true)}>
                            <Image source={require('../images/comments.png')}

                                style={styles.FloatingButtonStyle2} />

                        </TouchableOpacity>
                    </View>


                    <View style={styles.centeredView}>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible4}
                            onRequestClose={() => {
                                this.setModalVisible4(!modalVisible4);
                            }}
                        >
                            <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                    <Text style={styles.modalText}>Comments - nozzles filters and robot filter are clean: </Text>

                                    <TextInput
                                        style={styles.input}
                                        autoCapitalize="sentences"
                                        multiline={true}
                                        autoCorrect={false}
                                        enablesReturnKeyAutomatically={true}
                                        onChangeText={(text) => this.updateTextInput(text, 'optionComment4')}
                                        returnKeyType={"done"}
                                        keyboardType={'default'}
                                        value={this.state.optionComment4}
                                    />

                                    <View style={styles.direction}>
                                        <Pressable
                                            style={[styles.button, styles.buttonSubmit]}
                                            onPress={() => this.setModalVisible4(!modalVisible4)}
                                        >
                                            <Text style={styles.textStyle}>Submit</Text>
                                        </Pressable>

                                        <View style={styles.marginRightModal}></View>

                                        <Pressable
                                            style={[styles.button, styles.buttonCancel]}
                                            onPress={() => this.setModalVisible4(!modalVisible4)}
                                        >
                                            <Text style={styles.textStyle}>Cancel</Text>
                                        </Pressable>

                                    </View>
                                </View>
                            </View>
                        </Modal>

                    </View>

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
                            onPress={() => this.setModalVisible5(true)}>
                            <Image source={require('../images/comments.png')}

                                style={styles.FloatingButtonStyle2} />

                        </TouchableOpacity>
                    </View>


                    <View style={styles.centeredView}>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible5}
                            onRequestClose={() => {
                                this.setModalVisible5(!modalVisible5);
                            }}
                        >
                            <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                    <Text style={styles.modalText}>Comments - front/side noozle on and pressure reading: </Text>

                                    <TextInput
                                        style={styles.input}
                                        autoCapitalize="sentences"
                                        multiline={true}
                                        autoCorrect={false}
                                        enablesReturnKeyAutomatically={true}
                                        onChangeText={(text) => this.updateTextInput(text, 'optionComment5')}
                                        returnKeyType={"done"}
                                        keyboardType={'default'}
                                        value={this.state.optionComment5}
                                    />

                                    <View style={styles.direction}>
                                        <Pressable
                                            style={[styles.button, styles.buttonSubmit]}
                                            onPress={() => this.setModalVisible5(!modalVisible5)}
                                        >
                                            <Text style={styles.textStyle}>Submit</Text>
                                        </Pressable>

                                        <View style={styles.marginRightModal}></View>

                                        <Pressable
                                            style={[styles.button, styles.buttonCancel]}
                                            onPress={() => this.setModalVisible5(!modalVisible5)}
                                        >
                                            <Text style={styles.textStyle}>Cancel</Text>
                                        </Pressable>

                                    </View>
                                </View>
                            </View>
                        </Modal>

                    </View>

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
                            onPress={() => this.setModalVisible6(true)}>
                            <Image source={require('../images/comments.png')}

                                style={styles.FloatingButtonStyle2} />

                        </TouchableOpacity>
                    </View>


                    <View style={styles.centeredView}>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible6}
                            onRequestClose={() => {
                                this.setModalVisible6(!modalVisible6);
                            }}
                        >
                            <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                    <Text style={styles.modalText}>Comments - oil check on the spray pump: </Text>

                                    <TextInput
                                        style={styles.input}
                                        autoCapitalize="sentences"
                                        multiline={true}
                                        autoCorrect={false}
                                        enablesReturnKeyAutomatically={true}
                                        onChangeText={(text) => this.updateTextInput(text, 'optionComment6')}
                                        returnKeyType={"done"}
                                        keyboardType={'default'}
                                        value={this.state.optionComment6}
                                    />

                                    <View style={styles.direction}>
                                        <Pressable
                                            style={[styles.button, styles.buttonSubmit]}
                                            onPress={() => this.setModalVisible6(!modalVisible6)}
                                        >
                                            <Text style={styles.textStyle}>Submit</Text>
                                        </Pressable>

                                        <View style={styles.marginRightModal}></View>

                                        <Pressable
                                            style={[styles.button, styles.buttonCancel]}
                                            onPress={() => this.setModalVisible6(!modalVisible6)}
                                        >
                                            <Text style={styles.textStyle}>Cancel</Text>
                                        </Pressable>

                                    </View>
                                </View>
                            </View>
                        </Modal>

                    </View>

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
                            onPress={() => this.setModalVisible7(true)}>
                            <Image source={require('../images/comments.png')}

                                style={styles.FloatingButtonStyle2} />

                        </TouchableOpacity>
                    </View>


                    <View style={styles.centeredView}>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible7}
                            onRequestClose={() => {
                                this.setModalVisible7(!modalVisible7);
                            }}
                        >
                            <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                    <Text style={styles.modalText}>Comments - extension boom height: </Text>

                                    <TextInput
                                        style={styles.input}
                                        autoCapitalize="sentences"
                                        multiline={true}
                                        autoCorrect={false}
                                        enablesReturnKeyAutomatically={true}
                                        onChangeText={(text) => this.updateTextInput(text, 'optionComment7')}
                                        returnKeyType={"done"}
                                        keyboardType={'default'}
                                        value={this.state.optionComment7}
                                    />

                                    <View style={styles.direction}>
                                        <Pressable
                                            style={[styles.button, styles.buttonSubmit]}
                                            onPress={() => this.setModalVisible7(!modalVisible7)}
                                        >
                                            <Text style={styles.textStyle}>Submit</Text>
                                        </Pressable>

                                        <View style={styles.marginRightModal}></View>

                                        <Pressable
                                            style={[styles.button, styles.buttonCancel]}
                                            onPress={() => this.setModalVisible7(!modalVisible7)}
                                        >
                                            <Text style={styles.textStyle}>Cancel</Text>
                                        </Pressable>

                                    </View>
                                </View>
                            </View>
                        </Modal>

                    </View>

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
                            onPress={() => this.setModalVisible8(true)}>
                            <Image source={require('../images/comments.png')}

                                style={styles.FloatingButtonStyle2} />

                        </TouchableOpacity>
                    </View>


                    <View style={styles.centeredView}>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible8}
                            onRequestClose={() => {
                                this.setModalVisible8(!modalVisible8);
                            }}
                        >
                            <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                    <Text style={styles.modalText}>Comments - confirm spray robot reaching to the end of row: </Text>

                                    <TextInput
                                        style={styles.input}
                                        autoCapitalize="sentences"
                                        multiline={true}
                                        autoCorrect={false}
                                        enablesReturnKeyAutomatically={true}
                                        onChangeText={(text) => this.updateTextInput(text, 'optionComment8')}
                                        returnKeyType={"done"}
                                        keyboardType={'default'}
                                        value={this.state.optionComment8}
                                    />

                                    <View style={styles.direction}>
                                        <Pressable
                                            style={[styles.button, styles.buttonSubmit]}
                                            onPress={() => this.setModalVisible8(!modalVisible8)}
                                        >
                                            <Text style={styles.textStyle}>Submit</Text>
                                        </Pressable>

                                        <View style={styles.marginRightModal}></View>

                                        <Pressable
                                            style={[styles.button, styles.buttonCancel]}
                                            onPress={() => this.setModalVisible8(!modalVisible8)}
                                        >
                                            <Text style={styles.textStyle}>Cancel</Text>
                                        </Pressable>

                                    </View>
                                </View>
                            </View>
                        </Modal>

                    </View>

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
                            onPress={() => this.setModalVisible9(true)}>
                            <Image source={require('../images/comments.png')}

                                style={styles.FloatingButtonStyle2} />

                        </TouchableOpacity>
                    </View>


                    <View style={styles.centeredView}>
                        <Modal
                            animationType="slide"
                            transparent={true}
                            visible={modalVisible9}
                            onRequestClose={() => {
                                this.setModalVisible9(!modalVisible9);
                            }}
                        >
                            <View style={styles.centeredView}>
                                <View style={styles.modalView}>
                                    <Text style={styles.modalText}>Comments - nozzles caps are on the correct side (L/R): </Text>

                                    <TextInput
                                        style={styles.input}
                                        autoCapitalize="sentences"
                                        multiline={true}
                                        autoCorrect={false}
                                        enablesReturnKeyAutomatically={true}
                                        onChangeText={(text) => this.updateTextInput(text, 'optionComment9')}
                                        returnKeyType={"done"}
                                        keyboardType={'default'}
                                        value={this.state.optionComment9}
                                    />

                                    <View style={styles.direction}>
                                        <Pressable
                                            style={[styles.button, styles.buttonSubmit]}
                                            onPress={() => this.setModalVisible9(!modalVisible9)}
                                        >
                                            <Text style={styles.textStyle}>Submit</Text>
                                        </Pressable>

                                        <View style={styles.marginRightModal}></View>

                                        <Pressable
                                            style={[styles.button, styles.buttonCancel]}
                                            onPress={() => this.setModalVisible9(!modalVisible9)}
                                        >
                                            <Text style={styles.textStyle}>Cancel</Text>
                                        </Pressable>

                                    </View>
                                </View>
                            </View>
                        </Modal>

                    </View>

                    <View style={styles.flexDirection}>

                        {
                            this.state.radioItems9.map((item, key) =>
                            (
                                <RadioButton key={key} button={item} onClick={this.changeItem9.bind(this, key)} />
                            ))
                        }


                    </View>


                    <View style={styles.inBtnmarginDimension}></View>

                    <Text style={styles.titleHeadingText}>Submitter's Name: </Text>

                    <View style={styles.borderEdit}>
                        <TextInput style={styles.textInputStyle}
                            autoCapitalize="words"
                            multiline={false}
                            autoCorrect={false}
                            enablesReturnKeyAutomatically={true}
                            onChangeText={(text) => this.updateTextInput(text, 'submitterName')}
                            returnKeyType={"done"}
                            keyboardType={'default'}
                            value={this.state.submitterName}

                        />

                    </View>


                    <View style={styles.inBtnmarginDimension}></View>


                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={this.senDataToGoogle()}
                    >
                        <Text style={styles.buttonText1}>Submit</Text>
                    </TouchableOpacity>


                </SafeAreaView>


            </ScrollView >


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

    buttonText1: {
        fontSize: 23,
        color: '#ffffff',
        fontWeight: 'bold',
        fontStyle: 'italic'

    },

    buttonContainer: {
        backgroundColor: '#2C903D',
        borderRadius: 10,
        padding: 10,
        marginRight: 30,
        marginBottom: 20,
        marginTop: 20,
        height: 55,
        justifyContent: 'center',
        alignItems: 'center'

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
    },

    borderEdit: {

        marginTop: 8,
        marginRight: 16,
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius: 5,
    },

    textInputStyle: {
        fontSize: 15,
        color: 'black',
        marginLeft: 10,
        marginRight: 20,
        height: 50,

    },

    //MODAL
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,
    },

    modalView: {
        margin: 20,
        width: width,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 0.25,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 15,
        elevation: 2,
        fontSize: 14
    },
    buttonSubmit: {
        backgroundColor: "#2C903D",
    },
    buttonCancel: {
        backgroundColor: "#FF0000",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center",
        color: "black",
        fontSize: 18,
        fontWeight: "bold",
    },
    marginRightModal: {

        marginRight: 10
    },
    input: {

        fontSize: 15,
        color: 'black',
        padding: 10,
        width: "100%",
        borderRadius: 5,
        paddingVertical: 8,
        paddingHorizontal: 16,
        borderColor: "rgba(0, 0, 0, 0.2)",
        borderWidth: 1,
        marginBottom: 8,
        marginBottom: 12

    },
})


