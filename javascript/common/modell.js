const model = {
    app: {
        currentPage: 'home',
        selectedListingId: 1,
        selectedCategory: 2,
        selectedAuctionProductId: 2,
        selectedListingForApprovalId: 1,
        previousPage: '',
        pages: {
            home: 'home',
            profile: 'profile',
            editProfile: 'editProfile',
            auctions: 'auctions',
            login: 'logIn',
            inAuction: 'inAuction',
            myAuctions: 'myauctions',
            registerUser: 'registerUser',
            changePassword: 'changePassword',
            editUser: 'editUser',
            newSale: 'newSale',
            productPage: 'productPage',
            categories: 'categories',
            adminApprovalPage: 'adminApprovalPage', 
            userContactInfo: 'contactInfo' ,
            adminAuctionPageApproval: 'adminAuctionPageApproval',
            adminProductPageApproval: 'adminProductPageApproval',
            productCategory: 'productCategory'
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

        categories: {
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
            { id: 1, condition: 'Som ny' },
            { id: 2, condition: 'Godt brukt' },
            { id: 3, condition: 'Pent brukt' },
            { id: 4, condition: 'Dårlig' },
        ],
    

        categories: [
            { id: 1, name: 'Malerier' },
            { id: 2, name: 'Strikketøy' },
            { id: 3, name: 'Trefigurer' },
            { id: 4, name: 'Treverk' },
            { id: 5, name: 'Fotografier' },
            { id: 6, name: 'Dreide boller' },
            { id: 7, name: 'Rosemaling' },
            { id: 8, name: 'Noveller/Skriv' },
        ],

        salesForm: [
            { id: 1, type: 'Vanlig salg' },
            { id: 2, type: 'Auksjon' }
        ],

        listingImages: [
            { id: 1, listingId: 1, url: './images/maleri.jpg' },
            { id: 2, listingId: 2, url: './images/figurer.jpg' },
            { id: 3, listingId: 3, url: './images/strikketoy.jpg' },
            { id: 4, listingId: 4, url: './images/dreidbolle.jpg' },
            { id: 5, listingId: 5, url: './images/figurer.jpg' },
            { id: 6, listingId: 6, url: './images/maleri.jpg' },
            { id: 7, listingId: 7, url: './images/strikketoy.jpg' },
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
                story: 'The Mona Lisa is a likely a portrait of the wife of a Florentine merchant. For some reason however, the portrait was never delivered to its patron, and Leonardo kept it with him when he went to work for Francis I, the King of France. The Mona Lisas mysterious smile has inspired many writers, singers, and painters.',
                pickup: false,
                send: true,
                dateListed: '2025-03-26',
                waitingForApproval: true,
                approvedForSale: false,
            },

            {
                id: 2,
                userId: 2,
                salesFormId: 1,
                categoryId: 3,
                title: 'Overlegen gutt',
                price: '400',
                conditionId: 2,
                measurements: '14',
                description: 'Overlegen gutt sittende på kant',
                story: 'Hvert produkt bærer med seg en liten historie. Det er laget med omtanke, tålmodighet og øye for detaljer - inspirert av tradisjoner, natur og lidenskapen for håndverk.<br><br> Prosessen starter ofte med en idé, en følelse eller et minne, og vokser frem gjennom mange små valg og nøye utført arbeid. Dette produktet er en del av en lengre reise, der hvert steg i prosessen er like viktig som sluttresultatet. Det handler ikke bare om å lage noe – det handler om å formidle noe. Noe ekte. Noe varig.',
                pickup: true,
                send: true,
                dateListed: '2025-03-26',
                waitingForApproval: false,
                approvedForSale: true,
            },

            {
                id: 3,
                userId: 3,
                salesFormId: 1,
                categoryId: 2,
                title: 'Mariusgenser',
                price: '2400',
                conditionId: 1,
                measurements: '123 x 70',
                description: 'Hjemmestrikket mariusgenser',
                story: 'Hvert produkt bærer med seg en liten historie. Det er laget med omtanke, tålmodighet og øye for detaljer - inspirert av tradisjoner, natur og lidenskapen for håndverk.<br><br> Prosessen starter ofte med en idé, en følelse eller et minne, og vokser frem gjennom mange små valg og nøye utført arbeid. Dette produktet er en del av en lengre reise, der hvert steg i prosessen er like viktig som sluttresultatet. Det handler ikke bare om å lage noe – det handler om å formidle noe. Noe ekte. Noe varig.',
                pickup: true,
                send: true,
                dateListed: '2025-03-30',
                waitingForApproval: false,
                approvedForSale: true,
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
                story: 'Hvert produkt bærer med seg en liten historie. Det er laget med omtanke, tålmodighet og øye for detaljer - inspirert av tradisjoner, natur og lidenskapen for håndverk.<br><br> Prosessen starter ofte med en idé, en følelse eller et minne, og vokser frem gjennom mange små valg og nøye utført arbeid. Dette produktet er en del av en lengre reise, der hvert steg i prosessen er like viktig som sluttresultatet. Det handler ikke bare om å lage noe – det handler om å formidle noe. Noe ekte. Noe varig.',
                pickup: false,
                send: true,
                dateListed: '2025-03-31',
                waitingForApproval: false,
                approvedForSale: true,
            },

            {
                id: 5,
                userId: 4,
                salesFormId: 1,
                categoryId: 3,
                title: 'Isbjørner i  tre',
                price: '950',
                conditionId: 3,
                measurements: '10 x 20',
                description: 'Håndlaget isbjørner i tre',
                story: 'Hvert produkt bærer med seg en liten historie. Det er laget med omtanke, tålmodighet og øye for detaljer - inspirert av tradisjoner, natur og lidenskapen for håndverk.<br><br> Prosessen starter ofte med en idé, en følelse eller et minne, og vokser frem gjennom mange små valg og nøye utført arbeid. Dette produktet er en del av en lengre reise, der hvert steg i prosessen er like viktig som sluttresultatet. Det handler ikke bare om å lage noe – det handler om å formidle noe. Noe ekte. Noe varig.',
                pickup: false,
                send: true,
                dateListed: '2025-03-30',
                waitingForApproval: false,
                approvedForSale: true,
            },

            {
                id: 6,
                userId: 5,
                salesFormId: 1,
                categoryId: 1,
                title: 'Skrik',
                price: '550',
                conditionId: 1,
                measurements: '91 x 73',
                description: 'Gammelt bilde malt med fettstift på papp',
                story: 'Hvert produkt bærer med seg en liten historie. Det er laget med omtanke, tålmodighet og øye for detaljer - inspirert av tradisjoner, natur og lidenskapen for håndverk.<br><br> Prosessen starter ofte med en idé, en følelse eller et minne, og vokser frem gjennom mange små valg og nøye utført arbeid. Dette produktet er en del av en lengre reise, der hvert steg i prosessen er like viktig som sluttresultatet. Det handler ikke bare om å lage noe – det handler om å formidle noe. Noe ekte. Noe varig.',
                pickup: true,
                send: false,
                dateListed: '2025-03-19',
                waitingForApproval: false,
                approvedForSale: true,
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
                story: 'Hvert produkt bærer med seg en liten historie. Det er laget med omtanke, tålmodighet og øye for detaljer - inspirert av tradisjoner, natur og lidenskapen for håndverk.<br><br> Prosessen starter ofte med en idé, en følelse eller et minne, og vokser frem gjennom mange små valg og nøye utført arbeid. Dette produktet er en del av en lengre reise, der hvert steg i prosessen er like viktig som sluttresultatet. Det handler ikke bare om å lage noe – det handler om å formidle noe. Noe ekte. Noe varig.',
                pickup: true,
                send: false,
                dateListed: '2025-03-17',
                waitingForApproval: false,
                approvedForSale: true,
            }, 

            {
                id: 8,
                userId: 4,
                salesFormId: 1,
                categoryId: 7,
                title: 'Gammel rosemalt kiste',
                price: '1550',
                conditionId: 4,
                measurements: '91 x 73',
                description: 'Gammel rosemalt kiste',
                story: 'Den gamle rosemalte kisten ble laget for over hundre år siden av en bygdesnekker som ville fri til sin kjære. Han dekorerte den med vakre blomster og mønstre, hver linje et symbol på hans kjærlighet. Men kisten ble aldri hentet – jenta forsvant før han rakk å gi den bort. Siden den gang har kisten gått i arv, bærende på en historie om kjærlighet, håp og tapt tid.',
                pickup: true,
                send: false,
                dateListed: '2025-03-19',
                waitingForApproval: false,
                approvedForSale: true,
            }
        ],

        users: [
            {
                id: 1,
                isAdmin: false,
                isLoggedIn: false,
                userName: 'Leo52',
                firstName: 'Leonardo',
                lastName: 'da Vinci',
                password: 'Leoerbest',
                image: null,
                personalBio: 'Italiensk kunstner, ingeniør,skulptør og arkitekt',
                rating: 4.7,
                verified: true
            },

            {
                id: 2,
                isAdmin: false,
                isLoggedIn: false,
                userName: 'CarlLars',
                firstName: 'Carl',
                lastName: 'Larsson',
                password: 'Carl81',
                image: null,
                personalBio: 'Lager figurer',
                rating: 4.5,
                verified: false
            },

            {
                id: 3,
                isAdmin: false,
                isLoggedIn: false,
                userName: 'KariNordmann',
                firstName: 'Kari',
                lastName: 'Nordmann',
                password: 'passord123',
                image: null,
                personalBio: 'Jeg elsker å strikke. Mormor til to gutter på 3år og 5år<3',
                rating: 4.9,
                verified: false
            },

            {
                id: 4,
                isAdmin: false,
                isLoggedIn: false,
                userName: 'TreKongen',
                firstName: 'Torfinn',
                lastName: 'Hansen',
                password: 'kongen68',
                image: null,
                personalBio: 'Lager flotte ting ut av tre',
                rating: 4.6,
                verified: false
            },

            {
                id: 5,
                isAdmin: false,
                isLoggedIn: false,
                userName: 'EddieTheArtist',
                firstName: 'Edvard',
                lastName: 'Munch',
                password: 'fettstift123',
                image: null,
                personalBio: 'Maler',
                rating: 4.9,
                verified: true
            },

            {
                id: 6,
                isAdmin: false,
                isLoggedIn: false,
                userName: 'Marie91',
                firstName: 'Marie',
                lastName: 'Almasen',
                password: 'Agrfh7eW3',
                image: null,
                personalBio: 'Lager alt mulig rart',
                rating: 4.8,
                verified: true
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