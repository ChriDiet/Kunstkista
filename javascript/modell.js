const model = {
    app: {currentPage: 'home',
          pages: {
            home:'home',
            profile:'profile',
            editProfile: 'editProfile',
            auctions:'auctions',
            login: 'logIn',
            inAuction:'inAuction',
            myAuctions:'myauctions',
            registerUser:'registerUser',
            editUser:'editUser',
            newSale:'newSale',
            productPageCustomer:'productPageCustomer',
            productCategory:'productCategory',
            adminApprovalPage:'adminApprovalPage',
    },  
         isLoggedIn: false,
        },
        
        input: {
            header: {
                search: null
            },

            inAuctions: {
                newBid: null
            },
                
            logIn: {
                userName: null,
                password: null
            },
            registerUser: {
                isAdmin: false,
                userName: null,
                firstName: null,
                lastName: null,
                email: null,
                adress1: null,
                adress2: null,
                phoneNumber: null,
                password: null,
                repeatPassword: null,
                image: null,    
                personalBio: null
            },

            newListing:{
                salesForm: 'sale',
                category: null,
                title: null,
                price: null,
                condition: 'mint',
                measurements: null,
                description: null,
                pickup: false,
                send: false,
                images: null,
                adress:{
                    streetName: null,
                    postalCode: null,
                    city: null
                }
            },

            editUser:{
                newUserName: null,
                newPassword: null,
                repeatNewPassword: null
            },

            editProfile:{
                editBio: null,
                editProfilePicture: null,
                editCity: null,
                editDisplayName: null
            },
            productCategory:{
                pageIndex: "1",
                sort:null,
                filter:{
                    minPrice: null,
                    maxPrice: null,
                    pickUp: true,
                    send: false,
                    city: null,
                    condition: null,
                }
            }
        },
        
        data: {
            
            
            listings:[{
                id:'1',
                salesForm: 'sale',
                category: null,
                title: 'Mona Lisa',
                price: '1000000',
                condition: null,
                measurements: null,
                description: null,
                pickup: false,
                send: false,
                images: null,
                adress:{
                    streetName: null,
                    postalCode: null,
                    city: null
                }
            ,

            }]
















    }
}