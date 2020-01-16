const ThisSchema = new Mongoose.Schema({
    originIds: [{
        id: String,
        system: String,
    }],
    createdAt: {
        type: Date,
        required: true,
        default: Date.now,
    },
    updatedAt: {
        type: Date,
        required: true,
        default: Date.now,
    },
    name: {
        type: String,
        uppercase: true,
    },
    mainDocument: {
        name: {
            type: String,
            upper: true,
        },
        number: String,
        validated: Boolean,
    },
    documents: [{
        createdAt: {
            type: Date,
            required: true,
            default: Date.now,
        },
        updatedAt: {
            type: Date,
            required: true,
            default: Date.now,
        },
        validated: {
            type: Boolean,
            default: false,
        },
        name: {
            type: String,
            uppercase: true,
            required: true,
        },
        number: {
            type: String,
            uppercase: true,
        },
        fields: [{
            name: {
                type: String,
                uppercase: true,
            },
            value: {
                type: String,
                uppercase: true,
            },
        }],
        url: String,
    }],
    sex: {
        type: String,
        uppercase: true,
    },
    email: String,
    phones: [{
        ddi: String,
        ddd: String,
        number: {
            type: String,
            uppercase: true,
        },
        description: String,
        carrier: String,
    }],

    addresses: [
        {
            street: {
                type: String,
                uppercase: true,
            },
            number: {
                type: String,
                uppercase: true,
                default: "N/A",
            },
            neighborhood: {
                type: String,
                uppercase: true,
            },
            city: {
                type: String,
                uppercase: true,
            },
            stateOrProvince: {
                type: String,
                uppercase: true,
            },
            country: {
                type: String,
                uppercase: true,
            },
            complement: String,
            code: {
                zipCode: {
                    type: String,
                    uppercase: true,
                },
                lat: Number,
                lng: Number,
                plusCode: {
                    type: String,
                    uppercase: true,
                },
                osmCode: {
                    type: String,
                    uppercase: true,
                },
                others: [{
                    name: {
                        type: String,
                        required: true,
                        uppercase: true,
                    },
                    value: {
                        type: String,
                        required: true,
                        uppercase: true,
                    },
                }],
            },
        },
    ],
    birth: {
        date: Date,
        city: {
            type: String,
            uppercase: true,
        },
        state: {
            type: String,
            uppercase: true,
        },
        country: {
            type: String,
            uppercase: true,
        },
    },
    death: {
        date: Date,
        city: {
            type: String,
            uppercase: true,
        },
        state: {
            type: String,
            uppercase: true,
        },
        country: {
            type: String,
            uppercase: true,
        },
        cause: {
            type: String,
            uppercase: true,
        },
    },
    civilState: {
        type: String,
        uppercase: true,
    },
    mother: {
        person: {
            type: Mongoose.Schema.ObjectId,
            ref: thisModelName,
        },
        name: {
            type: String,
            uppercase: true,
        },
    },
    father: {
        person: {
            type: Mongoose.Schema.ObjectId,
            ref: thisModelName,
        },
        name: {
            type: String,
            uppercase: true,
        },
    },
    situations: [{
        createdAt: {
            type: Date,
            required: true,
            default: Date.now,
        },
        updatedAt: {
            type: Date,
            required: true,
            default: Date.now,
        },
        startDate: {
            type: Date,
            required: true,
        },
        endDate: Date,
        situation: {
            type: String,
            uppercase: true,
            required: true,
        },
        description: {
            type: String,
            uppercase: true,
            required: true,
        },
        status: {
            type: Boolean,
            required: true,
            default: true,
        },
    }],
    notes: [{
        createdAt: {
            type: Date,
            required: true,
            default: Date.now,
        },
        updatedAt: {
            type: Date,
            required: true,
            default: Date.now,
        },
        message: String,
    }],
    settings: {},
    schooling: {
        type: String,
        uppercase: true,
    },
    profession: {
        type: String,
        uppercase: true,
    },
}, { collection: thisCollectionName });