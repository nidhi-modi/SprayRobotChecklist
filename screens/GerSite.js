import React, { Component } from 'react';
import { StyleSheet, View, BackHandler, Text, TouchableOpacity, TouchableHighlight, Image, TextInput, Modal, Pressable, Dimensions, Keyboard, ActivityIndicator, LogBox } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler';
import Toast from 'react-native-simple-toast';
import AsyncStorage from '@react-native-community/async-storage';
import DropDownPicker from 'react-native-dropdown-picker';
import { SafeAreaView } from 'react-native-safe-area-context';
import RNDropDownPicker from '@nectr-rn/react-native-dropdown-picker';
import Icon from 'react-native-vector-icons/Feather';
import moment from 'moment';


var houseSelected, houseNumberSelected, rowNumberSelected;
var random = 0;
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
            rowNumber: '',
            showDropDown: false,
            houseNumber: '',
            sprayRobotNumber: '',
            radioOption1: '',
            radioOption2: '',
            radioOption3: '',
            radioOption4: '',
            radioOption5: '',
            radioOption6: '',
            radioOption7: '',
            radioOption8: '',

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

            checkListNumber: '',
            combinedData: [],
            filteredArrayRowNumber: [],
            isLoading: true,
            filteredRowNumber: '',
            filteredBySprayRobot: [],

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



        }


    }

    //Generate checkList number

    generateChecklistNumber = () => {

        Keyboard.dismiss();
        this.setState({ isLoading: true });

        if (this.state.checkListNumber !== null || this.state.checkListNumber !== '') {

            random = Math.floor(1000 + Math.random() * 9000)
            this.setItem("checkListNumber", random.toString())
            this.setState({ checkListNumber: random.toString() });
            console.log("Number generated" + this.state.checkListNumber);


            setTimeout(() => {
                this.senDataToGoogle();
            }, 500);


        }

        else {

            this.senDataToGoogle();
        
        }

    }

    //

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

        LogBox.ignoreAllLogs();


        //Always get the site name.
        try {

            AsyncStorage.getItem('house').then((text1Value) => {
                houseSelected = JSON.parse(text1Value);
                this.setState({ siteName: houseSelected });



            }).done();
        } catch (error) {


        }

        this.focusListener = this.props.navigation.addListener('focus', () => {

            this.getGoogleData();
            //this.getAsyncData();
            this.setState({ isLoading: true });

        });


    }

    componentWillUnmount() {
        this.setState = (state, callback) => {
            return;
        };
        BackHandler.removeEventListener('hardwareBackPress', this.handleBackButton);
    }

    getGoogleData = () => {

        this.setState({ isLoading: true });

        const scriptUrl1 = 'https://script.google.com/macros/s/AKfycbwBPZserOXzIF7MMi3pdiL2pM9M2eF3_uw7da2tzJvSHLGUsas/exec';
        const url1 = `${scriptUrl1}?callback=ctrlq&action=${'doGetData'}`;

        console.log("URL : " + url1);
        fetch(url1, { mode: 'no-cors' }).then((response) => response.json())
            .then((responseJson) => {

                this.setState({ combinedData: responseJson }, () => {

                    this.setState({ combinedData: responseJson });
                });

                console.log("OUTPUT : " + JSON.stringify(responseJson));
                this.setState({ isLoading: true });

                this.getAsyncData();

            }).catch((error) => {

                console.log(error);
                this.setState({ isLoading: false });

            });

    }

    renderEntryData = () => {

        if (this.state.combinedData.length != 0) {

            if (this.state.houseNumber === null) {



            } else {


                const lastRowNumberBasedOnHouse = d => d.house_number === this.state.houseNumber;

                const filteredData = this.state.combinedData.items.filter(lastRowNumberBasedOnHouse);

                console.log("FILTERED : " + filteredData);

                if (filteredData.length != 0) {

                    const lastEntryFromList = filteredData[filteredData.length - 1];

                    const lastRowNumber = lastEntryFromList.row_number;

                    rowNumberSelected = lastRowNumber

                    this.setState({

                        filteredRowNumber: rowNumberSelected

                    }, () => {

                        this.setState({ filteredRowNumber: lastRowNumber });
                    });

                }

            }
        } else {



        }

    }



    renderDataBasedOnRobotNumber = (robotNumber) => {


        //this format May 17, 2022 10:31:16 AM NZST

        var currentDate = moment().format("MMM DD, YYYY hh:mm:ss a").toString();
        var yesterdaysDate = moment().subtract(1, 'days').format("MMM DD, YYYY hh:mm:ss a").toString();


        //convert string to int
        const int_robot_number = +robotNumber;

        if (this.state.combinedData.length != 0) {

            const filteredDataBasedOnRobotNumber = d => d.robot_number === int_robot_number && d.timestamp >= yesterdaysDate;

            const finalData = this.state.combinedData.items.filter(filteredDataBasedOnRobotNumber);

            if (finalData.length != 0) {

                const lastRobotEntryFromList = finalData[finalData.length - 1];

                this.setState({

                    filteredBySprayRobot: lastRobotEntryFromList

                }, () => {

                    this.setState({ filteredBySprayRobot: lastRobotEntryFromList });
                });

                this.setDataToUI(lastRobotEntryFromList);

            }

            console.log("ROBOT  : " + JSON.stringify(finalData));

        }

    }

    setDataToUI = (data) => {

        if (data.length != 0) {

            var option1Data = data.check_list1;
            var option2Data = data.check_list2;
            var option3Data = data.check_list3;
            var option4Data = data.check_list4;
            var option5Data = data.check_list5;
            var option6Data = data.check_list6;
            var option7Data = data.check_list7;
            var option8Data = data.check_list8;


            //RADIO OPTION 1
            this.state.radioItems1.filter(item => item.label === option1Data).map((item) => {

                item.selected = true;

                this.setState({ radioOption1: option1Data })


            });

            //RADIO OPTION 2
            this.state.radioItems2.filter(item => item.label === option2Data).map((item) => {

                item.selected = true;

            });

            //RADIO OPTION 3
            this.state.radioItems3.filter(item => item.label === option3Data).map((item) => {

                item.selected = true;

            });

            //RADIO OPTION 4
            this.state.radioItems4.filter(item => item.label === option4Data).map((item) => {

                item.selected = true;

            });

            //RADIO OPTION 5
            this.state.radioItems5.filter(item => item.label === option5Data).map((item) => {

                item.selected = true;

            });

            //RADIO OPTION 6
            this.state.radioItems6.filter(item => item.label === option6Data).map((item) => {

                item.selected = true;

            });

            //RADIO OPTION 7
            this.state.radioItems7.filter(item => item.label === option7Data).map((item) => {

                item.selected = true;

            });

            //RADIO OPTION 8
            this.state.radioItems8.filter(item => item.label === option8Data).map((item) => {

                item.selected = true;

            });

        }
    }

    //GET DATA

    getAsyncData = () => {

        this.setState({ isLoading: true });

        try {

            AsyncStorage.getItem('house').then((text1Value) => {
                houseSelected = JSON.parse(text1Value);
                this.setState({ siteName: houseSelected });



            }).done();
        } catch (error) {


        }

        try {

            AsyncStorage.getItem('sprayRobotNumber').then((text2Value) => {

                this.setState({ sprayRobotNumber: JSON.parse(text2Value) });

                if (JSON.parse(text2Value) != '' || JSON.parse(text2Value) != null) {

                    this.renderDataBasedOnRobotNumber(JSON.parse(text2Value));
                }

            }).done();
        } catch (error) {


        }

        /*try {
    
            AsyncStorage.getItem('radioOption1').then((text3Value) => {
    
                this.setState({ radioOption1: JSON.parse(text3Value) });
    
            }).done();
        } catch (error) {
    
    
        }
    
        try {
    
            AsyncStorage.getItem('radioOption2').then((text4Value) => {
    
                this.setState({ radioOption2: JSON.parse(text4Value) });
    
            }).done();
        } catch (error) {
    
    
        }
    
        try {
    
            AsyncStorage.getItem('radioOption3').then((text5Value) => {
    
                this.setState({ radioOption3: JSON.parse(text5Value) });
    
            }).done();
        } catch (error) {
    
    
        }
    
        try {
    
            AsyncStorage.getItem('radioOption4').then((text6Value) => {
    
                this.setState({ radioOption4: JSON.parse(text6Value) });
    
            }).done();
        } catch (error) {
    
    
        }
    
        try {
    
            AsyncStorage.getItem('radioOption5').then((text7Value) => {
    
                this.setState({ radioOption5: JSON.parse(text7Value) });
    
            }).done();
        } catch (error) {
    
    
        }
    
        try {
    
            AsyncStorage.getItem('radioOption6').then((text8Value) => {
    
                this.setState({ radioOption6: JSON.parse(text8Value) });
    
            }).done();
        } catch (error) {
    
    
        }
    
        try {
    
            AsyncStorage.getItem('radioOption7').then((text9Value) => {
    
                this.setState({ radioOption7: JSON.parse(text9Value) });
    
            }).done();
        } catch (error) {
    
    
        }
    
        try {
    
            AsyncStorage.getItem('radioOption8').then((text10Value) => {
    
                this.setState({ radioOption8: JSON.parse(text10Value) });
    
            }).done();
        } catch (error) {
    
    
        }
    
        try {
    
            AsyncStorage.getItem('radioOption9').then((text11Value) => {
    
                this.setState({ radioOption9: JSON.parse(text11Value) });
    
            }).done();
        } catch (error) {
    
    
        }*/

        try {

            AsyncStorage.getItem('submitterName').then((text12Value) => {

                this.setState({ submitterName: JSON.parse(text12Value) });

            }).done();
        } catch (error) {


        }

        try {

            AsyncStorage.getItem('optionComment1').then((text13Value) => {

                this.setState({ optionComment1: JSON.parse(text13Value) });

            }).done();
        } catch (error) {


        }

        try {

            AsyncStorage.getItem('optionComment2').then((text14Value) => {

                this.setState({ optionComment2: JSON.parse(text14Value) });

            }).done();
        } catch (error) {


        }

        try {

            AsyncStorage.getItem('optionComment3').then((text15Value) => {

                this.setState({ optionComment3: JSON.parse(text15Value) });

            }).done();
        } catch (error) {


        }

        try {

            AsyncStorage.getItem('optionComment4').then((text16Value) => {

                this.setState({ optionComment4: JSON.parse(text16Value) });

            }).done();
        } catch (error) {


        }

        try {

            AsyncStorage.getItem('optionComment5').then((text17Value) => {

                this.setState({ optionComment5: JSON.parse(text17Value) });

            }).done();
        } catch (error) {


        }

        try {

            AsyncStorage.getItem('optionComment6').then((text18Value) => {

                this.setState({ optionComment6: JSON.parse(text18Value) });

            }).done();
        } catch (error) {


        }

        try {

            AsyncStorage.getItem('optionComment7').then((text19Value) => {

                this.setState({ optionComment7: JSON.parse(text19Value) });

            }).done();
        } catch (error) {


        }

        try {

            AsyncStorage.getItem('optionComment8').then((text20Value) => {

                this.setState({ optionComment8: JSON.parse(text20Value) });

            }).done();
        } catch (error) {


        }



        try {

            AsyncStorage.getItem('checkListNumber').then((text22Value) => {

                this.setState({ checkListNumber: JSON.parse(text22Value) });

            }).done();
        } catch (error) {


        }

        try {

            AsyncStorage.getItem('houseNumber').then((text23Value) => {

                this.setState({ houseNumber: JSON.parse(text23Value) });

                if (JSON.parse(text23Value) != '' || JSON.parse(text23Value) != null) {

                    this.renderEntryData();
                }

            }).done();
        } catch (error) {


        }

        try {

            AsyncStorage.getItem('rowNumber').then((text24Value) => {

                this.setState({ rowNumber: JSON.parse(text24Value) });

            }).done();
        } catch (error) {


        }

        this.setState({ isLoading: false });


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

    updateDropdown = (text, field) => {

        houseNumberSelected = text;


        this.setItem(field, text)
        const state = this.state
        state[field] = text;
        this.setState(state);

        this.renderEntryData();
    }


    //SPRAY NUMBERS

    numberPressed = (number) => {


        this.setItem('sprayRobotNumber', number)

        this.setState({
            sprayRobotNumber: number
        }, () => {

            this.setState({ sprayRobotNumber: number });
        });

        this.renderDataBasedOnRobotNumber(number);


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



    resetRadioButton = () => {

        this.state.radioItems1.map((item) => {
            item.selected = false;
        });

        this.setState({ radioItems1: this.state.radioItems1 }, () => {
            this.setState({ radioOption1: this.state.radioItems1[0].label });
        });


        this.state.radioItems2.map((item) => {
            item.selected = false;
        });

        this.setState({ radioItems2: this.state.radioItems2 }, () => {
            this.setState({ radioOption2: this.state.radioItems2[0].label });
        });


        this.state.radioItems3.map((item) => {
            item.selected = false;
        });

        this.setState({ radioItems3: this.state.radioItems3 }, () => {
            this.setState({ radioOption3: this.state.radioItems3[0].label });
        });


        this.state.radioItems4.map((item) => {
            item.selected = false;
        });

        this.setState({ radioItems4: this.state.radioItems4 }, () => {
            this.setState({ radioOption4: this.state.radioItems4[0].label });
        });


        this.state.radioItems5.map((item) => {
            item.selected = false;
        });

        this.setState({ radioItems5: this.state.radioItems5 }, () => {
            this.setState({ radioOption5: this.state.radioItems5[0].label });
        });


        this.state.radioItems6.map((item) => {
            item.selected = false;
        });

        this.setState({ radioItems6: this.state.radioItems6 }, () => {
            this.setState({ radioOption6: this.state.radioItems6[0].label });
        });


        this.state.radioItems7.map((item) => {
            item.selected = false;
        });

        this.setState({ radioItems7: this.state.radioItems7 }, () => {
            this.setState({ radioOption7: this.state.radioItems7[0].label });
        });


        this.state.radioItems8.map((item) => {
            item.selected = false;
        });

        this.setState({ radioItems8: this.state.radioItems8 }, () => {
            this.setState({ radioOption8: this.state.radioItems8[0].label });
        });



    }

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




    setShowDropDown = (visibility) => {
        this.setState({ showDropDown: visibility })
    }


    //

    //SUBMIT button

    senDataToGoogle = () => {

        this.setState({ isLoading: true });

        var sprayRobotNumber = this.state.sprayRobotNumber;
        var siteName = this.state.siteName;
        var option1 = this.state.radioOption1;
        var option2 = this.state.radioOption2;
        var option3 = this.state.radioOption3;
        var option4 = this.state.radioOption4;
        var option5 = this.state.radioOption5;
        var option6 = this.state.radioOption6;
        var option7 = this.state.radioOption7;
        var option8 = this.state.radioOption8;
        var yourName = this.state.submitterName;
        var number = this.state.checkListNumber;
        var houseNumber = this.state.houseNumber;
        var rowNumber = this.state.rowNumber;




        if (sprayRobotNumber) {
            if (houseNumber) {
                if (rowNumber) {
                    if (yourName) {


                        const scriptUrl = 'https://script.google.com/macros/s/AKfycbwBPZserOXzIF7MMi3pdiL2pM9M2eF3_uw7da2tzJvSHLGUsas/exec';
                        const url = `${scriptUrl}?
                callback=ctrlq&action=${'doPostData'}&checklist_number=${number}&site_name=${siteName}&house_number=${houseNumber}&robot_number=${sprayRobotNumber}&name=${yourName}&row_number=${rowNumber}&check_list1=${option1}&check_list1_comments=${this.state.optionComment1}&check_list2=${option2}&check_list2_comments=${this.state.optionComment2}&check_list3=${option3}&check_list3_comments=${this.state.optionComment3}&check_list4=${option4}&check_list4_comments=${this.state.optionComment4}&check_list5=${option5}&check_list5_comments=${this.state.optionComment5}&check_list6=${option6}&check_list6_comments=${this.state.optionComment6}&check_list7=${option7}&check_list7_comments=${this.state.optionComment7}&check_list8=${option8}&check_list8_comments=${this.state.optionComment8}`;

                        console.log("URL : " + url);
                        fetch(url, { mode: 'no-cors' }).then(
                            () => { console.log("Data Send"); },
                        );

                        this.resetRadioButton();
                        AsyncStorage.removeItem('optionComment1');
                        AsyncStorage.removeItem('optionComment2');
                        AsyncStorage.removeItem('optionComment3');
                        AsyncStorage.removeItem('optionComment4');
                        AsyncStorage.removeItem('optionComment5');
                        AsyncStorage.removeItem('optionComment6');
                        AsyncStorage.removeItem('optionComment7');
                        AsyncStorage.removeItem('optionComment8');
                        AsyncStorage.removeItem('submitterName');
                        AsyncStorage.removeItem('sprayRobotNumber');
                        AsyncStorage.removeItem('checkListNumber');
                        AsyncStorage.removeItem('houseNumber');
                        AsyncStorage.removeItem('rowNumber');

                        this.setState({ sprayRobotNumber: '' })
                        this.setState({ submitterName: '' })
                        this.setState({ optionComment1: '' })
                        this.setState({ optionComment2: '' })
                        this.setState({ optionComment3: '' })
                        this.setState({ optionComment4: '' })
                        this.setState({ optionComment5: '' })
                        this.setState({ optionComment6: '' })
                        this.setState({ optionComment7: '' })
                        this.setState({ optionComment8: '' })
                        this.setState({ checkListNumber: '' })
                        this.setState({ rowNumber: '' })
                        this.setState({ houseNumber: null })
                        this.setState({ filteredRowNumber: '' })



                        this.setState({ isLoading: true });

                        this.getGoogleData();
                        Toast.showWithGravity('Success!! \nForm Submitted Successfully.', Toast.LONG, Toast.CENTER);
                        //this.refs._scrollView.scrollTo({ x: 0, y: 0, animated: true });



                    } else {

                        alert('Please enter your name')
                        this.setState({ isLoading: false });

                    }

                } else {

                    alert('Please row number')
                    this.setState({ isLoading: false });

                }

            } else {

                alert('Select house number')
                this.setState({ isLoading: false });

            }

        } else {

            alert('Please select spray robot number')
            this.setState({ isLoading: false });


        }

    }

    render() {

        const { modalVisible1, modalVisible2, modalVisible3, modalVisible4, modalVisible5, modalVisible6, modalVisible7, modalVisible8 } = this.state;


        if (this.state.isLoading) {
            return (
                <View style={styles.activity}>
                    <Text style={styles.fetchingText}>Loading.{"\n"}Please wait...</Text>
                    <ActivityIndicator size="large" color="#0000ff" />
                </View>
            )
        }


        return (


            <ScrollView style={styles.formContainer}
                keyboardShouldPersistTaps='handled'
                ref='_scrollView'>

                <SafeAreaView>

                    <Text style={styles.siteNameText}>{this.state.siteName}</Text>

                    <View style={styles.marginDimension}></View>

                    <View style={styles.marginDimension}></View>

                    <Text style={styles.titleHeadingText}>1)  Select House Number: </Text>

                    <View style={styles.marginDimension}></View>



                    <View style={styles.borderRightEdit}>

                        <RNDropDownPicker
                            items={[
                                { label: 'GER 1', value: 'GER 1', icon: () => <Icon name="flag" size={18} color="#900" /> },
                                { label: 'GER 2', value: 'GER 2', icon: () => <Icon name="flag" size={18} color="#900" /> },
                                { label: 'GER 3', value: 'GER 3', icon: () => <Icon name="flag" size={18} color="#900" /> },
                                { label: 'GER 4', value: 'GER 4', icon: () => <Icon name="flag" size={18} color="#900" /> },
                                { label: 'GER 5', value: 'GER 5', icon: () => <Icon name="flag" size={18} color="#900" /> },
                            ]}
                            placeholder="SELECT"
                            containerStyle={{ height: 60 }}
                            style={styles.borderEditDrop}
                            itemStyle={{
                                justifyContent: 'flex-start'
                            }}
                            dropDownStyle={{ backgroundColor: '#fafafa' }}
                            labelStyle={{
                                fontSize: 15,
                                textAlign: 'left',
                                color: '#000000'
                            }}
                            onChangeItem={(item) => this.updateDropdown(item.value, 'houseNumber')}
                            defaultValue={this.state.houseNumber}

                        />

                    </View>


                    <View style={styles.inBtnmarginDimension}></View>

                    <Text style={styles.titleHeadingText}>2)  Select Spray Robot Number: </Text>

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
                        <Text style={styles.titleHeadingText}>3)  Correct nozzle type: </Text>
                        <View style={styles.leftmarginDimension}></View>

                        <TouchableOpacity style={styles.TouchableOpacityStyle}
                            onPress={() => this.setModalVisible1(true)}>
                            <Image source={require('../images/comments_black.png')}

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
                        <Text style={styles.titleHeadingText}>4)  Nozzles are not blocked: </Text>
                        <View style={styles.leftmarginDimension}></View>

                        <TouchableOpacity style={styles.TouchableOpacityStyle}
                            onPress={() => this.setModalVisible2(true)}>
                            <Image source={require('../images/comments_black.png')}

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
                        <Text style={styles.titleHeadingText}>5)  Nozzle filters and robot {"\n"}    filter are clean: </Text>
                        <View style={styles.leftmarginDimension}></View>

                        <TouchableOpacity style={styles.TouchableOpacityStyle}
                            onPress={() => this.setModalVisible3(true)}>
                            <Image source={require('../images/comments_black.png')}

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
                                    <Text style={styles.modalText}>Comments - nozzles filters and robot filter are clean: </Text>

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
                        <Text style={styles.titleHeadingText}>6)  Nozzle caps are on the {"\n"}     correct side (L/R): </Text>
                        <View style={styles.leftmarginDimension}></View>

                        <TouchableOpacity style={styles.TouchableOpacityStyle}
                            onPress={() => this.setModalVisible4(true)}>

                            <Image source={require('../images/comments_black.png')}

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
                                    <Text style={styles.modalText}>Comments - nozzles caps are on the correct side (L/R): </Text>

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
                        <Text style={styles.titleHeadingText}>7)  Extension boom height {"\n"}     Adjusted: </Text>
                        <View style={styles.leftmarginDimension}></View>

                        <TouchableOpacity style={styles.TouchableOpacityStyle}
                            onPress={() => this.setModalVisible5(true)}>
                            <Image source={require('../images/comments_black.png')}

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
                                    <Text style={styles.modalText}>Comments - extension boom height Adjusted: </Text>

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
                        <Text style={styles.titleHeadingText}>8)  Front/side noozle on and {"\n"}     pressure reading: </Text>
                        <View style={styles.leftmarginDimension}></View>

                        <TouchableOpacity style={styles.TouchableOpacityStyle}
                            onPress={() => this.setModalVisible6(true)}>
                            <Image source={require('../images/comments_black.png')}

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
                                    <Text style={styles.modalText}>Comments - front/side noozle on and pressure reading: </Text>

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
                        <Text style={styles.titleHeadingText}>9)  Oil check on the spray pump: </Text>
                        <View style={styles.leftmarginDimension}></View>

                        <TouchableOpacity style={styles.TouchableOpacityStyle}
                            onPress={() => this.setModalVisible7(true)}>
                            <Image source={require('../images/comments_black.png')}

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
                                    <Text style={styles.modalText}>Comments - oil check on the spray pump: </Text>

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
                        <Text style={styles.titleHeadingText}>10)  Confirm spray robot reaching {"\n"}     to the end of row: </Text>
                        <View style={styles.leftmarginDimension}></View>

                        <TouchableOpacity style={styles.TouchableOpacityStyle}
                            onPress={() => this.setModalVisible8(true)}>
                            <Image source={require('../images/comments_black.png')}

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


                    <Text style={styles.titleHeadingText}>11)  Row Number: </Text>
                    <View style={styles.direction}>

                        <Text style={styles.redHeadingText}>         Last Row Done for House {this.state.houseNumber}: </Text>
                        <Text style={styles.redBoldHeadingText}>  {this.state.filteredRowNumber}</Text>
                    </View>
                    <View style={styles.borderEdit}>
                        <TextInput style={styles.textInputStyle}
                            autoCapitalize="words"
                            multiline={false}
                            autoCorrect={false}

                            onChangeText={(text) => this.updateTextInput(text, 'rowNumber')}
                            returnKeyType={"done"}
                            keyboardType={'number-pad'}
                            value={this.state.rowNumber}

                        />

                    </View>

                    <View style={styles.inBtnmarginDimension}></View>



                    <Text style={styles.titleHeadingText}>12)  Submitter's Name: </Text>

                    <View style={styles.borderEdit}>
                        <TextInput style={styles.textInputStyle}
                            autoCapitalize="words"
                            multiline={false}
                            autoCorrect={false}

                            onChangeText={(text) => this.updateTextInput(text, 'submitterName')}
                            returnKeyType={"done"}
                            keyboardType={'default'}
                            value={this.state.submitterName}

                        />

                    </View>


                    <View style={styles.inBtnmarginDimension}></View>


                    <TouchableOpacity
                        style={styles.buttonContainer}
                        onPress={() => this.generateChecklistNumber()}
                    //onPress={() => this.senDataToGoogle()}
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
        marginRight: 20,
        marginLeft: 10,
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

    redHeadingText: {

        color: '#990011FF',
        fontSize: 16,
    },

    redBoldHeadingText: {

        color: '#990011FF',
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

    textRowDirection: {

        flexDirection: 'row',
        alignItems: 'stretch',
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

    borderEditDrop: {

        marginTop: 8,
        borderColor: '#000000',
        borderWidth: 1,
        borderRadius: 5,
    },

    borderRightEdit: {

        marginRight: 20,
        zIndex: 100,
        flex: 1
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

    activity: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        alignItems: 'center',
        justifyContent: 'center'
    },

    fetchingText: {

        fontSize: 23,
        color: '#000000',
        fontWeight: 'bold',
        fontStyle: 'italic',
        marginBottom: 10

    }
})


