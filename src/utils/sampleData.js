export const sampleData = {
    head: {
        data: {
            name: 'Tata Steel',
            currentValue: 200,
            targetValue: 400,
            completionPercentage: 50,
            status: 'Off Track',
        },
        children: [
            {
                head: {
                    data: {
                        name: 'Factory A',
                        currentValue: 20,
                        targetValue: 100,
                        completionPercentage: 20,
                        status: 'At Risk',
                    },
                    children: [
                        {
                            head: {
                                data: {
                                    name: 'Godown AA',
                                    currentValue: 30,
                                    targetValue: 100,
                                    completionPercentage: 30,
                                    status: 'Off Track',
                                },
                                children: [],
                            },
                        },
                    ],
                },
            },
            {
                head: {
                    data: {
                        name: 'Factory B',
                        currentValue: 30,
                        targetValue: 100,
                        completionPercentage: 30,
                        status: 'Off Track',
                    },
                    children: [],
                },
            },
            {
                head: {
                    data: {
                        name: 'Factory C',
                        currentValue: 150,
                        targetValue: 200,
                        completionPercentage: 75,
                        status: 'On Track',
                    },
                    children: [
                        {
                            head: {
                                data: {
                                    name: 'Godown CA',
                                    currentValue: 30,
                                    targetValue: 100,
                                    completionPercentage: 30,
                                    status: 'Off Track',
                                },
                                children: [
                                    {
                                        head: {
                                            data: {
                                                name: 'Supplier CA1',
                                                currentValue: 80,
                                                targetValue: 100,
                                                completionPercentage: 30,
                                                status: 'On Track',
                                            },
                                            children: [],
                                        },
                                    },
                                ],
                            },
                        },
                        {
                            head: {
                                data: {
                                    name: 'Godown CB',
                                    currentValue: 30,
                                    targetValue: 100,
                                    completionPercentage: 30,
                                    status: 'Off Track',
                                },
                                children: [
                                    {
                                        head: {
                                            data: {
                                                name: 'Supplier CB1',
                                                currentValue: 30,
                                                targetValue: 100,
                                                completionPercentage: 30,
                                                status: 'Off Track',
                                            },
                                            children: [],
                                        },
                                    },
                                ],
                            },
                        },
                    ],
                },
            },
        ],
    },
};
