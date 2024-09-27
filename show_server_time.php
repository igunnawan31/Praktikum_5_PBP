<!-- File : show_server_time.html -->
<!-- Deskripsi : menampilkan waktu server dengan ajax -->
<!-- Nama : Muhamad Gunawan -->
<!-- NIM : 24060122120016 -->

<?php include('lib/header.html'); ?><br>

<div class="card">
    <div class="card-header"> Ajax Server Time</div>
    <div class="card-body">
        <button class="btn btn-success" onclick="get_server_time()">Show Server Time</button>
        <br><br>
        <div id="showtime"></div>
    </div>
</div>


<script src="ajax.js"></script>

<?php include('lib/footer.html');