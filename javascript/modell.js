const model = {
    app: {
        currentPage: 'home',
        pages: {
            home: 'home',
            profile: 'profile',
            editProfile: 'editProfile',
            auctions: 'auctions',
            login: 'logIn',
            inAuction: 'inAuction',
            myAuctions: 'myauctions',
            registerUser: 'registerUser',
            editUser: 'editUser',
            newSale: 'newSale',
            productPageCustomer: 'productPageCustomer',
            productCategory: 'productCategory',
            adminApprovalPage: 'adminApprovalPage', 
            userContactInfo: 'contactInfo' ,
            adminAuctionPageApproval: 'adminAuctionPageApproval',
            adminProductPageApproval: 'adminProductPageApproval'
        },
        isLoggedIn: false,
        isAuctionLive: false,
    },

    input: {
        header: {
            search: null
        },

        inAuctions: {
            bid: null
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
            streetName: null,
            postalCode: null,
            city: null,
            phoneNumber: null,
            password: null,
            repeatPassword: null,
            image: null,
            personalBio: null
        },

        newListing: {
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

        editUser: {
            newUserName: null,
            newPassword: null,
            repeatNewPassword: null
        },

        editProfile: {
            editBio: null,
            editProfilePicture: null,
            editCity: null,
            editDisplayName: null
        },

        productCategory: {
            pageIndex: "1",
            sort: null,
            minPrice: null,
            maxPrice: null,
            pickUp: true,
            send: false,
            city: null,
            condition: null,
        },

        userContactInfo: {
            message: null,
            subject: null
    }},

    data: {

        productCondition: [
            { id: 1, condition: 'mint' },
            { id: 2, condition: 'well used' },
            { id: 3, condition: 'gently used' },
            { id: 4, condition: 'poor' },
        ],
    

        categories: [
            { id: 1, name: 'painting' },
            { id: 2, name: 'knitting' },
            { id: 3, name: 'figurine' },
            { id: 4, name: 'woodwork' },
            { id: 5, name: 'photos' },
        ],

        salesForm: [
            { id: 1, type: 'Sale' },
            { id: 2, type: 'Auction' }
        ],

        listingImages: [
            { id: 1, listingId: 1, url: 'monalisa.jpg' },
            { id: 2, listingId: 1, url: 'monalisa1.jpg' },
            { id: 3, listingId: 1, url: 'monalisa2.jpg' },
            { id: 2, listingId: 2, url: 'overlegengutt.jpg' },
        ],

        listings: [
            {
                id: 1,
                userId: 1,
                salesFormId: 1,
                categoryId: 1,
                title: 'Mona Lisa',
                price: '1000000',
                conditionId: 3,
                measurements: '77x53',
                description: 'Maleri av en vakker dame',
                story: 'the Mona Lisa is a likely a portrait of the wife of a Florentine merchant. For some reason however, the portrait was never delivered to its patron, and Leonardo kept it with him when he went to work for Francis I, the King of France. The Mona Lisas mysterious smile has inspired many writers, singers, and painters.',
                pickup: false,
                send: true,
                dateListed: '2025-03-26',
            },

            {
                id: 2,
                userId: 2,
                salesFormId: 2,
                categoryId: 3,
                title: 'Overlegen gutt',
                price: '400',
                conditionId: 4,
                measurements: '14',
                description: 'Overlegen gutt sittende på kant',
                story: '',
                pickup: true,
                send: true,
                dateListed: '2025-03-26',
            }
        ],

        users: [
            {
                id: 1,
                isAdmin: false,
                userName: 'Leo52',
                firstName: 'Leonardo',
                lastName: 'da Vinci',
                password: 'Leoerbest',
                image: null,
                personalBio: 'Italiensk kunstner, ingeniør,skulptør og arkitekt',
                rating: 4.7,
            }
        ],

        userContactInfos: [
            {
                id: 1,
                userId: 1,
                phoneNumber: '82894327',
                email: 'leo52@gmail.com',
                street: 'Kunstbakken 57',
                postalCodeId: 1,
                city: 'Bergen'
            }
        ],

        postalCode: [
            {
                id: 1,
                postalCode: 1234
            },
            {
                id: 2,
                postalCode: 4321
            }
        ],

        auctions: [
            { 
                id: 1,
                listingId: 1
            }
        ],

        bids: [
            {
                id: 1,
                liveAuctionId: 1,
                userId: 1,
                date: '2025-03-27T10:30:30Z',
                bid: 123,
            },
            {
                id: 2,
                liveAuctionId: 1,
                userId: 2,
                date: '2025-03-27T11:30:30Z',
                bid: 150,
            },
            {
                id: 3,
                liveAuctionId: 2,
                userId: 3,
                date: '2025-03-27T10:35:30Z',
                bid: 1500,
            }
        ]   
    }
}