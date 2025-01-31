

const transferMsg = {
    ground : [
        'There\'s no slot for the {0} x {1} on any containers on your body, so you have to leave it to the ground.',

        '你身上所有地方都没有空位放置了，你只好把{0} x {0}扔地上。'
    ],

    body(item) {
        const html = [
            [
                'You take {0} into your hands.',
                '你把{0}拿好了。'
            ],
            [
                'You put {0} into your clothes pocket.',
                '你把{0}放进了衣服口袋里。'
            ]
        ];
        
        if (Pocket.getMaxSlot('body') <= 2) {
            return P.templet(html[0], item.name);
        }

        return P.templet(html[1], item.name);
    },

    held(item) {
        const itemId = iManager.getEquip('held').id;
        const held = Items.data[itemId];
        const html = [
            'You put {0} into {1}.',
            '你把{0}放进了{1}。'
        ];
        return P.templet(html, item.name, held.name);
    },

    bag : [
        'Your pockets are full, so you put {0} to your bag.',
        '你的口袋装满了，所以你将{0}放进了背包。'
    ],
	
    cart : [
        'Your bag are full, so you put {0} to your cart.',
        '你的背包满了，所以你将{0}放进了折叠推车里。'
    ],

    hole : [
        'Your hands and available container all full. With no other choice, you put {0} into your asshole.',
        '你双手以及可用的容器都已经装满了，无可奈何下，你把{0}塞进你的屁眼里。'
    ],
	
    home(item) {
        const it = item.count > 1 ? 'them' : 'it';
        const html = [
            'There\'s no slot for the {0} for any containers on your body, so you take {1} to your home.',
            '你身上所有地方都没有空位放置了，你只好把{0}收进自己的家里。'
        ];

        return P.templet(html, item.name, it);
    },

    farm(item) {
        const it = item.count > 1 ? 'them' : 'it';
        const html = [
            'There\'s no slot for the {0} for any containers on your body, so you take {1} to farmbarns.',
            '你身上所有地方都没有空位放置了，你只好把{0}收入了谷仓。'
        ];

        return P.templet(html, item.name, it);
    },

    lockers(item) {
        const it = item.count > 1 ? 'them' : 'it';
        const html = [
            'There\'s no slot for the {0} for any containers on your body, so you take {1} to your lockers.',
            '你身上所有地方都没有空位放置了，你只好把{0}收进自己的储物柜里。'
        ];

        return P.templet(html, item.name, it);
    },

    bushes(item) {
        const it = item.count > 1 ? 'them' : 'it';
        const html = [
            'There\'s no slot for the {0} for any containers on your body, so you hide {1} to the bushes.',
            '你身上所有地方都没有空位放置了，你只好把{0}藏到一处树丛里。'
        ];

        return P.templet(html, item.name, it);
    },

    trashbin(item) {
        const it = item.count > 1 ? 'them' : 'it';
        const html = [
            'There\'s no slot for the {0} for any containers on your body, so you hide {1} to the trashbin.',
            '你身上所有地方都没有空位放置了，你只好把{0}藏到垃圾桶里。'
        ];

        return P.templet(html, item.name, it);
    },

    hideout(item) {
        const it = item.count > 1 ? 'them' : 'it';
        const html = [
            'There\'s no slot for the {0} for any containers on your body, so you take {1} to your hideout.',
            '你身上所有地方都没有空位放置了，你只好把{0}放回你的藏身处。'
        ];

        return P.templet(html, item.name, it);
    }
};

const sortOutMsg = {
    body_broken : [
        'The items in your clothes pockets fall to the ground as your clothes are torn apart.',
        '装在衣服口袋里的物品，伴随着衣服的破碎掉落到地上了。'
    ],

    body_changed : [
        'You change your clothes, and the extra items are sorted out.',
        '你更换了衣服，多余的物品被你整理出来。'
    ],
	
    bag : [
        'You change your bag, and the extra items are sorted out.',
        '你更换了个更小的背包，多余的物品被你整理出来。'
    ],

    held : [
        'You change your handheld bag, and the extra items are sorted out.',
        '你更换了个更小的手提袋后，多余的物品被你整理出来。'
    ],

    cart : [
        'You change your cart, and the extra items are sorted out.',
        '你更换了个更小的推车，多余的物品被你整理出来。'
    ],

    hole : [
        'Your promiscuity is not enough to keep the items in your asshole. The items are expelled from your body.',
        '你的淫荡度不足以将物品继续存放在肠道里。在肠道蠕动下，存放在肠内的物品被排放了出来。'
    ]

};

const stateEffects = {
    hungry : [
        `<span class='orange'>You are starving.</span><br>
		 You might black out if you don't eat something soon.`,
        `<span class='orange'>你快饿晕了。</span><br>
		 如果你不尽快吃点东西，你可能会晕倒。`
    ],
    thirst : [
        `<span class='orange'>You are dehydrated.</span><br>
		 You might black out if you don't drink something soon.`,
        `<span class='orange'>你快渴死了。</span><br>
		 如果你不尽快喝点东西，你可能会晕倒。`
    ]
};

const equipText = {
    held : {
        equip : [
            'You take the {0} into your hands.',
            '你拿起了{0}。'
        ],

        unequip : [
            'You put the {0} down.',
            '你放下了{0}。'
        ]
    },

    bag : {
        equip : [
            'You equip the {0} to your body.',
            '你将{0}装备到身上。'
        ],

        unequip : [
            'You take off the {0} from your body.',
            '你将{0}从身上卸下。'
        ]
    },

    cart : {
        equip : [
            'You push the {0} in front of you.',
            '你推着{0}走在前面。'
        ],

        unequip : [
            'You leave the {0} aside.',
            '你将{0}停放在了一旁。'
        ]
    },

    wallet : {
        equip : [
            'You use the {0} as your wallet.',
            '你将{0}作为钱包使用。'
        ],

        unequip : [
            'You take off the {0}.',
            '你将{0}收好。'
        ]
    }
};

const combatMsg = {
    feedDrug : {
        angelpowder : {
            EN : `{0} looks at your lifeless face and finds it rather dull. So, <<He>> takes out a pink syringe and injects it directly into your body.<br>
			<span class ='pink'>You are injected with a dose of Seraphic Euphoria.</span>`,

            CN : `{0}看着你毫无声息的脸，觉得这样很无趣。于是<<He>>拿出一针粉色的针剂，直接打在了你身上。<br>
			<span class ='pink'>你被注射了一针天使醉。</span>`
        },

        inject : {
            EN : `{0} takes out a {1} syringe and injects it directly into your body.<br>
			<span class ='pink'>You are injected with a dose of {1}.</span>`,
            CN : `{0}拿出一针{0}，直接打在了你身上。<br>
			<span class ='pink'>你被注射了一针{0}。</span>`
        },

        mouth : {
            EN : '{0} feeds you a <span class="pink">{1}</span>.',
            CN : '{0}往你嘴里喂了颗<span class="pink">{1}</span>。'
        },

        anus : {
            EN : '{0} put a <span class="pink">{1}</span> into your anus.',
            CN : '{0}往你肛门塞了颗<span class="pink">{1}</span>。'
        },
        
        kiss : {
            EN : '{0} feeds you a <span class="pink">{1}</span> through mouth to mouth as <<he>> kiss you.',
            CN : '{0}亲吻你之余，通过嘴对嘴的方式喂了你一颗<span class="pink">{1}</span>。'
        },
        random : {
            EN : '{0} feeds you a <span class="pink">{1}</span> as you gasp for breath.',
            CN : '{0}在你喘气的空档强行喂了你一颗<span class="pink">{1}</span>。'
        }
    }
};

const sMsg = {
    transferMsg,
    sortOutMsg,
    stateEffects,
    equipText,
    combatMsg,

    getItem : {
        EN : '<span class=\'green\'>You got {0}.</span><br>',
        CN : '<span class=\'green\'>你获得了{0}。</span><br>'
    },

    useItem : {
        EN : 'You {1} the {0}.',
        CN : '你{0}了{1}。'
    },

    dropItem : {
        EN : 'You drop {0} x {1}.',
        CN : '你丢弃了{0} x {1}。'
    },

    pickDrug : {
        EN : '{0} take the {1} out of <<his>> pocket.',
        CN : '{0}从口袋里拿出了{1}。'
    },

    takeStorage : {
        EN : 'You take {0} x {1} from {2}.',
        CN : '你从{2}拿出了{0} x {1}。'
    },

    noSpace : {
        EN : 'You have no space for {0}.',
        CN : '你身上位置不够了。'
    },

    whackdrugs_success : {
        EN : 'You did it, the {0} is knocked out of <<his>> hand, and <<he>> looks even angrier.',
        CN : '你成功了，{0}从{1}手中被打掉了，{1}看起来更加生气了。'
    },

    whackdrugs_fail : {
        EN : 'You failed, then your behavior makes {0} even angrier.',
        CN : '你失败了，你的行为让{0}更加生气了。'
    },

    whackdrugs_try : {
        EN : 'You try to whack the {0} away.',
        CN : '你试图击落对方手中的{0}。'
    },

    feedDrug : {
        EN : '{0} {1} you the {2}.',
        CN : '{0}{1}了你{2}。'
    }
};


Object.defineProperties(window,{
    sMsg : { value : sMsg }
});
