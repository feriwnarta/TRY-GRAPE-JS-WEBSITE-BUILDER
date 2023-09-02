const editor = grapesjs.init({
    // Indicate where to init the editor. You can also pass an HTMLElement
    container: '#gjs',
    // Get the content for the canvas directly from the element
    // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
    fromElement: true,
    width: 'auto',
    // Size of the editor
    // Disable the storage manager for the moment
    storageManager: false,
    // ...
    layerManager: {
        appendTo: '.layers-container'
    },
    // We define a default panel as a sidebar to contain layers
    panels: {
        defaults: [{
            id: 'layers',
            el: '.panel__right',
        }]
    },
    styleManager: {
        appendTo: '.styles-container',
        sectors: [
            {
                open: true,
                name: 'Edit',
                // Use built-in properties
                buildProps: ['font-family', 'font-size', 'font-weight', 'color', 'background-color', 'text-align',  'Ukuran', 'Margin', 'Padding'],
                properties: [
                    {
                        type: 'composite',
                        property: 'Ukuran',
                        label: 'Ukuran',
                        properties: [
                            { type: 'number', units: ['px'], default: '0', property: 'width', label: 'Lebar' },
                            { type: 'number', units: ['px'], default: '0', property: 'height', label: 'Tinggi' },
                        ]
                    },
                    {
                        type: 'composite',
                        property: 'Margin',
                        label: 'Margin',
                        properties: [
                            { type: 'number', units: ['px'], default: '0', property: 'margin-top', label: 'Margin Atas' },
                            { type: 'number', units: ['px'], default: '0', property: 'margin-bottom', label: 'Margin Bawah' },
                            { type: 'number', units: ['px'], default: '0', property: 'margin-left', label: 'Margin Kiri' },
                            { type: 'number', units: ['px'], default: '0', property: 'margin-right', label: 'Margin Kanan' },
                        ]
                    },
                    {
                        type: 'composite',
                        property: 'Padding',
                        label: 'Padding',
                        properties: [
                            { type: 'number', units: ['px'], default: '0', property: 'padding-top', label: 'Padding Atas' },
                            { type: 'number', units: ['px'], default: '0', property: 'padding-bottom', label: 'Padding Bawah' },
                            { type: 'number', units: ['px'], default: '0', property: 'padding-left', label: 'Padding Kiri' },
                            { type: 'number', units: ['px'], default: '0', property: 'padding-right', label: 'Padding Kanan' },
                        ]
                    },
                ]
            },
        ]
    },
    // ...
});

editor.Panels.addPanel({
    id: 'panel-top',
    el: '.panel__top',
});
