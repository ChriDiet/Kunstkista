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
            { id: 1, name: 'paintings' },
            { id: 2, name: 'knittings' },
            { id: 3, name: 'figurines' },
            { id: 4, name: 'woodworks' },
            { id: 5, name: 'photos' },
            { id: 6, name: 'turnedBowls' },
            { id: 7, name: 'rosepaintings' },
            { id: 8, name: 'writings' },
        ],

        salesForm: [
            { id: 1, type: 'Sale' },
            { id: 2, type: 'Auction' }
        ],

        listingImages: [
            { id: 1, listingId: 1, url: './images/monalisa.jpg' },
            { id: 2, listingId: 2, url: './images/overlegengutt.jpg' },
            { id: 3, listingId: 3, url: './images/mariusgenser.jpg' },
            { id: 4, listingId: 4, url: './images/dreidboller.jpg' },
            { id: 5, listingId: 5, url: './images/isbjorner.jpg' },
            { id: 6, listingId: 6, url: './images/skrik.jpg' },
            { id: 7, listingId: 7, url: './images/votter.jpeg' },
            { id: 8, listingId: 8, url: './images/rosemaling.jpg' },
        ],

        listings: [
            {
                id: 1,
                userId: 1,
                salesFormId: 1,
                categoryId: 1,
                title: 'Mona Lisa',
                price: '1 000 000',
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
                salesFormId: 1,
                categoryId: 2,
                title: 'Overlegen gutt',
                price: '400',
                conditionId: 2,
                measurements: '14',
                description: 'Overlegen gutt sittende på kant',
                story: '',
                pickup: true,
                send: true,
                dateListed: '2025-03-26',
            },

            {
                id: 3,
                userId: 3,
                salesFormId: 1,
                categoryId: 3,
                title: 'Mariusgenser',
                price: '2400',
                conditionId: 1,
                measurements: '123 x 70',
                description: 'Hjemmestrikket mariusgenser',
                story: '',
                pickup: true,
                send: true,
                dateListed: '2025-03-30',
            },

            {
                id: 4,
                userId: 4,
                salesFormId: 1,
                categoryId: 6,
                title: 'Trebolle',
                price: '1400',
                conditionId: 1,
                measurements: '123 x 70',
                description: 'Dreid bolle i tre',
                story: '',
                pickup: false,
                send: true,
                dateListed: '2025-03-31',
            },

            {
                id: 5,
                userId: 4,
                salesFormId: 1,
                categoryId: 2,
                title: 'Isbjørner i  tre',
                price: '950',
                conditionId: 3,
                measurements: '10 x 20',
                description: 'Håndlaget isbjørner i tre',
                story: '',
                pickup: false,
                send: true,
                dateListed: '2025-03-30',
            },

            {
                id: 6,
                userId: 5,
                salesFormId: 1,
                categoryId: 2,
                title: 'Skrik',
                price: '550',
                conditionId: 1,
                measurements: '91 x 73',
                description: 'Gammelt bilde malt med fettstift på papp',
                story: '',
                pickup: true,
                send: false,
                dateListed: '2025-03-19',
            },

            {
                id: 7,
                userId: 3,
                salesFormId: 1,
                categoryId: 2,
                title: 'Stjerne votter',
                price: '500',
                conditionId: 3,
                measurements: '18 x 10',
                description: 'Hjemmestrikket ullvotter',
                story: '',
                pickup: true,
                send: false,
                dateListed: '2025-03-17',
            }, 

            {
                id: 8,
                userId: 4,
                salesFormId: 1,
                categoryId: 1,
                title: 'Gammel rosemalt kiste',
                price: '1550',
                conditionId: 4,
                measurements: '91 x 73',
                description: 'Gammel rosemalt kiste',
                story: 'Den gamle rosemalte kisten ble laget for over hundre år siden av en bygdesnekker som ville fri til sin kjære. Han dekorerte den med vakre blomster og mønstre, hver linje et symbol på hans kjærlighet. Men kisten ble aldri hentet – jenta forsvant før han rakk å gi den bort. Siden den gang har kisten gått i arv, bærende på en historie om kjærlighet, håp og tapt tid.',
                pickup: true,
                send: false,
                dateListed: '2025-03-19',
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
            },

            {
                id: 2,
                isAdmin: false,
                userName: 'CarlLars',
                firstName: 'Carl',
                lastName: 'Larsson',
                password: 'Carl81',
                image: null,
                personalBio: 'Lager figurer',
                rating: 4.5,
            },

            {
                id: 3,
                isAdmin: false,
                userName: 'KariNordmann',
                firstName: 'Kari',
                lastName: 'Nordmann',
                password: 'passord123',
                image: null,
                personalBio: 'Jeg elsker å strikke. Mormor til to gutter på 3år og 5år<3',
                rating: 4.9,
            },

            {
                id: 4,
                isAdmin: false,
                userName: 'TreKongen',
                firstName: 'Torfinn',
                lastName: 'Hansen',
                password: 'kongen68',
                image: null,
                personalBio: 'Lager flotte ting ut av tre',
                rating: 4.6,
            },

            {
                id: 5,
                isAdmin: false,
                userName: 'EddieTheArtist',
                firstName: 'Edvard',
                lastName: 'Munch',
                password: 'fettstift123',
                image: null,
                personalBio: 'Maler',
                rating: 4.9,
            },

            {
                id: 6,
                isAdmin: false,
                userName: 'Marie91',
                firstName: 'Marie',
                lastName: 'Almasen',
                password: 'Agrfh7eW3',
                image: null,
                personalBio: 'Lager alt mulig rart',
                rating: 4.8,
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
            },

            {
                id: 2,
                userId: 2,
                phoneNumber: '48125075',
                email: 'calarsson@gmail.com',
                street: 'Kunstbakken 53',
                postalCodeId: 1,
                city: 'Bergen'
            },

            {
                id: 3,
                userId: 3,
                phoneNumber: '91542789',
                email: 'karino@gmail.com',
                street: 'Kongens gate 17',
                postalCodeId: 3,
                city: 'Oslo'
            },

            {
                id: 4,
                userId: 4,
                phoneNumber: '45892156',
                email: 'thansen@gmail.com',
                street: 'Tresvingen 6',
                postalCodeId: 3,
                city: 'Oslo'
            },

            {
                id: 5,
                userId: 5,
                phoneNumber: '63254786',
                email: 'munched@gmail.com',
                street: 'Maleriveien 82',
                postalCodeId: 4,
                city: 'Trondheim'
            },

            {
                id: 6,
                userId: 6,
                phoneNumber: '83469783',
                email: 'mariealma@gmail.com',
                street: 'Kunsttunet 73',
                postalCodeId: 4,
                city: 'Trondheim'
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
            },

            {
                id: 3,
                postalCode: 1354
            },

            {
                id: 4,
                postalCode: 4531
            }
        ],

        auctions: [
            { 
                id: 1,
                listingId: 1
            },
            { 
                id: 2,
                listingId: 2
            },
            { 
                id: 3,
                listingId: 3
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