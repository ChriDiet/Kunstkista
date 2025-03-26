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
                adress:{
                    streetName: null,
                    postalCode: null,
                    city: null
                }, 
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
                story: null,
                pickup: false,
                send: false,
                images: null,
                
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
            condition:{
                mint:'mint',
                wellUsed:'well used',
                gentlyUsed:'gently used',
                poor:'poor',
            
            },
            
                categories:[ 
                    {id: 1, name: 'painting'},
                    {id: 2, name: 'knitting'},
                    {id: 3, name: 'figurine'},
                    {id: 4, name: 'woodwork'},
                    {id: 5, name: 'photos'},
                    {id: 6, name: 'painting'}
                    ],

           

        
            listings:[
                {
                id: 1,
                userid: 1,
                salesForm: 'sale',
                categoryId: 1,
                title: 'Mona Lisa',
                price: '1000000',
                condition: 'gently used',
                measurements: '77x53',
                description: 'Maleri av en vakker dame',
                story: 'the Mona Lisa is a likely a portrait of the wife of a Florentine merchant. For some reason however, the portrait was never delivered to its patron, and Leonardo kept it with him when he went to work for Francis I, the King of France. The Mona Lisas mysterious smile has inspired many writers, singers, and painters.',
                pickup: false,
                send: true,
                images: [monalisa.jpg]
                },
                
                {
                id:'2',
                salesForm: 'sale',
                categoryId: 3,
                title: 'Overlegen gutt',
                price: '400',
                condition: 'poor',
                measurements: '14',
                description: 'Overlegen gutt sittende på kant',
                story: '',
                pickup: true,
                send: true,
                images: [Overlegengutt.jpg],
                }],
            
            users:[{
                isAdmin: false,
                userName: 'Leo52',
                firstName: 'Leonardo',
                lastName: 'da Vinci',
                email: 'Leo52@gmail.com',
                adress: {
                    streetName: 'Kunstsvingen 17',
                    postalCode: '4321',
                    city: 'Molde'
                },
                adress2: null,
                phoneNumber: '12345688',
                password: 'Leoerbest',
                image: null,    
                personalBio: 'Italiensk kunstner, ingeniør,skulptør og arkitekt',
                rating: 4.7,
            }]
















    }
}