import axios from 'axios'
import { Platform } from 'react-native'


export const ADDRESS = Platform.OS === 'ios'
 	? 'localhost:8000'
	: 'rvw170cv-8000.uks1.devtunnels.ms'
	// 'a436-196-189-123-86.ngrok-free.app'
	
	// '10.0.2.2:8000'

const api = axios.create({
	baseURL: 'https://' + ADDRESS,
	// baseURL: ADDRESS,
	headers: {
		'Content-Type': 'application/json'
	}
})

export default api