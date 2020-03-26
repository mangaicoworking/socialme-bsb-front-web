//const socialMe = 'https://social-me-v2.herokuapp.com/ergCNTis';
//const socialMe = 'http://192.168.2.16:3000/ergCNTis';
//const socialMe = 'https://socialme-api.herokuapp.com/ergCNTis';
const socialMeBSB = 'http://152.67.37.200:3000/mRG1SOsr1lTQh1PxcFXu';
//const socialMeBSB = 'http://oracleapibsb.socialme.com.br:3001/mRG1SOsr1lTQh1PxcFXu';
//const socialMeBSB = 'http://192.168.2.16:3000/mRG1SOsr1lTQh1PxcFXu/';

const Requests = {
    Login: {
        baseURL: socialMeBSB,
        url: '/login',
        method: 'post',
        timeout: '50000',
        responses: [
            {
                response: 'Person found',
                code: 'E14AA',
            }
        ]        
    },
    Verify: {
        baseURL: socialMeBSB,
        url: '/login/verify',
        method: 'post',
        timeout: '50000',
        responses: [
      
        ]     
    },
    ListAllPatients: {
        baseURL: socialMeBSB,
        url: '/people',
        method: 'post',
        timeout: '500000',
        responses: [
            {
                response: 'Person found',
                code: 'E14AA',
            }
        ]        
    },
    ShowPatient: {
        baseURL: socialMeBSB,
        url: '/people',
        method: 'get',
        timeout: '50000',
        responses: [
            
        ]        
    },
    ListUsers: {
        baseURL: socialMeBSB,
        url: '/users',
        method: 'post',
        timeout: '50000',
        responses: [
            
        ]   
    },
    GetTotalRecords: {
        baseURL: socialMeBSB,
        url: '/people/count',
        method: 'post',
        timeout: '50000',
        responses: [
            
        ]   
    },
    GetTotalActivities: {
        baseURL: socialMeBSB,
        url: '/person/countActivities',
        method: 'post',
        timeout: '50000',
        responses: [
            
        ]   
    }
}
 
export default Requests;
