export const sampleChats = [
    {
    avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
    name: "John Doe",
    _id: "1",
    groupChat: false,
    members: ["1", "2", "3", "4"],
    },
    {
        avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
        name: "John",
        _id: "2",
        groupChat: false,
        members: ["1", "2", "3", "4"],
    },
    {
        avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
        name: "Doe",
        _id: "3",
        groupChat: false,
        members: ["1", "2", "3", "4"],
    },
    {
        avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
        name: "JD",
        _id: "4",
        groupChat: false,
        members: ["1", "2", "3", "4"],
    },
    
];

export const sampleUsers = [
    
];

export const sampleNotifications = [
    {
        sender: {
            avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
            name: "John Doe",
        },
        _id: "1",
    },
    {
        sender: {
            avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
            name: "John",
        },
        _id: "2",
    },
    {
        sender: {
            avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
            name: "Doe",
        },
        _id: "3",
    },
    
];

export const sampleMessages = [
    {
        attachments: [],
        content: "Your message is here",
        _id: "ncuivbebgiurer",
        sender: {
            _id: "user._id",
            name: "Chaman",
        },
        chat: "chatId",
        createdAt: "2024-02-12T10:41:30.630Z",
    },
    {
        attachments: [
            {
                public_id: "fafgwgs",
                url: "https://www.w3schools.com/howto/img_avatar.png",
            }
        ],
        content: "",
        _id: "csjfnw",
        sender: {
            _id: "csjfnw",
            name: "Chaman2",
        },
        chat: "chatId",
        createdAt: "2024-02-12T10:41:30.630Z",
    },
    
];

export const dashboardData = {
    users: [
        {
            _id: 1,
            avatar: "https://www.w3schools.com/howto/img_avatar.png",
            name: 'John Doe',
            username: 'johndoe',
            friends: 10,
            groups: 3,
        },
        {
            _id: 2,
            avatar: "https://www.w3schools.com/howto/img_avatar.png",
            name: 'Jane Smith',
            username: 'janesmith',
            friends: 8,
            groups: 5,
        }, 
    ],
    chats: [
        {
            name: 'John Doe',
            avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
            _id: "1",
            groupChat: false,
            members: [{_id: "1", avatar: "https://www.w3schools.com/howto/img_avatar.png"}, {_id: "2", avatar: "https://www.w3schools.com/howto/img_avatar.png"}],
            totalMembers: 2,
            totalMessages: 20,
            creator: {
                name: "John Doe",
                avatar: "https://www.w3schools.com/howto/img_avatar.png",
            }
        },
        {
            name: 'Lass Gp',
            avatar: ["https://www.w3schools.com/howto/img_avatar.png"],
            _id: "2",
            groupChat: true,
            members: [{_id: "1", avatar: "https://www.w3schools.com/howto/img_avatar.png"}, {_id: "2", avatar: "https://www.w3schools.com/howto/img_avatar.png"}],
            totalMembers: 2,
            totalMessages: 20,
            creator: {
                name: "John Boi",
                avatar: "https://www.w3schools.com/howto/img_avatar.png",
            }
        },
    ],
    messages: [
        {
            attachments: [],
            content: "Your message is here",
            _id: "ncuivbebgiurer",
            sender: {
                avatar: "https://www.w3schools.com/howto/img_avatar.png",
                name: "Chaman",
            },
            chat: "chatId",
            groupChat: false,
            createdAt: "2024-02-12T10:41:30.630Z",
        },
        {
            attachments: [
                {
                    public_id: "fafgwgs",
                    url: "https://www.w3schools.com/howto/img_avatar.png",
                }
            ],
            content: "",
            _id: "csjfnw",
            sender: {
                avatar: "https://www.w3schools.com/howto/img_avatar.png",
                name: "Chaman2",
            },
            chat: "chatId",
            groupChat: true,
            createdAt: "2024-02-12T10:41:30.630Z",
        },
    ]
}