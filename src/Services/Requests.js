//const socialMe = 'https://social-me-v2.herokuapp.com/ergCNTis';
//const socialMe = 'http://192.168.2.16:3000/ergCNTis';
const socialMe = 'https://socialme-api.herokuapp.com/ergCNTis';

const Requests = {
    Prelogin: {
        baseURL: socialMe,
        url: '/prelogin',
        method: 'post',
        timeout: '50000',
        responses: [
            {
                response: 'Person Or Institution Not Found',
                code: '74AEA',
            },
            {
                response: 'Person found',
                code: 'E14AA'
            }
        ]        
    },
    Login: {
        baseURL: socialMe,
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
    RegisterPerson: {
        baseURL: socialMe,
        url: '/person/register',
        method: 'post',
        timeout: '50000',
        responses: [
            {
                response: 'Person successfully saved',
                code: 'FAC33',
            }
        ]     
    },
    CheckToken: {
        baseURL: socialMe,
        url: '/checkToken',
        method: 'get',
        timeout: '50000',
        responses: [
            {
                response: 'Person found',
                code: 'E14AA',
            }
        ]     
    },
    SearchPerson: {
        baseURL: socialMe,
        url: '/person/search',
        method: 'post',
        timeout: '50000',
        responses: [
            {
                response: 'Person found',
                code: 'E14AA',
            }
        ]     
    },
    ProfilePercentage: {
        baseURL: socialMe,
        url: '/person/percentage',
        method: 'get',
        timeout: '50000',
        responses: [
            {
                response: 'Percentage calculated',
                code: '63655',
            }
        ]     
    },
    ProfileUpdateSingleField: {
        baseURL: socialMe,
        url: '/person',
        method: 'patch',
        timeout: '50000',
        responses: [
            {
                response: 'Person edited successfully',
                code: '63FFF',
            }
        ]     
    },
    ProfilePersonRelantionshipsIndex: {
        baseURL: socialMe,
        url: '/relationships',
        method: 'post',
        timeout: '50000',
        responses: [
            {
                response: 'Relationships listed successfully',
                code: '36644',
            }
        ]     
    },
    ProfilePersonRelantionshipsStore: {
        baseURL: socialMe,
        url: '/relationships',
        method: 'post',
        timeout: '50000',
        responses: [
            {
                response: 'Relationships listed successfully',
                code: '36644',
            }
        ]     
    },
    ManagerBenefitsProductsView: {
        baseURL: socialMe,
        url: '/offerings',
        method: 'post',
        timeout: '50000',
        responses: [
            {
                response: 'Offerings listed',
                code: '16EEA',
            }
        ]     
    },
    ManagerBenefitsServicesView: {
        baseURL: socialMe,
        url: '/offerings',
        method: 'post',
        timeout: '50000',
        responses: [
            {
                response: 'Offerings listed',
                code: '16EEA',
            }
        ]     
    },
    ManagerProgramsView: {
        baseURL: socialMe,
        url: '/programs',
        method: 'post',
        timeout: '50000',
        responses: [
            {
                response: 'Programs listed successfully',
                code: '04501',
            }
        ]     
    }
}
 
export default Requests;
