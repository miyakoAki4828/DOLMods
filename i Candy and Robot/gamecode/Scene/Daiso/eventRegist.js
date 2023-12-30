//iMod BaseScene DaisoShop
iEvent.registEvent('DaisoShop',
    { 
        episode: 'Intro',
        type: 'Event',
        eventnext: true,
        nextcode: '<<=iEvent.unsetEvent()>>',
        require: ()=>{ return iEvent.getFlag('DaisoShop', 'intro') !== 1 && between(Time.hour, 9, 19) && !iEvent.getFlag('DaisoShop', 'thief') }
    },
    {
        episode: 'Night',
        type: 'Scene',

        nextcode: '',
        initcode:'',
        require: ()=>{ return !between(Time.hour, 7, 19) }
    },
    {
        episode: 'Exposed',
        type: 'Event',
        branch: 'Naked',

        priority: 10,
        nextcode: '<<=iEvent.unsetEvent()>>',

        require: ()=>{ return V.exposed >= 2 && V.tvar.lastPassage != 'BaseScene DaisoShop' }
    }
)