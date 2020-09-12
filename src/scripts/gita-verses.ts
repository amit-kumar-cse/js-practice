let gitaVerses = [
    '10',
    '10.8',
    '10.9',
    '10.10',
    '10.11',
    '10.12',
    '10.13',

    '11',
    '11.54',

    '12',
    '12.6',
    '12.7',
    '12.13',
    '12.14',

    '13',
    '13.3',
    '13.22',

    '14',
    '14.4',
    '14.18',
    '14.26',

    '15',
    '15.6',
    '15.7',
    '15.15',

    '16',
    '16.23',

    '17',
    '17.15',

    '18',
    '18.54',
    '18.55',
    '18.61',
    '18.65',
    '18.66',
    '18.78'
];

for(let verse of gitaVerses) {
    let split = verse.split('.');
    if(split.length === 1) {
        console.log(`

            <div dir="ltr" style="text-align: left;" trbidi="on"><span style="font-size: x-large;"><br /></span></div><div dir="ltr" style="text-align: left;" trbidi="on">
                <span style="font-size: x-large;">Chapter ${split[0]}</span>
            </div>`)
    }
    if(split.length === 2) {
        console.log(`            <div dir="ltr" style="text-align: left;" trbidi="on">
                <a href="https://vedabase.io/en/library/bg/${split[0]}/${split[1]}/">https://vedabase.io/en/library/bg/${split[0]}/${split[1]}/</a>
            </div>`);
    }

}
