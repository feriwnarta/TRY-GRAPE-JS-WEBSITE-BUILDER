const customComponents = (editor) => {
    // Komponen Paragraf
    editor.Components.addType('cmp-p', {
        tagName: 'p', // Menggunakan tag <p>
        model: {
            defaults: {
                stylable: ['color'],
                content: 'Teks paragraf Anda di sini', // Isi teks default
            }
        }
    });
};




const editor = grapesjs.init({
    // Indicate where to init the editor. You can also pass an HTMLElement
    container: '#gjs',
    // Get the content for the canvas directly from the element
    // As an alternative we could use: `components: '<h1>Hello World Component!</h1>'`,
    fromElement: true,
    width: 'auto',
    plugins: [customComponents],

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
    blockManager: {
        appendTo: '.blocks'
    },

    //     blockManager: {
    //         appendTo: '.blocks',
    //         blocks: [
    //             {
    //                 id: 'Hero', // id is mandatory
    //                 label: 'Hero', // You can use HTML/SVG inside labels
    //                 attributes: { class: 'gjs-block-section' },
    //                 content:
    //                     `
    //                 <div class="px-4 py-5 my-5 text-center">
    //     <img class="d-block mx-auto mb-4" src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57">
    //     <h1 class="display-5 fw-bold">Centered hero</h1>
    //     <div class="col-lg-6 mx-auto">
    //       <p class="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
    //       <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
    //         <button type="button" class="btn btn-primary btn-lg px-4 gap-3">Primary button</button>
    //         <button type="button" class="btn btn-outline-secondary btn-lg px-4">Secondary</button>
    //       </div>
    //     </div>
    //   </div>
    //                 `,
    //             }, {
    //                 id: 'text',
    //                 label: 'Text',
    //                 content: '<div data-gjs-type="text">Insert your text here</div>',
    //             }, {
    //                 id: 'image',
    //                 label: 'Image',
    //                 // Select the component once it's dropped
    //                 select: true,
    //                 // You can pass components as a JSON instead of a simple HTML string,
    //                 // in this case we also use a defined component type `image`
    //                 content: { type: 'image' },
    //                 // This triggers `active` event on dropped components and the `image`
    //                 // reacts by opening the AssetManager
    //                 activate: true,
    //             }
    //         ]
    //     },

    styleManager: {
        appendTo: '.styles-container',
        sectors: [
            {
                id: 'firstSector',
                name: 'First sector',
                properties: [
                    'width', 'min-width',
                    'height', 'min-height',
                ],
            },
            {
                id: 'secondSector',
                name: 'Second sector',
                properties: [
                    'color', 'font-size',
                ],
            },
        ],
    },

    // styleManager: {
    //     appendTo: '.styles-container',
    //     sectors: [
    //         {
    //             open: true,
    //             name: 'Edit',
    //             // Use built-in properties
    //             buildProps: ['font-family', 'font-size', 'font-weight', 'color', 'background-color', 'text-align', 'Ukuran', 'Margin', 'Padding'],
    //             properties: [
    //                 {
    //                     type: 'composite',
    //                     property: 'Ukuran',
    //                     label: 'Ukuran',
    //                     properties: [
    //                         { type: 'number', units: ['px'], default: '0', property: 'width', label: 'Lebar' },
    //                         { type: 'number', units: ['px'], default: '0', property: 'height', label: 'Tinggi' },
    //                     ]
    //                 },
    //                 {
    //                     type: 'composite',
    //                     property: 'Margin',
    //                     label: 'Margin',
    //                     properties: [
    //                         { type: 'number', units: ['px'], default: '0', property: 'margin-top', label: 'Margin Atas' },
    //                         { type: 'number', units: ['px'], default: '0', property: 'margin-bottom', label: 'Margin Bawah' },
    //                         { type: 'number', units: ['px'], default: '0', property: 'margin-left', label: 'Margin Kiri' },
    //                         { type: 'number', units: ['px'], default: '0', property: 'margin-right', label: 'Margin Kanan' },
    //                     ]
    //                 },
    //                 {
    //                     type: 'composite',
    //                     property: 'Padding',
    //                     label: 'Padding',
    //                     properties: [
    //                         { type: 'number', units: ['px'], default: '0', property: 'padding-top', label: 'Padding Atas' },
    //                         { type: 'number', units: ['px'], default: '0', property: 'padding-bottom', label: 'Padding Bawah' },
    //                         { type: 'number', units: ['px'], default: '0', property: 'padding-left', label: 'Padding Kiri' },
    //                         { type: 'number', units: ['px'], default: '0', property: 'padding-right', label: 'Padding Kanan' },
    //                     ]
    //                 },
    //             ]
    //         },
    //     ]
    // },


    // ...
});

// editor.DomComponents.addComponent({ type: 'cmp-p' });

// Fungsi untuk mendeteksi komponen berdasarkan tag name
function detectComponentsByTagName(tagName) {
    const components = editor.DomComponents.getComponents();
    const detectedComponents = [];

    components.forEach((component) => {
        if (component.get('tagName') === tagName) {
            detectedComponents.push(component);
        }
    });

    return detectedComponents;
}

// Event listener ketika komponen <p> diklik
editor.on('component:selected', (component) => {

    // Cek apakah komponen adalah tag <p>
    if (component && component.get('tagName') === 'p') {


        // Menghapus sektor "First sector" dari Style Manager
        const firstSector = editor.StyleManager.getSector('firstSector');

        if (firstSector) {
            editor.StyleManager.removeSector('firstSector');
        }

        // Menambahkan properti "text-align" ke "Second sector" dari Style Manager
        const secondSector = editor.StyleManager.getSector('secondSector');
        if (secondSector) {
            secondSector.properties.push({
                label: 'Minimum height',
                property: 'min-height',
                type: 'select',
                default: '100px',
                options: [
                    { id: '100px', label: '100' },
                    { id: '200px', label: '200' },
                ],
            }, { at: 0 });
        }

        // Refresh Style Manager untuk mencerminkan perubahan
        editor.StyleManager.render();
    }
});

console.log('Komponen dengan tag <p>:', detectComponentsByTagName('p'));

// editor.DomComponents.addComponent({ type: 'cmp-a' });

editor.Panels.addPanel({
    id: 'panel-top',
    el: '.panel__top',
});


let btnBlock = document.getElementsByClassName('block')[0]; // Mengambil elemen pertama dengan kelas 'block'

btnBlock.addEventListener('click', () => {

    

    editor.BlockManager.add('h1-block', {
        id: 'Hero', // id is mandatory
        label: 'Hero', // You can use HTML/SVG inside labels
        attributes: { class: 'gjs-block-section' },
        content:
            `
                        <div class="px-4 py-5 my-5 text-center">
            <img class="d-block mx-auto mb-4" src="/docs/5.0/assets/brand/bootstrap-logo.svg" alt="" width="72" height="57">
            <h1 class="display-5 fw-bold">Centered hero</h1>
            <div class="col-lg-6 mx-auto">
              <p class="lead mb-4">Quickly design and customize responsive mobile-first sites with Bootstrap, the world’s most popular front-end open source toolkit, featuring Sass variables and mixins, responsive grid system, extensive prebuilt components, and powerful JavaScript plugins.</p>
              <div class="d-grid gap-2 d-sm-flex justify-content-sm-center">
                <button type="button" class="btn btn-primary btn-lg px-4 gap-3">Primary button</button>
                <button type="button" class="btn btn-outline-secondary btn-lg px-4">Secondary</button>
              </div>
            </div>
          </div>
                        `,
    });

});



