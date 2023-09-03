<!doctype html>
<html>

<head>
    <meta charset="utf-8">
    <title>GrapesJS Preset Webpage</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css" rel="stylesheet"
        integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9" crossorigin="anonymous">
    <link href="https://unpkg.com/grapesjs/dist/css/grapes.min.css" rel="stylesheet">
    <link rel="stylesheet" href="{{ asset('css/builder/builder.css') }}">
    <link rel="stylesheet" href="{{ asset('css/style.css') }}">
    <script src="https://unpkg.com/grapesjs"></script>
</head>

<body>
    <div class="editor-row row g-0">

        {{-- Builder NavBar --}}
        <div class="panel__top builder__nav">
            <img src="{{ asset('img/MicroKit.svg') }}" alt="">
            <!-- <div class="panel__basic-actions"></div> -->
            {{-- <div class="panel__switcher"></div> --}}
        </div>

        {{-- Sidebar --}}
        <div class="col-2 sidebar">
            <button class="btn btn-primary block" type="submit">Button</button>
            <div class="blocks"></div>
            <div class="accordion" id="accordionExample">
                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            Navbars
                        </button>
                    </h2>
                    <div id="collapseOne" class="accordion-collapse collapse" aria-labelledby="headingOne"
                        data-bs-parent="#accordionExample">
                        <div class="accordion-body d-flex flex-column align-items-start">
                            <button data-toggle="popover" class='sidebar-item btn btn-sidebar' id="all-navbar">
                                All
                            </button>
                            <button data-toggle="popover" class='sidebar-item btn btn-sidebar' id="culinary">
                                Culinary
                            </button>
                            <button data-toggle="popover" class='sidebar-item btn btn-sidebar' id="fashion">
                                Fashion
                            </button>
                            <button data-toggle="popover" class='sidebar-item btn btn-sidebar' id="services">
                                Services
                            </button>
                        </div>
                    </div>
                </div>

                <div class="accordion-item">
                    <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse"
                            data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                            Hero sections
                        </button>
                    </h2>
                    <div id="collapseTwo" class="accordion-collapse collapse" aria-labelledby="headingTwo"
                        data-bs-parent="#accordionExample">
                        <div class="accordion-body d-flex flex-column align-items-start">
                            <button data-toggle="popover" class='sidebar-item btn btn-sidebar' id="all-hero">
                                All
                            </button>
                            <button data-toggle="popover" class='sidebar-item btn btn-sidebar' id="culinary-hero">
                                Culinary
                            </button>
                            <button data-toggle="popover" class='sidebar-item btn btn-sidebar' id="fashion-hero">
                                Fashion
                            </button>
                            <button data-toggle="popover" class='sidebar-item btn btn-sidebar' id="services-hero">
                                Services
                            </button>
                        </div>
                    </div>
                </div>
            </div>


        </div>

        {{-- Editor Canvas --}}
        {{-- Tempat nanti element dirender --}}
        <div class="col-8">
            <div class="editor-canvas">
                <div id="gjs">
                    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/css/bootstrap.min.css"
                        rel="stylesheet"
                        integrity="sha384-4bw+/aepP/YC94hEpVNVgiZdgIC5+VKNBQNGCHeKRQN+PtmoHDEXuppvnDJzQIu9"
                        crossorigin="anonymous">
                    <p>asdasd</p>
                </div>
            </div>

        </div>


        {{-- panel sebelah kanan tempat config element --}}
        <div class="col-2">
            <div class="panel__right">
                <div class="styles-container"></div>
            </div>
        </div>

    </div>






    <script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.8/dist/umd/popper.min.js"
        integrity="sha384-I7E8VVD/ismYTF4hNIPjVp/Zjvgyol6VFvRkX/vR+Vc4jQkC+hVqc2pM8ODewa9r" crossorigin="anonymous">
    </script>
    <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.1/dist/js/bootstrap.min.js"
        integrity="sha384-Rx+T1VzGupg4BHQYs2gCW9It+akI2MM/mndMCy36UVfodzcJcF0GGLxZIzObiEfa" crossorigin="anonymous">
    </script>
    <script src="{{ asset('js/builder/builder.js') }}"></script>
</body>

</html>
