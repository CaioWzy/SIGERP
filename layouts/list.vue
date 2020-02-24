<template>
<body>
    <div class="page-header mb-4">
        <div class="container py-2">
            <div class="row">
                <div class="col-1 controls">
                    <button type="button" class="btn btn-control btn-danger">
                        <i class="fas fa-angle-left"></i>
                    </button>
                </div>
                <div class="col page-header--search-box">
                    <div class="input-group">
                        <input type="text" class="form-control" placeholder="Pesquisar">
                    </div>
                </div>
                <div class="col-1 controls">
                    <button type="button" class="btn btn-control btn-danger float-right">
                        <i class="fas fa-user"></i>
                    </button>
                </div>
            </div>
            <div class="row mt-4">
                <div class="col">
                    <h2 class="listpage__title">Clientes</h2>
                </div>
                <div class="col">
                    <div class="controls float-right">
                        <button type="button" class="btn btn-success">
                            <i class="fas fa-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="container">
        <div class="row">
            <nuxt />
        </div>
    </div>
</body>
</template>


<style>
html {
    font-family: 'Roboto';
}

.controls > button {
    width: 2.5rem;
    height: 2.5rem;
    border-radius: 50% !important;
    background: rgba(0, 0, 0, .25);;
    border: none;
    opacity: .85;
}

.information {
    color: rgba(0, 0, 0, .75);
}

.information__separator {
    color: rgba(0, 0, 0, .5);
}

.information__matricula {
    color: rgba(0, 0, 0, .25);
}

.information .fas {
    width: 1.5rem;
    padding-right: 16px;
}

.information ul {
    padding: 0;
}

.card {
    font-size: .75rem;
}

.card-header {
    padding: .65rem 0;
}

.card-body {
    padding: .65rem 0;
}

.breadcrumb {
    background: transparent;
    padding: 0;
}

.input-group-text {
    background-color: #FFF;
    border-right: 0;
}

.form-control {
    border-left: 0;
}

th:not([scope="row"]) {
    color: rgba(0, 0, 0, .25);
}


.table,
th,
td,
tr {
    border: 0 !important;
    border-radius: .25rem;
}

/* Página de Listagem */

.page-header {
    background: #2980b9;
    color: #FFF;
}

.page-header--search-box input {
    background: rgba(0, 0, 0, .15);
    border: none;
}

.page-header--search-box input::placeholder {
    color: rgba(255, 255, 255, .5);
}


</style>