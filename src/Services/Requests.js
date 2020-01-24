//const socialMe = 'https://social-me-v2.herokuapp.com/ergCNTis';
//const socialMe = 'http://192.168.2.16:3000/ergCNTis';
//const socialMe = 'https://socialme-api.herokuapp.com/ergCNTis';
const socialMeBSB = 'https://oracleapibsb.socialme.com.br/mRG1SOsr1lTQh1PxcFXu';
//const socialMeBSB = 'http://192.168.2.16:3000/v1/';

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
        timeout: '50000',
        responses: [
            {
                response: 'Person found',
                code: 'E14AA',
            }
        ]        
    },
    ShowPatient: {
        baseURL: socialMeBSB,
        method: 'get',
        timeout: '50000',
        responses: [
            
        ]        
    }
}
 
export default Requests;
