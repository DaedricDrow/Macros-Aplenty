let table = game.tables.getName("<insert-table-name-here>");

let editor = new Dialog({
    title: '<insert-a-title-here>',
    content: 'Choose how to roll.',
    buttons: {
        publicroll: {
            label: 'Public Roll',
            callback: () => {
                game.tables.getName(table).draw({rollMode: 'publicroll'}).results;
            }
        },
        gmroll: {
            label: 'GM Roll',
            callback: () => {
                game.tables.getName(table).draw({rollMode: 'gmroll'}).results;
            }
        },
        close: {
            icon: "<i class='fas fa-tick'></i>",
            label: `Close`
        },
    },
    default: "close",
    close: () => {}
});

editor.render(true)