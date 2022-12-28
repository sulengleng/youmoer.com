export const label = [
    {
        id: 'Work',
        name: '一点打工实录',
        options: [
            { value: 'afk', label: 'AFK IP部平面设计', checked: false },
            { value: 'light', label: '以闪亮之名 发行平面设计', checked: false },
        ],
    },
    {
        id: 'Practice',
        name: '一些练习',
        options: [
            { value: 'redesign', label: '曲名Redesign', checked: false },
            { value: '2022', label: '作字夏フェス2022', checked: false },
        ],
    },
]

export const labelTitle = label.map(options => options.label)
  

