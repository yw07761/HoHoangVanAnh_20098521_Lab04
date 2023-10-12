import React, { useState } from 'react';
import { Image, StyleSheet, TextInput, TouchableOpacity, View, Text } from 'react-native';

export default function Screen2() {
    const [feedback, setFeedback] = useState('');

    const submitFeedback = () => {
        if (feedback === '') {
            alert('Bạn chưa nhập feedback');
        } else {
            alert('Gửi feedback thành công');
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.productWrapper}>
                <Image style={styles.productLogo} source={require('../assets/usb.png')} />
                <Text style={styles.productInfo}>USB Bluetooth Music Receiver HJX-001 - Biến loa thường thành loa bluetooth</Text>
            </View>
            <Text style={styles.satisfiedTxt}>Cực kỳ hài lòng</Text>
            <View style={styles.starWrapper}>
                {[1, 2, 3, 4, 5].map((index) => (
                    <Image key={index} style={styles.starImg} source={require('../assets/Star.png')} />
                ))}
            </View>
            <TouchableOpacity style={styles.addImageBtn}>
                <Image style={styles.cameraImg} source={require('../assets/camera.png')} />
                <Text style={styles.addImageTxt}>Thêm hình ảnh</Text>
            </TouchableOpacity>
            <View style={styles.inputWrapper}>
                <TextInput
                    style={styles.shareInput}
                    placeholder='Hãy chia sẻ những điều mà bạn thích về sản phẩm'
                    multiline={true}
                    numberOfLines={10}
                    placeholderTextColor={'gray'}
                    onChangeText={setFeedback}
                />
                <Text style={styles.linkTxt}>https://meet.google.com/nsj-ojwi-xpp</Text>
            </View>
            <TouchableOpacity style={styles.btnSend} onPress={submitFeedback}>
                <Text style={styles.titleBtn}>Gửi</Text>
            </TouchableOpacity>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 30,
    },
    productWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    productLogo: {
        width: 70,
        height: 70,
    },
    productInfo: {
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: 16,
    },
    satisfiedTxt: {
        marginTop: 50,
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: 18,
        textAlign: 'center',
    },
    starWrapper: {
        flexDirection: 'row',
        justifyContent: 'space-around',
        marginTop: 20,
    },
    starImg: {
        width: 40,
        height: 40,
    },
    addImageBtn: {
        width: '100%',
        height: 70,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#1511EB',
        borderRadius: 5,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        marginTop: 20,
    },
    cameraImg: {
        width: 40,
        height: 32,
        marginLeft: 30,
    },
    addImageTxt: {
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: 18,
        marginLeft: 10,
    },
    inputWrapper: {
        width: '100%',
        marginTop: 20,
        borderWidth: 2,
        borderStyle: 'solid',
        borderColor: '#ccc',
        borderRadius: 5,
        alignItems: 'flex-end',
    },
    shareInput: {
        width: '100%',
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: 18,
        padding: 15,
    },
    linkTxt: {
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: 18,
        padding: 15,
        color: 'black',
    },
    btnSend: {
        width: '100%',
        height: 40,
        backgroundColor: '#0D5DB6',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: 30,
        borderRadius: 5,
    },
    titleBtn: {
        color: '#fff',
        fontFamily: 'Roboto',
        fontWeight: '700',
        fontSize: 20,
    },
});
