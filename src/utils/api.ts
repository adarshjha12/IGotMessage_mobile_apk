import axios from 'axios';
import {config} from '../config'

const checkAuth = async function () {
    const url = config.ENV === 'production' 
    ? `${config.PROD_BACKEND_URL}/api/current-user/get-current-user`
    : `${config.DEV_BACKEND_URL}/api/current-user/get-current-user`;

    try {
        return await axios.get(url, {
            withCredentials: true
        })
        
    } catch (error) {
        console.log(error);
        throw error
        
    }
}

const sendOtp = async function (email: string) {
    const url = config.ENV === 'production' 
    ? `${config.PROD_BACKEND_URL}/api/email/auth/send-otp`
    : `${config.DEV_BACKEND_URL}/api/email/auth/send-otp`;

    try {
        return await axios.post(url, {email})
    } catch (error) {
        console.log(error);
        throw error
    }
}

const verifyOtp = async function (email: string, otp: string) {

    const url = config.ENV === 'production' 
    ? `${config.PROD_BACKEND_URL}/api/email/auth/verify-otp`
    : `${config.DEV_BACKEND_URL}/api/email/auth/verify-otp`;

    
    try {
        
        return await axios.post(url, {email, otp}, {withCredentials: true})
    } catch (error) {
        console.log(error);
        throw error
    }
}

const fetchMyStories = async function(userId : string) {
    const url = config.ENV === 'production' ? `${config.PROD_BACKEND_URL}/api/story/get-my-stories` : `${config.DEV_BACKEND_URL}/api/story/get-my-stories`;

    return await axios.post(url, {userId}, {withCredentials: true})
}
const fetchOtherStories = async function() {
    const url = config.ENV === 'production' ? `${config.PROD_BACKEND_URL}/api/story/get-other-stories` : `${config.DEV_BACKEND_URL}/api/story/get-other-stories`;

    return await axios.get(url,  {withCredentials: true})
}

export {checkAuth, sendOtp, verifyOtp, fetchMyStories, fetchOtherStories}